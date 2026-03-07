import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div>
      <section className="gradient-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h2>
          <p className="text-primary-foreground/80 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                {[
                  { icon: <MapPin className="h-5 w-5 text-primary" />, title: "Address", text: "Fort, Mumbai, Maharashtra 400001, India" },
                  { icon: <Phone className="h-5 w-5 text-primary" />, title: "Phone", text: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: <Mail className="h-5 w-5 text-primary" />, title: "Email", text: "info@sparkledentalcare.in", href: "mailto:info@sparkledentalcare.in" },
                  { icon: <Clock className="h-5 w-5 text-primary" />, title: "Clinic Hours", text: "Mon–Sat: 9 AM – 8 PM | Sun: 10 AM – 2 PM" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{item.text}</a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.3!2d72.832!3d18.932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzU1LjIiTiA3MsKwNDknNTUuMiJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sparkle Dental Care location"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <Input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={15}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
