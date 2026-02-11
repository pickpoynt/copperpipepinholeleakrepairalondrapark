import { Shield, Wind, Zap, FlaskConical, Search, ClipboardCheck, Activity, Gauge } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Hydroxyl Cleansing",
    description: "Utilizing molecular-level oxidation to kill surface mold and neutralize airborne mVOCs without residue.",
    link: "#musty-odor-info"
  },
  {
    icon: FlaskConical,
    title: "Bio-Enzyme Treatment",
    description: "Penetrating deep into subfloors and structural wood to digest organic odor sources at the source.",
    link: "#musty-odor-info"
  },
  {
    icon: Wind,
    title: "HEPA Air Scrubbing",
    description: "Micro-filtration of indoor air to remove 99.97% of particulates, spores, and odor-carrying dust.",
    link: "#musty-odor-info"
  },
  {
    icon: Search,
    title: "Moisture Source Mapping",
    description: "Thermal and moisture diagnostics to identify the hidden leaks or vapor points causing the musty smell.",
    link: "#musty-odor-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Scientific Odor Elimination
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Standard cleaning cannot reach the molecular depth of a musty odor. We use advanced purification technology to reset your indoor environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider">
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
