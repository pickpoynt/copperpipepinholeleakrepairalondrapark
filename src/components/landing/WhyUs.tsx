import { Shield, Microscope, MapPin, Home, ClipboardCheck, Wind, Award, Sparkles, Droplets, Waves } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "Sausalito Microclimate Experts",
    description: "We lead Marin County in solving attic moisture issues caused by Sausalito's unique fog and hillside humidity."
  },
  {
    icon: Microscope,
    title: "Eco-Friendly Remediation",
    description: "Advanced dry ice blasting and non-toxic antimicrobials that are safer for your family and Sausalito's environment."
  },
  {
    icon: Wind,
    title: "Precision Ventilation",
    description: "Specialized in retrofitting Marin hillside homes with high-performance airflow systems that prevent mold roots."
  },
  {
    icon: ClipboardCheck,
    title: "IICRC Certified Marin",
    description: "Our team is IICRC certified in microbial remediation, ensuring every job meets California's highest standards."
  },
  {
    icon: Shield,
    title: "EPA Air Quality Guarantee",
    description: "We don't just remove mold; we purify your air. Every project includes HEPA air scrubbing and clearance testing."
  },
  {
    icon: Award,
    title: "Historic Home Care",
    description: "Decades of experience working with Sausalito's historic redwood and timber-frame attic structures."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Sausalito's Choice for Attic Restoration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the remediation team that Marin County homeowners trust. We specialize in turning a moldy attic into a healthy, dry space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;




