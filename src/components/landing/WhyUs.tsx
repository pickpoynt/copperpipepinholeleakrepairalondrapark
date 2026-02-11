import { ShieldCheck, Zap, Users, Award, Biohazard, Wind, Warehouse, Hammer, Lock } from "lucide-react";

const features = [
  {
    icon: Warehouse,
    title: "Garage Specialists",
    description: "We understand the unique construction of Ambler garages, from pole barns to historic attached structures."
  },
  {
    icon: Wind,
    title: "Cross-Contamination Guard",
    description: "Our strict containment protocols prevent garage spores from entering your primary living areas during cleaning."
  },
  {
    icon: Hammer,
    title: "Structural Deep-Cleaning",
    description: "We don't just spray surface mold; we penetrate wood grain to remove the root 'hyphae' of the infestation."
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description: "When combined with our moisture control measures, our garage remediation is backed by a permanent guarantee."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            The Ambler Choice for Professional Garage Restoration
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            A moldy garage is a liability for your health and your property value. We provide the high-impact remediation required to make your storage and workspace safe again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-orange-600 to-orange-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Urgent Garage Mold Issue?</h3>
            <p className="text-orange-50 text-lg font-medium opacity-90">
              Our Ambler crews are standing by for same-day inspections. Reclaim your garage today with professional bio-hazard cleaning.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-orange-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
          >
            <ShieldCheck className="w-6 h-6" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
