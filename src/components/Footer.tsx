import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="text-lg font-heading font-bold">Sparkle Dental Care</h3>
                <p className="text-xs opacity-70">स्पार्कल डेंटल केयर</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Premium dental care in Fort, Mumbai. Trusted by 650+ patients for quality treatments with advanced technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/reviews", label: "Reviews" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
                { to: "/book-appointment", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Root Canal Treatment", "Teeth Cleaning", "Dental Implants", "Cosmetic Dentistry", "Teeth Whitening", "Fillings"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Fort, Mumbai, Maharashtra 400001, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+919876543210" className="hover:opacity-100">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@sparkledentalcare.in" className="hover:opacity-100">info@sparkledentalcare.in</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Sparkle Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
