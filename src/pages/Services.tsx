import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Root Canal Treatment",
    icon: "🦷",
    desc: "Advanced root canal therapy that saves your natural teeth with minimal discomfort.",
    benefits: ["Painless procedure", "Saves natural tooth", "Prevents infection spread"],
    duration: "60–90 minutes",
  },
  {
    title: "Teeth Cleaning (Scaling)",
    icon: "✨",
    desc: "Professional scaling and polishing to remove plaque, tartar, and surface stains.",
    benefits: ["Prevents gum disease", "Fresher breath", "Brighter smile"],
    duration: "30–45 minutes",
  },
  {
    title: "Teeth Whitening",
    icon: "💎",
    desc: "Professional-grade whitening for a dramatically brighter smile in one visit.",
    benefits: ["Instant results", "Safe procedure", "Long-lasting whiteness"],
    duration: "45–60 minutes",
  },
  {
    title: "Dental Implants",
    icon: "🔩",
    desc: "Permanent titanium implants that look and function like natural teeth.",
    benefits: ["Permanent solution", "Natural appearance", "Preserves jawbone"],
    duration: "Multiple visits",
  },
  {
    title: "Cosmetic Dentistry",
    icon: "😁",
    desc: "Complete smile makeovers including veneers, bonding, and smile design.",
    benefits: ["Custom smile design", "Veneers & bonding", "Confidence boost"],
    duration: "Varies by treatment",
  },
  {
    title: "Dental Fillings",
    icon: "🪥",
    desc: "Tooth-colored composite and ceramic fillings that blend naturally.",
    benefits: ["Natural appearance", "Durable materials", "Quick procedure"],
    duration: "30–45 minutes",
  },
  {
    title: "Full Mouth X-Ray",
    icon: "📷",
    desc: "Digital panoramic X-rays for comprehensive dental diagnostics.",
    benefits: ["Low radiation", "Instant results", "Comprehensive view"],
    duration: "15–20 minutes",
  },
  {
    title: "Oral Scanning (3D)",
    icon: "🔬",
    desc: "Advanced intraoral 3D scanning for precise treatment planning.",
    benefits: ["No impressions needed", "Accurate models", "Better treatment outcomes"],
    duration: "15–30 minutes",
  },
];

const Services = () => {
  return (
    <div>
      <section className="gradient-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive dental treatments using the latest technology for the best outcomes
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8">
            {services.map((s, i) => (
              <div key={s.title} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-2 mb-4">
                    {s.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">⏱ Duration: {s.duration}</p>
                  <Button variant="hero" asChild>
                    <Link to="/book-appointment">Book This Service <ArrowRight className="h-4 w-4 ml-1" /></Link>
                  </Button>
                </div>
                <div className={`bg-secondary rounded-2xl h-48 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="text-7xl">{s.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
