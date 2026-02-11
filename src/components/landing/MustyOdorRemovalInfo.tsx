import { Shield, Wind, Zap, FlaskConical, Sun, Thermometer, Search, Droplets } from "lucide-react";

const MustyOdorRemovalInfo = () => {
    return (
        <section id="musty-odor-info" className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm">
                            <Wind className="w-4 h-4" />
                            Molecular Air Purification
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                            Musty odor removal Pitman nj: Deep Air Decontamination
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            Persistent musty smells in Pitman's historic homes are often the result of active Microbial Volatile Organic Compounds (mVOCs). We don't just mask odors with perfumes; we utilize molecular-level neutralization to eliminate the source forever.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-indigo-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Hydroxyl Generation</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We utilize NASA-developed hydroxyl technology to break down odor-causing molecules in the air and on surfaces without the use of harsh chemicals.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-indigo-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                                <FlaskConical className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Enzymatic Bio-Neutralization</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                For odors trapped in subfloors or behind walls, we apply proprietary bio-enzymes that digest organic odor sources at the cellular level.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-indigo-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                                <Sun className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">HEPA Air Scrubbing</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Our industrial air scrubbers cycle the indoor air 4-6 times per hour, removing 99.97% of the particulates that carry musty odors.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                                alt="Clear Air Environment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pitman's Vapor Intrusion Pros</h3>
                                <p className="text-indigo-100 text-lg leading-relaxed mb-8 opacity-90 font-medium">
                                    Many Pitman homes sit on high-moisture soil, leading to vapor intrusion—the primary cause of the 'old house smell.' We provide the scientific diagnostics needed to stop the vapor and refresh your indoor air quality permanently.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Search className="text-indigo-400 w-6 h-6" />
                                        Thermal Source Identification
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Search className="text-indigo-400 w-6 h-6" />
                                        Advanced Ozone Treatment
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Search className="text-indigo-400 w-6 h-6" />
                                        Humidity Control Integration
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="text-2xl font-bold text-white mb-4">Why That Smell Lingers</h4>
                                <ul className="text-indigo-50 space-y-4 font-medium opacity-80">
                                    <li>• Hidden moisture in crawlspaces or basements</li>
                                    <li>• Active mold spores releasing mVOC gases</li>
                                    <li>• Stagnant air in closets and unvented areas</li>
                                    <li>• Porous materials (drywall, wood) absorbing odors</li>
                                    <li>• Improper grading pushing moisture under the home</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MustyOdorRemovalInfo;
