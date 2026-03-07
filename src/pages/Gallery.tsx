import heroImg from "@/assets/hero-clinic.jpg";
import receptionImg from "@/assets/clinic-reception.jpg";
import treatmentImg from "@/assets/treatment-room.jpg";
import equipmentImg from "@/assets/dental-equipment.jpg";
import doctorImg from "@/assets/doctor-profile.jpg";

const images = [
  { src: heroImg, alt: "Main treatment room", label: "Treatment Room" },
  { src: receptionImg, alt: "Clinic reception area", label: "Reception Area" },
  { src: treatmentImg, alt: "Advanced treatment room", label: "Treatment Suite" },
  { src: equipmentImg, alt: "3D scanning equipment", label: "3D Scanner & X-Ray" },
  { src: doctorImg, alt: "Dr. Kiran", label: "Dr. Kiran" },
  { src: heroImg, alt: "Dental chair and equipment", label: "Modern Equipment" },
];

const Gallery = () => {
  return (
    <div>
      <section className="gradient-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Gallery</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our modern clinic and facilities
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-background font-heading font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
