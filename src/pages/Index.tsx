import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import GarageMoldRemediationInfo from "@/components/landing/GarageMoldRemediationInfo";
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
        <title>Garage mold remediation Ambler</title>
        <meta name="description" content="Garage mold remediation Ambler. Specialized removal for garage walls, rafters, and storage areas. Professional antimicrobial treatments in Ambler, PA. Call (380) 266-0944!" />
        <meta name="keywords" content="Garage mold remediation Ambler, garage mold removal Ambler PA, detached garage cleaning Ambler, Montgomery County mold specialists" />
        <link rel="canonical" href="https://ambler-garage-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ambler Garage Mold Professionals",
            "image": "https://images.unsplash.com/photo-1599423524402-0e86b0266050?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ambler",
              "addressRegion": "PA",
              "postalCode": "19002",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.1545",
              "longitude": "-75.2216"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "description": "Professional garage mold remediation and restoration services in Ambler, PA. Specialized in structural wood cleaning and antimicrobial protection."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Garage Mold Remediation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ambler Garage Mold Professionals",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mold Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Garage Wall Decontamination"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rafter HEPA Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Antimicrobial Encapsulation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Cleaning & Sanitization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Garage mold remediation Ambler" />
        <meta property="og:description" content="Professional garage mold removal in Ambler, PA. 24/7 remediation for walls, rafters, and content. Call (380) 266-0944." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambler-garage-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1599423524402-0e86b0266050?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title="Garage mold remediation Ambler"
          subtitle="Don't let mold take over your garage and threaten your home's air quality. Our Ambler based crews specialize in HEPA-filtered structural cleaning and antimicrobial barriers for garages and storage spaces. Ambler Garage Mold Professionals: Restoring Your Space."
          image="https://images.unsplash.com/photo-1516515429572-10920000305a?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <GarageMoldRemediationInfo />
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
