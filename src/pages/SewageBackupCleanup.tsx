import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Biohazard } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SewageBackupCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Sewage Backup Cleanup Cohasset MA | Biohazard Removal</title>
                <meta name="description" content="Safe sewage backup cleanup in Cohasset, MA. We sanitize and deodorize basements affected by sewer backups." />
                <link rel="canonical" href="https://sump-pump-failure-cohasset-ma.com/sewage-backup-cleanup-cohasset-ma" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Sewage Backup Cleanup <br />
                        <span className="text-blue-300">Cohasset, MA</span>
                    </>
                }
                subtitle="Professional biohazard cleaning for sewer line backups. Safety and sanitization are our priority."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Hazmat Cleanup Services
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Sewage backups are dangerous. We remove the contaminants, clean the area with industrial disinfectants, and dry the structure.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default SewageBackupCleanup;
