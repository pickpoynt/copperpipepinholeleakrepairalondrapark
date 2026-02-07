import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my Raleigh home has Polybutylene pipes?",
    answer: "Step 1: Look at the pipes coming into your water heater or main shut-off. If they are grey, black, or blue plastic (not copper or PEX), they are likely Poly-B. Step 2: Check your home's build date—if it's between 1978 and 1995 in Raleigh, Poly-B was incredibly common."
  },
  {
    question: "Why are Polybutylene pipes considered a disaster in Raleigh?",
    answer: "Polybutylene reacts with the oxidants found in Raleigh's municipal water supply, causing it to flake and become brittle internally. This 'unseen' degradation leads to sudden, massive pipe bursts that can flood entire floors in minutes."
  },
  {
    question: "Will my Raleigh insurance company cover Poly-B leaks?",
    answer: "Many North Carolina insurance carriers now include 'Polybutylene exclusions' in their policies. Some will refuse to renew policies unless a full repipe is completed and certified by a licensed Raleigh plumber. We provide the necessary documentation for your insurer."
  },
  {
    question: "How long does a whole-house repipe take in Raleigh?",
    answer: "Our specialized Raleigh repipe team can typically complete a whole-house project in 3 to 4 days. This includes the plumbing replacement, system testing, and master-level drywall patching and texturing."
  },
  {
    question: "Is PEX-A the best choice for Raleigh repipes?",
    answer: "Yes. PEX-A is the gold standard for repiping in Raleigh. It is flexible, which means fewer joints (where most leaks occur), and it can expand up to 3x its size, making it highly resistant to damage during rare Raleigh hard freezes."
  },
  {
    question: "Do I have to leave my home during the Raleigh repipe process?",
    answer: "No. Our Raleigh team works in zones. You will have full water access every evening, and we ensure your home is kept clean and livable with extensive floor and furniture shielding."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Raleigh Poly-B FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Critical expertise for Raleigh homeowners dealing with Polybutylene plumbing.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
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
