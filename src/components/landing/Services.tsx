import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Droplets, Waves, Home, Microscope } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Eco-Remediation",
    description: "Surgical removal of attic mold using dry ice blasting and non-toxic antimicrobials safe for Sausalito homes.",
    link: "#attic-mold-info"
  },
  {
    icon: Wind,
    title: "Hillside Ventilation",
    description: "Precision-engineered ridge and soffit vent retrofitting to stop fog-moisture accumulation in steep rooflines.",
    link: "#attic-mold-info"
  },
  {
    icon: ShieldCheck,
    title: "HEPA Air Scrubbing",
    description: "Industrial-grade air filtration to capture 99.97% of mold spores during the remediation process.",
    link: "#attic-mold-info"
  },
  {
    icon: Thermometer,
    title: "Thermal Mapping",
    description: "Digital analysis of temperature differentials in your roof deck to find hidden fog-water intrusion points.",
    link: "#attic-mold-info"
  },
  {
    icon: Filter,
    title: "Particulate Testing",
    description: "Sausalito-specific air quality baseline testing to track remediation progress and indoor safety.",
    link: "#attic-mold-info"
  },
  {
    icon: Shield,
    title: "Non-Toxic Sealants",
    description: "Applying EPA-registered, zero-VOC coatings that prevent mold roots from penetrating redwood rafters.",
    link: "#attic-mold-info"
  },
  {
    icon: Activity,
    title: "Clearance Verification",
    description: "Post-remediation inspection and moisture testing to certify your attic is professionally dry and mold-free.",
    link: "#attic-mold-info"
  },
  {
    icon: Zap,
    title: "1-Hour Sausalito ETA",
    description: "Marin County's fastest attic diagnostic crew. Available 24/7 for emergency moisture intrusion calls.",
    link: "#attic-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Sausalito's Advanced Attic Recovery Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Protect your hillside home. Our Sausalito restoration team uses specialized attic equipment and Marin County moisture protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


