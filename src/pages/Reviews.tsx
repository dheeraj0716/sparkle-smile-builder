import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", rating: 5, text: "Excellent experience! Dr. Kiran is very professional and the clinic is super clean. Got my root canal done painlessly. Highly recommend!", date: "2 weeks ago" },
  { name: "Rahul Mehta", rating: 5, text: "Best dental clinic in Fort area. Staff is very friendly and the treatment was quick and painless. Great experience overall.", date: "1 month ago" },
  { name: "Anjali Desai", rating: 5, text: "I was very nervous about my dental implant but Dr. Kiran made it so comfortable. The advanced equipment really makes a difference.", date: "1 month ago" },
  { name: "Vikram Patel", rating: 5, text: "Very modern clinic with top-notch equipment. The 3D scanning was impressive. Dr. Kiran explained everything clearly before the procedure.", date: "2 months ago" },
  { name: "Sneha Joshi", rating: 4, text: "Good clinic, clean environment. Got my teeth cleaned and whitened. Results are fantastic. Will visit again for my next checkup.", date: "2 months ago" },
  { name: "Arjun Singh", rating: 5, text: "Brought my whole family here. The doctor is patient with kids too. Best dental clinic we've been to in Mumbai. Affordable pricing as well.", date: "3 months ago" },
  { name: "Meera Kulkarni", rating: 5, text: "Had a dental emergency and they accommodated me immediately. Dr. Kiran's expertise saved my tooth. Forever grateful!", date: "3 months ago" },
  { name: "Karthik Reddy", rating: 5, text: "The cosmetic dentistry work here is outstanding. My veneers look absolutely natural. People can't even tell the difference.", date: "4 months ago" },
  { name: "Pooja Nair", rating: 4, text: "Professional staff, clean clinic, and reasonable prices. The only dental clinic I trust in South Mumbai. Highly recommended.", date: "4 months ago" },
];

const Reviews = () => {
  return (
    <div>
      <section className="gradient-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Patient Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 text-gold fill-current" />
            ))}
          </div>
          <p className="text-primary-foreground/80 text-lg">4.9 out of 5 • Based on 652 reviews</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {r.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
