import { Zap, Activity, Settings, Shield, AlertTriangle, CheckCircle2, Box, Calendar } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Hot Tub Wiring",
    description: "Complete electrical wiring for new hot tubs and spas. We provide dedicated 50A/60A circuits to ensure reliable power for your heater and jets.",
    link: "#hottub-info"
  },
  {
    icon: Activity,
    title: "Spa Panel Installation",
    description: "Professional installation of outdoor spa disconnect panels. We ensure safe, code-compliant shut-off switches within sight of your hot tub.",
    link: "#hottub-info"
  },
  {
    icon: Settings,
    title: "Panel Upgrades",
    description: "Electrical service panel upgrades (100A to 200A) to accommodate the additional load of your new hot tub or swim spa.",
    link: "#hottub-info"
  },
  {
    icon: Shield,
    title: "GFCI Protection",
    description: "Installation of Ground Fault Circuit Interrupter (GFCI) breakers to protect you and your family from electrical shock hazards in wet environments.",
    link: "#hottub-info"
  },
  {
    icon: AlertTriangle,
    title: "Troubleshooting",
    description: "Expert diagnosis and repair of hot tub electrical issues. We fix tripping breakers, heater failures, and control board connection problems.",
    link: "#hottub-info"
  },
  {
    icon: Box,
    title: "Relocation Wiring",
    description: "Disconnect and reconnect services for moving hot tubs. We ensure safe disconnection at the old spot and proper hookup at the new location.",
    link: "#hottub-info"
  },
  {
    icon: CheckCircle2,
    title: "Safety Inspections",
    description: "Comprehensive safety audits of existing spa wiring. We check for proper grounding, bonding, and code compliance to ensure safety.",
    link: "#hottub-info"
  },
  {
    icon: Calendar,
    title: "Permit Management",
    description: "We handle all electrical permits and inspections with the City of Des Moines and Polk County, ensuring your installation is fully legal.",
    link: "#hottub-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Hot Tub Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional electrical services for hot tubs, spas, and swim spas in Des Moines, Iowa. Licensed electricians ensuring safety and code compliance.
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
