import { Phone, MapPin, Mail, Shield, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Des Moines Hot Tub & Spa Wiring",
    "image": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80",
    "telephone": "8449012684",
    "email": "service@hottubelectriciandesmoines.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Des Moines",
      "addressRegion": "IA",
      "postalCode": "50309",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.5868",
      "longitude": "-93.6250"
    },
    "url": "https://hot-tub-electrician-des-moines-ia.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [],
    "areaServed": {
      "@type": "City",
      "name": "Des Moines",
      "containedInPlace": {
        "@type": "State",
        "name": "Iowa"
      }
    },
    "description": "Professional hot tub and spa wiring services in Des Moines, Iowa. We specialize in hot tub electrical hookups, spa disconnects, circuit installation, and panel upgrades. Licensed electricians serving Des Moines and Polk County.",
    "services": [
      "Hot tub electrician near me Des Moines IA",
      "Hot tub wiring installation",
      "Spa electrical hookup",
      "Jacuzzi wiring",
      "Spa panel installation",
      "GFCI breaker installation",
      "Electrical panel upgrade for hot tub",
      "Des Moines spa electrician"
    ]
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">HTE</span>
              </div>
              <span className="font-heading font-bold text-lg">Des Moines Hot Tub Wiring</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Des Moines' trusted experts for hot tub and spa electrical installations. We ensure your relaxation oasis is powered safely and correctly, adhering to all local Iowa electrical codes.
            </p>
            <div className="flex items-center gap-2 text-blue-500">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Licensed Master Electricians</span>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Hot Tub Wiring</li>
              <li>Spa Panel Installation</li>
              <li>Electrical Service Upgrades</li>
              <li>GFCI Installation</li>
              <li>Troubleshooting & Repair</li>
              <li>Spa Disconnects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <a href="tel:8449012684" className="hover:text-white transition-colors">(844) 901-2684</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:service@hottubelectriciandesmoines.com" className="hover:text-white transition-colors">service@hottubelectriciandesmoines.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>Des Moines, Iowa<br />Polk County</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>Des Moines, IA</li>
              <li>West Des Moines, IA</li>
              <li>Ankeny, IA</li>
              <li>Urbandale, IA</li>
              <li>Clive, IA</li>
              <li>Johnston, IA</li>
              <li>Altoona, IA</li>
              <li>Polk County, IA</li>
            </ul>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://sewercleanoutinstallationplanotx.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
              Sewer Cleanout Installation Plano <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://burstpipewaterdamagerestorationjose.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
              Burst Pipe Water Damage Restoration San Jose <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://electricalpanelupgradesewardnebrask.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
              Electrical Panel Upgrade Seward <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://flooddamagerestorationiowacolonytex.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
              Flood Damage Restoration Iowa Colony <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Des Moines Hot Tub & Spa Wiring. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Hot tub electrician near me Des Moines IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
