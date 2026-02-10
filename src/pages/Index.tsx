import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AtticMoldInfo from "@/components/landing/AtticMoldInfo";
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
        <title>Attic mold remediation Sausalito | Sausalito Attic Mold Pros</title>
        <meta name="description" content="Attic mold remediation Sausalito. Professional mold removal, attic ventilation, and fog-moisture control in Marin County. Call (380) 266-0944!" />
        <meta name="keywords" content="Attic mold remediation Sausalito, mold removal Sausalito CA, Sausalito attic ventilation, Marin County mold inspector" />
        <link rel="canonical" href="https://sausalito-attic-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sausalito Attic Mold Pros",
            "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sausalito",
              "addressRegion": "CA",
              "postalCode": "94965",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8591",
              "longitude": "-122.4853"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Sausalito, California"
            },
            "priceRange": "$$$",
            "description": "Expert attic mold remediation and moisture control in Sausalito, CA. Specialized in hillside ventilation, HEPA filtration, and non-toxic removal."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Attic Mold Remediation Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sausalito Attic Mold Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Sausalito, California"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Attic Recovery Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Air Scrubbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dry Ice Blasting Remediation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Attic Ventilation Retrofitting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Moisture Mapping"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Attic mold remediation Sausalito | Attic Mold Pros" />
        <meta property="og:description" content="Professional attic mold remediation in Sausalito, CA. 24/7 HEPA air scrubbing and ventilation repair. Call (380) 266-0944 for a diagnostic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sausalito-attic-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Attic mold remediation Sausalito
              <span className="block text-indigo-400 mt-2">Sausalito Attic Mold Pros: Hillside Moisture Specialists</span>
            </>
          }
          subtitle="Stop foggy-night condensation from rotting your home. Our specialized attic remediation and Marin-grade ventilation systems target spores trapped in your roof—preventing health risks with Sausalito precision."
          image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <AtticMoldInfo />
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




