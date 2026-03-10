import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingDetails {
  patientName: string;
  patientEmail: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { patientName, patientEmail, service, appointmentDate, appointmentTime }: BookingDetails = await req.json();

    if (!patientName || !patientEmail || !service || !appointmentDate || !appointmentTime) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    // If no Resend key, log and return success (booking still saved)
    if (!RESEND_API_KEY) {
      console.log("No RESEND_API_KEY configured. Skipping email. Booking details:", {
        patientName, patientEmail, service, appointmentDate, appointmentTime,
      });
      return new Response(JSON.stringify({ success: true, emailSent: false, message: "Booking saved. Email not configured." }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fffe; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0d9488, #0f766e); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">✨ Sparkle Dental Care</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">Appointment Confirmation</p>
        </div>
        <div style="padding: 32px;">
          <p style="color: #1a1a1a; font-size: 16px;">Dear <strong>${patientName}</strong>,</p>
          <p style="color: #444; line-height: 1.6;">Your appointment has been successfully booked. Here are the details:</p>
          <div style="background: white; border: 1px solid #e0f2f1; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; text-align: right;">${service}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Date</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; text-align: right;">${appointmentDate}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Time</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; text-align: right;">${appointmentTime}</td></tr>
            </table>
          </div>
          <p style="color: #444; line-height: 1.6;">📍 <strong>Location:</strong> Fort, Mumbai, Maharashtra</p>
          <p style="color: #444; line-height: 1.6;">📞 <strong>Contact:</strong> +91 98765 43210</p>
          <hr style="border: none; border-top: 1px solid #e0f2f1; margin: 24px 0;" />
          <p style="color: #888; font-size: 13px; text-align: center;">If you need to reschedule, please call us at least 24 hours before your appointment.</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sparkle Dental Care <onboarding@resend.dev>",
        to: [patientEmail],
        subject: `Appointment Confirmed - ${service} on ${appointmentDate}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(JSON.stringify({ success: true, emailSent: false, error: data }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, emailSent: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
