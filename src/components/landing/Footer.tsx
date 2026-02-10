import { Phone, Mail, MapPin, Home, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Sausalito Attic Mold Pros
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Sausalito's leading specialists in hillside attic mold remediation. We protect your Marin home with scientific extraction and full ventilation engineering technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:3802660944" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Attic Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-600" /> Attic Mold Remediation</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-600" /> Hillside Ventilation</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-600" /> HEPA Air Scrubbing</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-600" /> Thermal Mapping</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-600" /> Insulation Removal</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Sausalito Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600" /> Bridgeway/Downtown</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600" /> Sausalito Hillside</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600" /> Marin City Area</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600" /> Spring Valley</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600" /> Old Town Sausalito</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Marin County Hotline</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-indigo-400 font-bold text-sm uppercase mb-2">CA Licensed & Bonded</div>
              <a href="tel:3802660944" className="text-2xl font-heading font-bold text-white hover:text-indigo-400 transition-colors">
                (380) 266-0944
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                Licensed & Insured #MARINREST1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Sausalito Attic Mold Pros. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Attic mold remediation Sausalito</div>
            <div className="w-2 h-2 rounded-full bg-indigo-600/30" />
            <div className="text-xs text-slate-600 italic">Marin Hillside Restoration</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sausalito Attic Mold Pros",
          "telephone": "+1-380-266-0944",
          "url": "https://sausalito-attic-mold.com/",
          "logo": "https://sausalito-attic-mold.com/logo.png",
          "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
          "description": "Professional attic mold remediation and ventilation services in Sausalito, CA. We specialize in hillside moisture control and non-toxic removal.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Sausalito and the Hillside Districts",
            "addressLocality": "Sausalito",
            "addressRegion": "CA",
            "postalCode": "94965",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.8591,
            "longitude": -122.4853
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;

