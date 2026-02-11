const faqs = [
  {
    question: "Why does mold grow so fast in Ambler garages?",
    answer: "Ambler's high humidity, combined with concrete floors that stay cool, creates the perfect condensation point. When you store organic materials like cardboard boxes, wood tools, or drywall, mold finds an abundant food source in an unconditioned environment."
  },
  {
    question: "Is garage mold dangerous if it's not inside my house?",
    answer: "Yes. Spores from your garage are easily tracked into your home on shoes or clothing. Additionally, if the garage is attached, air often leaks into the home's living areas via common walls or HVAC equipment, compromising your indoor air quality."
  },
  {
    question: "Can you save my stored items (tools, bins, boxes)?",
    answer: "In many cases, yes. We use specialized HEPA vacuuming and antimicrobial wiping for non-porous items like tools and plastic bins. For porous items like cardboard boxes, we often recommend transferring contents to new, sanitized containers."
  },
  {
    question: "How long does a garage mold remediation take?",
    answer: "Most garage projects in Ambler are completed in 1 to 2 days, depending on the severity and volume of stored items. Our process includes containment, cleaning, and a 24-hour air scrubbing period."
  },
  {
    question: "How can I prevent mold from returning to my garage?",
    answer: "We recommend improving ventilation with soffit or ridge vents, installing a vapor barrier over concrete floors, and maintaining humidity levels below 50% using a professional industrial dehumidifier."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Garage Remediation FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Expert answers to common questions about garage mold and air quality in Montgomery County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors flex items-start gap-3">
                  <span className="text-orange-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-orange-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
