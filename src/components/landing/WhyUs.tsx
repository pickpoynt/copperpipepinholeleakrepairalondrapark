import { ShieldCheck, Zap, Users, Award, Wind, FlaskConical, Search, Activity } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Molecular Removal",
    description: "We don't mask smells with perfumes. Our technology changes the molecular structure of the odor to eliminate it forever."
  },
  {
    icon: Search,
    title: "Diagnostic Precision",
    description: "We utilize thermal imaging and moisture meters to find the hidden vapor intrusion causing the 'old house' smell."
  },
  {
    icon: Wind,
    title: "NASA-Grade Tech",
    description: "Our hydroxyl generators utilize the same atmospheric purification technology used to clean the air on the ISS."
  },
  {
    icon: ShieldCheck,
    title: "Eco-Friendly Pledge",
    description: "Our biological and enzymatic treatments are 100% non-toxic and safe for children, pets, and sensitive families."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Why Pitman Homes Trust Our Air Quality Science
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Odor removal requires more than just masking; it requires a deep understanding of atmospheric chemistry and hydrothermal dynamics. We provide the permanent solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-indigo-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Can't Find the Source?</h3>
            <p className="text-indigo-50 text-lg font-medium opacity-90">
              Our Pitman field teams can pinpoint hidden moisture and odor points within 24 hours. Get your home's air back to zero.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-indigo-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
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
