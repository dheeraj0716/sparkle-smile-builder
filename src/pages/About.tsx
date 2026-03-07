import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Heart } from "lucide-react";
import doctorImg from "@/assets/doctor-profile.jpg";
import clinicImg from "@/assets/clinic-reception.jpg";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Sparkle Dental Care</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Your trusted dental partner in Fort, Mumbai — delivering premium oral healthcare with compassion and expertise since 2014.
          </p>
        </div>
      </section>

      {/* About Clinic */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img src={clinicImg} alt="Sparkle Dental Care reception" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Our Clinic</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Located in the heart of Fort, Mumbai, Sparkle Dental Care is a state-of-the-art dental clinic equipped with the latest technology including 3D scanning, digital X-rays, and advanced sterilization systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing a comfortable, hygienic, and welcoming environment where patients feel at ease during their treatments. Our modern infrastructure ensures precise diagnostics and effective treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="bg-section-alt py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Dr. Kiran</h3>
              <p className="text-primary font-medium mb-4">BDS, MDS (Conservative Dentistry) • 10+ Years Experience</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Kiran is a highly experienced dental surgeon specializing in conservative and cosmetic dentistry. With over a decade of practice, he has successfully treated thousands of patients, earning a stellar 4.9-star rating.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His patient-first approach, gentle techniques, and commitment to using cutting-edge technology make him one of the most trusted dentists in Mumbai's Fort area.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Award className="h-5 w-5 text-primary" />, text: "10+ Years Experience" },
                  { icon: <Heart className="h-5 w-5 text-accent" />, text: "650+ Happy Patients" },
                  { icon: <Shield className="h-5 w-5 text-primary" />, text: "Advanced Certifications" },
                  { icon: <CheckCircle className="h-5 w-5 text-accent" />, text: "Painless Procedures" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-foreground">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-card-hover">
              <img src={doctorImg} alt="Dr. Kiran - Lead Dentist" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Our Mission</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            To provide accessible, affordable, and world-class dental care to every patient who walks through our doors. We believe everyone deserves a healthy, confident smile.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-appointment">Book Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
