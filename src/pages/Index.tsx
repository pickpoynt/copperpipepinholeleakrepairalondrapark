import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PolyBInfo from "@/components/landing/PolyBInfo";
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
        <title>Polybutylene pipe replacement Raleigh | Raleigh Polybutylene Experts: Full Repipe Specialists</title>
        <meta name="description" content="Expert Polybutylene pipe replacement Raleigh. Professional whole-house repiping, PEX upgrades, and Poly-B leak prevention. Licensed Raleigh plumbers serving Wake County. Call (877) 792-1410 today!" />
        <meta name="keywords" content="Polybutylene pipe replacement Raleigh, Poly-B replacement Raleigh NC, house repipe Raleigh, PEX pipe upgrade Raleigh, grey pipe replacement Wake County" />
        <link rel="canonical" href="https://polybutylene-pipe-replacement-raleigh.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Raleigh Polybutylene Experts",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Raleigh",
              "addressRegion": "NC",
              "postalCode": "27601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.7796",
              "longitude": "-78.6382"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Raleigh, North Carolina"
            },
            "priceRange": "$$$",
            "description": "Professional polybutylene pipe replacement and whole-house repiping services in Raleigh, NC. We specialize in replacing failing grey pipes with high-quality PEX."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Polybutylene Pipe Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Raleigh Polybutylene Experts",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Raleigh, North Carolina"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Repipe Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Whole House Poly-B Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "PEX Piping Upgrade"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Polybutylene Leak Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plumbing System Documentation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Polybutylene pipe replacement Raleigh | Raleigh Polybutylene Experts" />
        <meta property="og:description" content="Expert Poly-B replacement in Raleigh, NC. Professional whole-house repiping using modern PEX. Call (877) 792-1410 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://polybutylene-pipe-replacement-raleigh.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Polybutylene pipe replacement Raleigh
              <span className="block text-blue-400 mt-2">Wake County's Repipe Authority: PEX Upgrades</span>
            </>
          }
          subtitle="Is your Raleigh home hiding a ticking time bomb? Polybutylene pipes (the notorious grey pipes) are prone to sudden failure. We specialize in non-invasive, whole-house repiping with premium PEX-A, restoring your home's safety and value with minimal disruption."
          image="https://images.unsplash.com/photo-1542013919164-94427b3fa437?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <PolyBInfo />
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
