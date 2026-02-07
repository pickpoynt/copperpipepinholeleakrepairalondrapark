import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Poly-B Leak Detection",
    description: "Using precision acoustic and thermal testing to locate silent leaks in Polybutylene lines before they cause catastrophic Wake County floods.",
    link: "#polyb-info"
  },
  {
    icon: Hammer,
    title: "Whole House Repipe",
    description: "Removing all failing grey Polybutylene pipes and replacing them with premium PEX-A, complete with dry-wall repair and system testing.",
    link: "#polyb-info"
  },
  {
    icon: Shield,
    title: "PEX Pipe Upgrades",
    description: "Upgrading your Raleigh home to modern PEX-A piping, known for its flexibility, freeze resistance, and 50+ year life expectancy.",
    link: "#polyb-info"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Pipe Burst",
    description: "24/7 rapid response for Poly-B blowouts. We stabilize the leak and provide immediate options for partial or full-house restoration.",
    link: "#polyb-info"
  },
  {
    icon: ClipboardList,
    title: "Insurance Compliance",
    description: "Many Raleigh insurance providers refuse coverage for homes with Poly-B. We provide certified documentation of your repipe for your insurer.",
    link: "#polyb-info"
  },
  {
    icon: Activity,
    title: "Fixture Integration",
    description: "Ensuring your new PEX system integrates perfectly with your existing Raleigh kitchen and bathroom fixtures for optimal water pressure.",
    link: "#polyb-info"
  },
  {
    icon: Zap,
    title: "Main Line Replacement",
    description: "Expert replacement of exterior Polybutylene main water lines that connect your Raleigh home to the municipal water source.",
    link: "#polyb-info"
  },
  {
    icon: Droplets,
    title: "Scale & Sediment Flush",
    description: "Full system flushing after your repipe to ensure your Raleigh property has crystal clear water and no debris from old pipe fragments.",
    link: "#polyb-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Raleigh's Specialized Polybutylene Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't trust generic plumbers with a complex whole-house repipe. Our Raleigh team specializes specifically in the safe removal and replacement of Poly-B systems.
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
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
