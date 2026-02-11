import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MustyOdorRemovalInfo from "@/components/landing/MustyOdorRemovalInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Musty odor removal Pitman nj</title>
        <meta name="description" content="Musty odor removal Pitman nj. Professional molecular air purification, hydroxyl generation, and permanent source removal for musty smells in Pitman, NJ. Call (380) 266-0944!" />
        <meta name="keywords" content="Musty odor removal Pitman nj, old house smell Pitman NJ, basement odor removal Pitman, crawlspace deodorization Pitman" />
        <link rel="canonical" href="https://pitman-odor-removal.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pitman Odor Neutralization Pros",
            "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pitman",
              "addressRegion": "NJ",
              "postalCode": "08071",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.7332",
              "longitude": "-75.1316"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Pitman, New Jersey"
            },
            "description": "Professional musty odor removal and air quality restoration services in Pitman, NJ. Specialized in molecular decontamination and hydrothermal source identification."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Musty Odor Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pitman Odor Neutralization Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Pitman, New Jersey"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Odor Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Molecular Air Decontamination"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hydroxyl Odor Neutralization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vapor Intrusion Control"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basement & Crawlspace Deodorization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Musty odor removal Pitman nj" />
        <meta property="og:description" content="Scientific musty odor removal in Pitman, NJ. Permanent molecular air purification for your home. Call (380) 266-0944 today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pitman-odor-removal.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title="Musty odor removal Pitman nj"
          subtitle="Is a persistent musty smell making your Pitman home unbearable? We use advanced hydroxyl technology and HEPA air scrubbing to eliminate odors at the molecular level, not just mask them. Pitman Odor Neutralization Pros: Pure Air, Guaranteed."
          image="https://images.unsplash.com/photo-1490312278390-ab6414f8d29b?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <MustyOdorRemovalInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
