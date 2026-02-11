import { Shield, Hammer, Droplets, Wind, Zap, Box, Warehouse, ThermometerSnowflake } from "lucide-react";

const GarageMoldRemediationInfo = () => {
    return (
        <section id="garage-mold-info" className="py-24 bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 mb-6 font-bold uppercase tracking-wider text-sm">
                            <Warehouse className="w-4 h-4" />
                            Industrial Grade Garage Detox
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                            Garage mold remediation Ambler: Specialized Restoration
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            Garages in Ambler often suffer from poor ventilation and thermal bridging, leading to aggressive mold growth on drywall, rafters, and stored valuables. We provide industrial-strength remediation designed for unconditioned spaces.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                                <Box className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Storage Content Cleaning</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We don't just clean walls. We specialize in the meticulous decontamination of stored items, tools, and keepsakes affected by garage humidity.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                                <ThermometerSnowflake className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vapor Barrier Install</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                preventing future growth by addressing the thermal contrast between your garage's concrete floor and Ambler's varying seasonal temperatures.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                                <Hammer className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Structural Sanding</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                For exposed garage rafters and studs, we use HEPA-filtered abrasive cleaning to remove deeply embedded mold hyphae from wood pores.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1599423524402-0e86b0266050?auto=format&fit=crop&q=80"
                                alt="Garage Restoration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ambler's Garage Mold Experts</h3>
                                <p className="text-orange-100 text-lg leading-relaxed mb-8 opacity-90 font-medium">
                                    Detached or attached, your garage is a critical part of your home's envelope. Mold spores here can easily migrate into living areas via HVAC systems or shared doorways. We stop the spread at the source.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Zap className="text-orange-400 w-6 h-6" />
                                        Negative Pressure Containment
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Zap className="text-orange-400 w-6 h-6" />
                                        Antimicrobial Shield Coating
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Zap className="text-orange-400 w-6 h-6" />
                                        Ventilation Improvement Plans
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="text-2xl font-bold text-white mb-4">Common Garage Triggers</h4>
                                <ul className="text-orange-50 space-y-4 font-medium opacity-80">
                                    <li>• Roof leaks in detached garage structures</li>
                                    <li>• Condensation on uninsulated metal doors</li>
                                    <li>• Poor grading pushing water against foundations</li>
                                    <li>• Storing wet vehicles in enclosed spaces</li>
                                    <li>• Humidity spikes in Ambler's humid summers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GarageMoldRemediationInfo;
