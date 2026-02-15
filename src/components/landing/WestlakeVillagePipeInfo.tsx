import { ShieldAlert, Construction, CheckCircle2, Home } from "lucide-react";

const westlakeFactors = [
    {
        icon: ShieldAlert,
        title: "Aging Infrastructure Warnings",
        description: "Many Westlake Village homes built between the 1960s and 1980s still utilize original cast iron sewer lines. We specialize in identifying the tell-tale signs of pipe failure before a major backup occurs."
    },
    {
        icon: Construction,
        title: "Trenchless Pipe Rehabilitation",
        description: "Protect your immaculate Westlake landscaping. We utilize advanced pipe bursting and CIPP lining technology to replace your old cast iron without digging up your yard or driveway."
    },
    {
        icon: Home,
        title: "Luxury Property Protection",
        description: "We understand Westlake Village's high-end property standards. Our teams prioritize 'White Glove' service, ensuring your home remains spotless throughout the restoration process."
    },
    {
        icon: CheckCircle2,
        title: "Permanent Solution Guarantee",
        description: "We don't just patch problems; we replace outdated cast iron with modern, corrosion-resistant materials designed to last the lifetime of your home."
    }
];

const restorationBenefits = [
    {
        title: "Licensed Master Technicians",
        description: "Our experts are specifically trained in Ventura and LA County building codes, ensuring every replacement is fully compliant."
    },
    {
        title: "Advanced Scoping Tech",
        description: "We utilize high-definition sewer cameras to map out the exact condition of your cast iron lines, providing a factual basis for all recommendations."
    },
    {
        title: "Flat-Rate Project Pricing",
        description: "No hidden costs or hourly surprises. You'll receive a comprehensive project assessment and pricing before any work begins."
    },
    {
        title: "24/7 Priority Emergency Support",
        description: "If your cast iron lines fail, time is of the essence. Our local Westlake Village teams are ready to respond at any hour."
    }
];

const WestlakeVillagePipeInfo = () => {
    return (
        <section id="pipe-info" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        Westlake Village Specialists
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Outsmarting Cast Iron Corrosion in Westlake Village
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Cast iron pipes have a lifespan. In the specific soil conditions of Westlake Village, these pipes eventually succumb to scaling,
                        cracking, and internal corrosion. We provide modern, trenchless alternatives to restore your home's integrity.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {westlakeFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-orange-400">
                                Preservation of Your Property Value
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                Failing sewer lines are a significant liability. Our restoration services not only solve the plumbing crisis
                                but also secure the long-term value of your Westlake Village investment.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {restorationBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80"
                                alt="High-End Infrastructure Care"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Advanced Infrastructure Solutions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Plumbing Network */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Strategic Service Network
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Dallas Plumber", link: "https://dallasplumber.vercel.app" },
                            { name: "San Antonio Plumbing", link: "https://sanantonioplumbing.vercel.app" },
                            { name: "Plumber San Francisco CA", link: "https://plumbersanfranciscoca.vercel.app/" }
                        ].map((site) => (
                            <a
                                key={site.name}
                                href={site.link}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest hover:border-orange-500/50 shadow-xl"
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WestlakeVillagePipeInfo;
