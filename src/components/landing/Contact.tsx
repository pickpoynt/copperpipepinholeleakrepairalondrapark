import { Phone, MapPin, ShieldCheck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Schedule Your Sausalito Attic Remediation
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Protect your hillside home. Our Sausalito attic specialists use advanced technology to permanently remove mold and optimize ventilation for your Marin County property.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-900/40">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-indigo-400 font-bold mb-1 uppercase tracking-wider text-sm">Marin Attic Hotline</div>
                  <a href="tel:3802660944" className="text-2xl md:text-3xl font-heading font-bold text-white hover:text-indigo-400 transition-colors">
                    (380) 266-0944
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <MapPin className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                  <div className="text-indigo-400 font-bold mb-1 uppercase tracking-wider text-sm">Sausalito HQ</div>
                  <div className="text-xl font-heading font-bold text-white">
                    Serving Sausalito & All Marin County
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <Home className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                  <div className="text-indigo-400 font-bold mb-1 uppercase tracking-wider text-sm">Restoration Status</div>
                  <div className="text-xl font-heading font-bold text-white">
                    24/7 Emergency Attic & Ventilation Restoration
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in-delay-1">
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Request Attic Assessment
              </h3>
              <p className="text-slate-600 mb-8 font-medium">
                Call now for a professional moisture diagnostic. We offer upfront pricing and certified attic restoration for Sausalito property owners and associations.
              </p>

              <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 mb-8">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 mb-1 leading-none uppercase text-xs tracking-widest">CA Licensed & Bonded</div>
                    <p className="text-sm text-slate-600">Marin County Remediation License #MARINREST1. Certified IICRC Microbial Remediation Specialists.</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-200 h-16 text-xl font-bold rounded-2xl" asChild>
                <a href="tel:3802660944" className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call (380) 266-0944
                </a>
              </Button>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
