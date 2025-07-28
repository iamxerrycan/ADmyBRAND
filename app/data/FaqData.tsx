export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied, contact us within 30 days.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes, you can switch plans at any time from your dashboard. Changes take effect immediately.",
  },
  {
    question: "Do you offer team accounts?",
    answer: "Absolutely! Our Enterprise plan includes team access with role-based permissions and dedicated support.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use enterprise-grade encryption and regular security audits to protect your data.",
  },
];
