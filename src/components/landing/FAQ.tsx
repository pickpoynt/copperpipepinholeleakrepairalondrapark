const faqs = [
  {
    question: "Why do old homes in Pitman always smell musty?",
    answer: "Many historic homes in Pitman have porous foundations and crawlspaces that allow 'vapor intrusion.' This moisture feeds microbial growth, which releases mVOCs (microbial Volatile Organic Compounds)—the scientific name for that 'old house smell.' We identify and seal these vapor points to stop the smell permanently."
  },
  {
    question: "Can't I just use a dehumidifier to stop the smell?",
    answer: "A dehumidifier helps by slowing down new growth, but it won't remove the odors already absorbed into your wood framing, drywall, and insulation. Our molecular neutralization process breaks down the existing odor molecules while we address the underlying moisture issue."
  },
  {
    question: "Is the hydroxyl technology safe for my family and pets?",
    answer: "Yes. Unlike ozone, which can be harmful if inhaled, hydroxyls are naturally occurring in our atmosphere (created by the sun). Our industrial hydroxyl generators are safe to use while people and pets are in the home, leaving behind nothing but pure, fresh air."
  },
  {
    question: "Will you have to tear out my walls to find the smell?",
    answer: "Usually not. We use advanced thermal imaging and moisture mapping to 'see' behind your walls. This allows us to pinpoint the exact leak or moisture point without unnecessary demolition. Once the source is addressed, our air purification systems handle the rest."
  },
  {
    question: "How long does it take for a full odor reset?",
    answer: "Most residential odor removal projects in Pitman are completed in 24 to 48 hours. This includes the diagnostic phase, molecular neutralization, and high-volume air scrubbing to ensure the indoor air is completely refreshed."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Odor Removal FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Scientific answers to your questions about air quality and musty odors in Pitman, New Jersey.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors flex items-start gap-3">
                  <span className="text-indigo-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-indigo-100">
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
