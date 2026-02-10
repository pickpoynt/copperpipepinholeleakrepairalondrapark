import { Shield, Wind, AlertTriangle, CheckCircle2, Home, Thermometer } from "lucide-react";

const AtticMoldInfo = () => {
    return (
        <section id="attic-mold-info" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Sausalito Attic Mold Remediation: Marin County Experts
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Sausalito's famous fog and hillside microclimates create high humidity levels that often lead to silent mold growth in attics. We specialize in non-toxic remediation and precision ventilation for Marin's unique architecture.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                                alt="Attic mold remediation Sausalito"
                                className="w-full h-full object-cover aspect-video brightness-90 group-hover:brightness-100 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                Hillside Microclimate Mitigation
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Houses in Sausalito face unique pressure from the Bay's moisture-rich air. When warm indoor air meets are cool attic surfaces during a foggy night, condensation triggers rapid mold germination on plywood and rafters.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">HEPA Filtration</h4>
                                        <p className="text-slate-500 text-sm">Captures 99.97% of mold spores.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                                        <Wind className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Ventilation Pro</h4>
                                        <p className="text-slate-500 text-sm">Permanent airflow solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-[2.5rem] bg-white border border-indigo-100 shadow-xl shadow-indigo-900/5 hover:-translate-y-2 transition-all duration-300">
                            <CheckCircle2 className="w-12 h-12 text-indigo-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Dry Ice Blasting</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "Eco-friendly, abrasive-free mold removal that preserves Sausalito's historic wood structures without chemicals."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                            <Home className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-500" />
                            <Shield className="w-12 h-12 text-indigo-200 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Sealant Defense</h3>
                            <p className="text-indigo-50/90 leading-relaxed italic">
                                "Advanced anti-microbial coatings that prevent moisture from penetrating redwood and pine timbers."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white border border-indigo-100 shadow-xl shadow-indigo-900/5 hover:-translate-y-2 transition-all duration-300">
                            <Thermometer className="w-12 h-12 text-indigo-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Thermal Analytics</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "High-precision thermal imaging to find hidden condensation points in hillside roof valleys."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtticMoldInfo;
