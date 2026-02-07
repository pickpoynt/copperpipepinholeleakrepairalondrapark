import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Triangle Repipe Experts",
    description: "We have successfully repiped thousands of homes in Raleigh, Cary, and Apex, specifically focusing on the peculiar failure points of Poly-B."
  },
  {
    icon: Microscope,
    title: "Non-Invasive Process",
    description: "We use surgical precision to make minimal drywall cuts, ensuring your Raleigh home remains livable throughout the 3-day repipe process."
  },
  {
    icon: Building2,
    title: "PEX-A Only",
    description: "We only use premium PEX-A piping, the most durable and flexible option available, ensuring your Raleigh investment is protected for decades."
  },
  {
    icon: ClipboardCheck,
    title: "Permit & Inspection Ready",
    description: "Every job is fully permitted through the City of Raleigh or Wake County, with a final plumbing inspection required for your peace of mind."
  },
  {
    icon: Shield,
    title: "Insurance Approved",
    description: "Our certified repipe documentation is recognized by all major North Carolina insurers, often lead to significant premium reductions."
  },
  {
    icon: MapPin,
    title: "Local Raleigh Focus",
    description: "We are born and raised Raleigh locals. From North Hills to Brier Creek, we know the local codes and common neighborhood builds."
  }
];

const stats = [
  { number: "2500+", label: "Raleigh Repipes" },
  { number: "3-Days", label: "Average Time" },
  { number: "100%", label: "PEX-A Used" },
  { number: "Licensed", label: "In NC" }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Raleigh's Highest Rated Repipe Specialists
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the team that Raleigh homeowners trust. We specialize in turning a stressful pipe failure into a permanent, high-value plumbing upgrade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
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

        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
