import { Phone, MapPin, Clock, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Expert Hot Tub Wiring in Des Moines
            </h2>
            <p className="text-lg text-slate-300">
              Contact us for safe, code-compliant spa and hot tub electrical installation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Call Us Now</h3>
                <a href="tel:8449012684" className="text-blue-400 text-xl font-bold hover:text-blue-300 transition-colors">
                  (844) 901-2684
                </a>
                <p className="text-slate-400 text-sm mt-1">Licensed Master Electricians</p>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Service Area</h3>
                <p className="text-slate-300">Des Moines, Iowa</p>
                <p className="text-slate-400 text-sm mt-1">Polk County & Surrounding Areas</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Hours</h3>
                <p className="text-slate-300">Mon - Sun: 7:00 AM - 9:00 PM</p>
                <p className="text-slate-400 text-sm mt-1">Emergency Service Available</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-8 text-center shadow-2xl border border-blue-600/30">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Enjoy Your New Hot Tub?
            </h3>
            <p className="text-blue-100 mb-6">
              Don't wait! Call now to schedule your electrical hookup. Our Des Moines electricians are ready to get your spa powered up safely and correctly.
            </p>
            <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg h-14 shadow-lg" asChild>
              <a href="tel:8449012684" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                (844) 901-2684
              </a>
            </Button>
            <p className="text-blue-200 text-sm mt-4">
              100% Code Compliant • Licensed & Insured • Free Estimates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
