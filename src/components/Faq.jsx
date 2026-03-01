import { useState, useRef } from "react";

const faqData = [
  {
    question: "What types of graphic design services do you offer?",
    answer:
      "We specialize in brochures, banners, business cards, books, branding materials, logo design, print-ready layouts, and complete DTP solutions with precision and creativity.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on complexity. Simple designs take 1–2 days, while branding or book layouts may take 5–10 working days.",
  },
  {
    question: "Do you provide printing services as well?",
    answer:
      "Yes! We offer professional DTP and high-quality printing services ensuring sharp colors, premium materials, and flawless finishing.",
  },
  {
    question: "How can I request a custom quote?",
    answer:
      "You can contact us directly via phone or through the contact form. Share your requirements and we will provide a detailed quote quickly.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-orange-500">Frequently</span>{" "}
            <span className="text-white">Asked Questions</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-justify">
            Everything you need to know about our DTP & Graphic Services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group rounded-xl sm:rounded-2xl border border-gray-700/40 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(255,115,0,0.2)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center gap-4 p-4 sm:p-6 text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-400 transition duration-300">
                  {faq.question}
                </span>

                <span
                  className={`text-orange-500 text-xl sm:text-2xl transition-transform duration-500 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Smooth Auto Height Animation */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-400 leading-relaxed text-sm sm:text-base text-justify">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}