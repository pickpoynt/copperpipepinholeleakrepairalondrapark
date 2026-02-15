import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WestlakeVillagePipeInfo from "@/components/landing/WestlakeVillagePipeInfo";
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
        <title>Cast iron pipe replacement Westlake Village Westlake Village</title>
        <meta name="description" content="Cast iron pipe replacement Westlake Village Westlake Village. Expert cast iron sewer line rehabilitation and replacement in Westlake Village, CA. Trenchless technology, pipe bursting, and master diagnostics. Call (877) 792-1410!" />
        <meta name="keywords" content="Cast iron pipe replacement Westlake Village, Westlake Village cast iron plumbing, trenchless sewer repair Westlake Village, sewer line replacement Westlake Village" />
        <link rel="canonical" href="https://westlake-pipe-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Westlake Village Pipe Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Westlake Village",
              "addressRegion": "CA",
              "postalCode": "91361",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.1458",
              "longitude": "-118.8056"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Westlake Village, CA"
            },
            "priceRange": "$$$",
            "description": "Specialized cast iron pipe replacement and sewer line rehabilitation in Westlake Village, CA. We utilize trenchless technology to protect your property while restoring infrastructure."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cast Iron Pipe Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Westlake Village Pipe Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Westlake Village, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pipe Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trenchless Pipe Bursting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CIPP Sewer Lining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cast Iron Descaling & Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HD Camera Sewer Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Cast iron pipe replacement Westlake Village - Advanced Infrastructure Repair" />
        <meta property="og:description" content="Expert cast iron sewer line replacement in Westlake Village. Trenchless technology and master plumbing diagnostics for high-end properties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westlake-pipe-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Cast iron pipe replacement Westlake Village
              <span className="block text-orange-400 mt-2 text-2xl md:text-3xl italic">Westlake Village Pipe Pros</span>
            </>
          }
          subtitle="Westlake Village's trusted authority for cast iron sewer rehabilitation. We provide advanced trenchless replacement, pipe bursting, and precision diagnostics. Professional Infrastructure Quality."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1518005020455-1678229b9f34?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <WestlakeVillagePipeInfo />
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
