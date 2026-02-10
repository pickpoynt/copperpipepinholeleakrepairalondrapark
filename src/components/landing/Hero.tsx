import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Waves, Zap, Home } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Attic mold remediation Sausalito
      <span className="block text-indigo-400 mt-2">Sausalito Attic Mold Pros: Hillside Moisture Specialists</span>
    </>
  ),
  subtitle = "Stop foggy-night condensation from rotting your home. Our specialized attic remediation and Marin-grade ventilation systems target spores trapped in your roof—preventing health risks with Sausalito precision.",
  image = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Attic mold remediation Sausalito" className="w-full h-full object-cover brightness-75" />
        {/* UNIQUE OVERLAY IMAGE: Using a spore texture overlay for the niche */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224efc74?auto=format&fit=crop&q=80"
            alt="Spore Texture Overlay"
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-3000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/60 to-indigo-950/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-8 animate-fade-in shadow-lg shadow-indigo-500/5">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Sausalito's Certified Remediation Specialists</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-indigo-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Remediation Methodology
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Home className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-white font-medium">Attic Mold Pros</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-white font-medium">1-Hour Response</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-white font-medium">EPA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
