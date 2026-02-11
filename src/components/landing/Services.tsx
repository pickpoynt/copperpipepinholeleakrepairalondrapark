import { Shield, Hammer, Droplets, Wind, Zap, Box, Warehouse, ClipboardCheck, Sparkles } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Structural Restoration",
    description: "Deep-pore cleaning of garage studs, rafters, and framing using HEPA-filtered abrasive techniques.",
    link: "#garage-mold-info"
  },
  {
    icon: Box,
    title: "Content Cleaning",
    description: "Meticulous sanitization of tools, storage bins, and household items affected by garage humidity.",
    link: "#garage-mold-info"
  },
  {
    icon: Wind,
    title: "Air Purification",
    description: "Industrial HEPA air scrubbing to remove airborne spores and eliminate persistent musty garage odors.",
    link: "#garage-mold-info"
  },
  {
    icon: Sparkles,
    title: "Antimicrobial Sealing",
    description: "Application of hospital-grade encapsulants to prevent future mold growth on unconditioned surfaces.",
    link: "#garage-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Industrial Strength Garage Restoration
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Standard cleaning isn't enough for the unique environment of a garage. We provide specialized protocols designed for durability and total spore elimination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <service.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider">
                  View Protocol <ClipboardCheck className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
