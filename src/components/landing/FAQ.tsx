import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a permit to install a hot tub in Des Moines?",
    answer: "Yes, the City of Des Moines and most surrounding communities in Polk County require an electrical permit for hot tub installations. This ensures that the wiring meets safety codes and prevents fire or shock hazards. We handle the entire permitting and inspection process for you."
  },
  {
    question: "How much does it cost to wire a hot tub in Des Moines?",
    answer: "The cost typically ranges from $800 to $1,500 for a standard installation close to your electrical panel. If trenching is required or if your panel needs an upgrade, costs can be higher. We provide free, transparent estimates before starting any work."
  },
  {
    question: "Can I run a hot tub on a standard outlet?",
    answer: "Most full-sized hot tubs require a dedicated 240V/50A or 60A hardwired connection. While some small 'plug-and-play' spas use a standard 120V outlet, most durable models need specialized wiring. Never use an extension cord for a hot tub."
  },
  {
    question: "Do I need to upgrade my electrical panel?",
    answer: "It depends on your current service capacity and the requirements of your spa. Many older homes in Des Moines with 100-amp service may need an upgrade to handle the additional load safely. We will assess your panel during our initial consultation."
  },
  {
    question: "What is a spa disconnect and why do I need one?",
    answer: "A spa disconnect (or emergency shut-off) is a safety switch located at least 5 feet from the water but within sight of the hot tub. It allows you to quickly cut power in an emergency. It is a mandatory requirement of the National Electrical Code."
  },
  {
    question: "How long does the installation take?",
    answer: "Most hot tub wiring jobs in the Des Moines area can be completed in one day, usually between 4-8 hours. This includes running conduit, pulling wire, making connections, and labeling the panel."
  },
  {
    question: "Why should I hire a licensed electrician instead of a handyman?",
    answer: "Water and electricity are a dangerous mix. Incorrect grounding or bonding can lead to severe shock or electrocution. Our licensed Des Moines electricians ensure all bonding (equipotential bonding) is done correctly to NEC standards, guaranteeing your family's safety."
  },
  {
    question: "Do you service all brands of hot tubs?",
    answer: "Yes, we can provide the electrical hookup for all major brands including Jacuzzi, Sundance, Hot Spring, Bullfrog, Cal Spas, and Master Spas. We work with specialized swim spas as well."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Hot Tub Wiring FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about hot tub & spa installation in Des Moines, IA.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
