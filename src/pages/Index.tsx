import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HotTubWiringInfo from "@/components/landing/HotTubWiringInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Hot tub electrician near me Des Moines IA | Des Moines Hot Tub & Spa Wiring</title>
        <meta name="description" content="Expert hot tub electrician in Des Moines, IA. Professional spa wiring, jacuzzi hookups, and electrical panel upgrades. Licensed electricians serving Des Moines and Polk County. Call (844) 901-2684." />
        <meta name="keywords" content="hot tub electrician near me Des Moines IA, hot tub wiring Des Moines, spa electrician Des Moines, jacuzzi hookup Des Moines, hot tub installation electrician IA" />
        <link rel="canonical" href="https://hot-tub-electrician-des-moines-ia.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Des Moines Hot Tub & Spa Wiring",
            "image": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80",
            "telephone": "+1-844-901-2684",
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
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Des Moines, Iowa"
            },
            "priceRange": "$$",
            "description": "Professional hot tub and spa wiring services in Des Moines, Iowa. Licensed electricians for safe jacuzzi installation and electrical hookups."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Des Moines Hot Tub & Spa Wiring",
              "telephone": "+1-844-901-2684"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Des Moines, Iowa"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hot Tub Electrical Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hot Tub Wiring Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spa Electrical Hookup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electrical Panel Upgrades"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "GFCI Spa Disconnect Installation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hot tub electrician near me Des Moines IA | Des Moines Hot Tub & Spa Wiring" />
        <meta property="og:description" content="Expert hot tub wiring and spa electrician services in Des Moines, IA. Licensed professionals for safe installation. Call (844) 901-2684." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hot-tub-electrician-des-moines-ia.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hot tub electrician near me Des Moines IA | Des Moines Hot Tub & Spa Wiring" />
        <meta name="twitter:description" content="Professional hot tub electrician in Des Moines. Safe wiring for spas and jacuzzis." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <HotTubWiringInfo />
      <FAQ />
      <Contact />
      <RandomLinks />
      <Footer />
    </div>
  );
};

export default Index;
