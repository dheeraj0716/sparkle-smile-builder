import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const services = [
  "Root Canal Treatment",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Fillings",
  "Full Mouth X-Ray",
  "Oral Scanning (3D)",
  "General Consultation",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
];

const BookAppointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", time: "",
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.service || !date || !form.time) {
      toast.error("Please fill all fields");
      return;
    }
    setSubmitted(true);
    toast.success("Appointment booked successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">Appointment Confirmed!</h2>
          <p className="text-muted-foreground mb-2">Thank you, {form.name}!</p>
          <p className="text-muted-foreground mb-6">
            Your appointment for <strong className="text-foreground">{form.service}</strong> on{" "}
            <strong className="text-foreground">{date && format(date, "PPP")}</strong> at{" "}
            <strong className="text-foreground">{form.time}</strong> has been confirmed.
          </p>
          <p className="text-sm text-muted-foreground">We'll send a confirmation to {form.email}</p>
          <Button variant="hero" className="mt-6" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", time: "" }); setDate(undefined); }}>
            Book Another Appointment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="gradient-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Book an Appointment</h2>
          <p className="text-primary-foreground/80 text-lg">Schedule your visit in under 2 minutes</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                  <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                  <Input placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                <Input type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Select Service *</label>
                <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                  <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Date *</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Time *</label>
                  <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                    <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button variant="hero" size="lg" type="submit" className="w-full h-12 text-base">
                Confirm Appointment
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By booking, you agree to our terms. We'll confirm via email and SMS.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
