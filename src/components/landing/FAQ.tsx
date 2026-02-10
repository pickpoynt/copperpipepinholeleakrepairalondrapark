import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why does my Sausalito attic have mold while others don't?",
    answer: "Sausalito's hillside microclimates are highly variable. Homes in fog-prone zones or those with older redwood structures and inadequate ridge ventilation are much more susceptible to condensation-driven mold growth."
  },
  {
    question: "Is the attic mold remediation process non-toxic?",
    answer: "Yes. Sausalito Attic Mold Pros specializes in 'Eco-Remediation' which uses dry ice blasting (CO2) to remove mold roots and zero-VOC EPA-registered antimicrobials, making it safe for families and Marin's sensitive ecosystems."
  },
  {
    question: "How long does a typical Sausalito attic remediation take?",
    answer: "Most Sausalito attic projects are completed within 2 to 4 days. This includes containment setup, HEPA air scrubbing, remediation, and the installation of high-efficiency ventilation retrofits."
  },
  {
    question: "Will my Marin County homeowners insurance cover attic mold?",
    answer: "Coverage depends on the cause of the moisture. If the mold resulted from a sudden roof leak or pipe burst, it's often covered. We provide comprehensive documentation and moisture mapping to assist with your Marin County insurance claims."
  },
  {
    question: "Do you offer air quality testing after the mold is removed?",
    answer: "Absolutely. We conduct post-remediation clearance testing in every Sausalito home. We use third-party laboratories to verify that spore counts in your attic and living areas meet or exceed California safety standards."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Sausalito Attic Mold FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Professional remediation expertise for Marin County homeowners and hillside property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-indigo-600 py-6 transition-colors leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;




