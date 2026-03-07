import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users, Scan, Hospital, Phone, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const services = [
  { title: "Root Canal Treatment", desc: "Painless root canal therapy with advanced equipment", icon: "🦷" },
  { title: "Teeth Cleaning", desc: "Professional scaling and polishing for healthy gums", icon: "✨" },
  { title: "Dental Implants", desc: "Permanent tooth replacement with titanium implants", icon: "🔩" },
  { title: "Cosmetic Dentistry", desc: "Smile makeovers including veneers and bonding", icon: "😁" },
  { title: "Teeth Whitening", desc: "Professional whitening for a brighter smile", icon: "💎" },
  { title: "Fillings", desc: "Tooth-colored composite and ceramic fillings", icon: "🪥" },
];

const reviews = [
  { name: "Priya Sharma", rating: 5, text: "Excellent experience! Dr. Kiran is very professional and the clinic is super clean. Got my root canal done painlessly." },
  { name: "Rahul Mehta", rating: 5, text: "Best dental clinic in Fort. The staff is very friendly and the treatment was quick. Highly recommend for teeth cleaning." },
  { name: "Anjali Desai", rating: 5, text: "I was nervous about my dental implant but Dr. Kiran made it so comfortable. The advanced equipment really makes a difference." },
];

const whyChoose = [
  "Experienced dentist with 10+ years expertise",
  "Advanced 3D scanning & digital X-ray",
  "Hygienic, sterilized environment",
  "Modern, comfortable clinic",
  "Trusted by 650+ happy patients",
  "Affordable treatment plans",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sparkle Dental Care clinic interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="h-4 w-4 text-gold fill-current" />
              <span className="text-sm font-medium text-primary-foreground">4.9 Rating • 652 Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-4">
              Premium Dental Care in Fort, Mumbai
            </h2>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              Trusted by 650+ patients for painless, advanced dental treatments. Experience world-class care at Sparkle Dental Care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base h-12 px-8" asChild>
                <Link to="/book-appointment">Book Appointment <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base h-12 px-8 border-background/40 text-background hover:bg-background hover:text-foreground" asChild>
                <a href="tel:+919876543210"><Phone className="h-4 w-4 mr-1" /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-card border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Star className="h-6 w-6 text-gold" />, value: "4.9", label: "Star Rating" },
              { icon: <Users className="h-6 w-6 text-primary" />, value: "650+", label: "Happy Patients" },
              { icon: <Scan className="h-6 w-6 text-accent" />, value: "3D", label: "Advanced Equipment" },
              { icon: <Hospital className="h-6 w-6 text-primary" />, value: "Modern", label: "Clinic Facility" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                {item.icon}
                <span className="text-2xl font-heading font-bold text-foreground">{item.value}</span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-section-alt py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive dental care using the latest technology and techniques</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Why Choose Sparkle Dental Care?
              </h2>
              <div className="space-y-4">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img src={heroImage} alt="Modern dental equipment at Sparkle Dental Care" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-section-alt py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">What Our Patients Say</h2>
            <p className="text-muted-foreground">Real reviews from our happy patients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
            Take the first step towards a healthier, brighter smile. Book your consultation now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-base h-12 px-8" asChild>
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base h-12 px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+919876543210"><Phone className="h-4 w-4 mr-1" /> +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
