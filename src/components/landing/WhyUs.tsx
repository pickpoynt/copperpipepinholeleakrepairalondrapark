import { Shield, Zap, Clock, Home, Award, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed Electricians",
    description: "Our team consists of fully licensed and insured master electricians in Iowa. We have specific training in aquatic electrical systems to ensure 100% code compliance."
  },
  {
    icon: Zap,
    title: "Spa Specialists",
    description: "Unlike general electricians, we specialize in hot tub and spa wiring. We understand the specific power requirements of all major brands like Jacuzzi, Hot Spring, and Cal Spas."
  },
  {
    icon: Home,
    title: "Des Moines Locals",
    description: "We know Des Moines and Polk County electrical codes inside and out. From West Des Moines to Ankeny, we guarantee your installation passes inspection."
  },
  {
    icon: Award,
    title: "Safety First",
    description: "Water and electricity demand the highest safety standards. We meticulously install GFCIs, bonding, and emergency disconnects to keep your family safe."
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No surprises. We provide detailed, flat-rate quotes for your hot tub wiring project, including materials, labor, and permit fees."
  },
  {
    icon: Clock,
    title: "Prompt Scheduling",
    description: "Ready to soak? We offer flexible scheduling and efficient installation to get your hot tub running as soon as it's delivered."
  }
];

const stats = [
  { number: "300+", label: "Spas Wired" },
  { number: "100%", label: "Code Compliant" },
  { number: "5-Star", label: "Rated Service" },
  { number: "Local", label: "Des Moines" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Des Moines Chooses Us for Hot Tub Wiring
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are the trusted choice for safe, reliable, and professional hot tub electrical installation in Central Iowa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
