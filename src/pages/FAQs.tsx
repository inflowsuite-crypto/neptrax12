import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQsProps {
  onNavigate: (section: string) => void;
}

export default function FAQs({ onNavigate }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does your agency offer?',
      answer: 'We specialize in website design, updates, and ongoing maintenance. We also help brands grow their online presence and boost engagement through strategy, design, and performance optimization.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer: 'Absolutely! We love transforming outdated websites into modern, high-performing digital experiences that align with your brand\'s goals.',
    },
    {
      question: 'Do you provide ongoing website maintenance?',
      answer: 'Yes, we offer full maintenance plans from content updates and bug fixes to security checks ensuring your site stays fast, secure, and up-to-date.',
    },
    {
      question: 'How do you help increase online sales and engagement?',
      answer: 'We combine user-centered design with marketing insights to improve conversions, enhance user experience, and grow audience engagement across platforms.',
    },
    {
      question: 'Can you work with my existing brand identity?',
      answer: 'Definitely. We can update your site while preserving your existing brand style or help you evolve it with a fresh, consistent digital look.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Timelines vary by project scope, but most website designs or updates are completed within 2–6 weeks. We\'ll share a clear schedule before starting.',
    },
    {
      question: 'Do you offer custom solutions or templates?',
      answer: 'Every project is custom-built. We tailor designs and features to your goals, ensuring your website looks unique and performs effectively.',
    },
    {
      question: 'What platforms or technologies do you use?',
      answer: 'We work with modern web technologies such as React, Next.js, WordPress, and Shopify depending on your business needs and goals.',
    },
    {
      question: 'Do you provide content or branding support?',
      answer: 'Yes, we can assist with content strategy, copywriting, and brand assets to ensure your website communicates your message clearly and professionally.',
    },
    {
      question: 'How can I get started?',
      answer: 'Simply reach out through our Contact page we\'ll schedule a quick chat to understand your goals and craft a tailored plan for your brand.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold text-[#f1f5f9] mb-4"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-[#94a3b8] text-lg">
            Everything you need to know about our services and approach
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#1e3a8a]/20 transition-colors"
              >
                <span className="text-lg font-bold text-[#f1f5f9] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-[#2563eb] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-[#94a3b8] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] rounded-2xl p-8 text-center">
          <h3
            className="text-2xl font-bold text-[#f1f5f9] mb-3"
          >
            Still Have Questions?
          </h3>
          <p className="text-[#94a3b8] mb-6">
            We're here to help. Reach out and we'll get back to you promptly.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
