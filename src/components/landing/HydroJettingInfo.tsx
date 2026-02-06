import { Zap, Shield, Wrench, Settings } from "lucide-react";

const cheyenneFactors = [
  {
    icon: Zap,
    title: "Wyoming Water Mineral Content",
    description: "Cheyenne's water supply from natural aquifers and snowmelt contains high mineral concentrations that lead to rapid pipe buildup and clogs requiring professional hydro jetting services."
  },
  {
    icon: Shield,
    title: "Harsh Winter Conditions",
    description: "Wyoming's extreme cold temperatures cause pipes to freeze and burst, creating blockages that need high-pressure hydro jetting to clear ice and debris effectively."
  },
  {
    icon: Wrench,
    title: "Aging Infrastructure",
    description: "Many Cheyenne homes and businesses have older plumbing systems that are prone to buildup, tree root intrusion, and sediment accumulation requiring regular hydro jetting maintenance."
  },
  {
    icon: Settings,
    title: "Commercial Requirements",
    description: "Restaurants, hotels, and businesses in Cheyenne need reliable hydro jetting services to maintain compliance with health codes and prevent costly plumbing emergencies."
  }
];

const hydroJettingBenefits = [
  {
    title: "High-Pressure Pipe Cleaning",
    description: "Our advanced hydro jetting equipment uses up to 4000 PSI water pressure to completely clear blockages, buildup, and debris from your pipes."
  },
  {
    title: "Root Intrusion Removal",
    description: "Specialized hydro jetting nozzles effectively remove tree roots and organic buildup that commonly affect Wyoming properties."
  },
  {
    title: "Preventative Maintenance",
    description: "Regular hydro jetting prevents major clogs and extends the life of your plumbing system in Cheyenne's challenging conditions."
  },
  {
    title: "Eco-Friendly Solution",
    description: "Uses only high-pressure water without chemicals, making it safe for your family, pets, and Cheyenne's environment."
  }
];

const serviceAreas = [
  "Cheyenne, WY",
  "Laramie, WY",
  "Casper, WY",
  "Gillette, WY",
  "Rock Springs, WY",
  "Sheridan, WY",
  "Green River, WY",
  "Evanston, WY"
];

export default function HydroJettingInfo() {
  return (
    <section id="hydro-jetting-info" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Professional Hydro Jetting Services in Cheyenne
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Advanced high-pressure water jetting solutions for residential and commercial properties throughout 
            Cheyenne and Wyoming. Our expert technicians use state-of-the-art equipment to clear even the toughest 
            pipe blockages safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Why Cheyenne Properties Need Hydro Jetting
            </h3>
            <div className="space-y-4">
              {cheyenneFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <factor.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{factor.title}</h4>
                    <p className="text-slate-600">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Hydro Jetting Benefits
            </h3>
            <div className="space-y-4">
              {hydroJettingBenefits.map((benefit, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
            Service Areas We Cover
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Serving all of Wyoming with professional hydro jetting services. 
              Call (877) 792-1410 for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}