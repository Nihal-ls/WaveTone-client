"use client";
import { motion } from "framer-motion";
import { LuHelpCircle, LuPlus, LuMinus, LuMessageCircle } from "react-icons/lu";
import { useState } from "react";

const faqs = [
    {
        question: "How long does shipping take for heavy instruments?",
        answer: "Most instruments (Guitars, Keyboards) ship within 2-4 business days. Larger items like Drum Kits are handled by our specialized white-glove courier to ensure they arrive in perfect tune and condition.",
    },
    {
        question: "Do you offer international warranty on gear?",
        answer: "Yes! All WaveTone products come with a 2-year international manufacturer warranty. We also offer a 30-day 'No Questions Asked' return policy if the sound isn't right for you.",
    },
    {
        question: "Can I test the equipment before buying?",
        answer: "Absolutely. You can visit any WaveTone Experience Center to jam on our gear. If you're buying online, check out our high-fidelity audio samples recorded for every product.",
    },
    {
        question: "Are your payments secure and encrypted?",
        answer: "We use industry-standard SSL encryption and partner with Stripe and PayPal to ensure your financial data is 100% protected. We never store your card details.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-base-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-primary"></span>
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Support</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                Got <br /> <span className="text-primary italic">Questions?</span>
                            </h2>
                            <p className="text-base-content/50 max-w-sm text-lg leading-relaxed">
                                Everything you need to know about the WaveTone experience. Can't find it? Our crew is standing by.
                            </p>
                        </div>

                        <div className="p-8 rounded-[3rem] bg-base-200 border border-base-300 flex flex-col items-start gap-6 group hover:border-primary/50 transition-all duration-500">
                            <div className="w-14 h-14 bg-primary text-primary-content rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                                <LuMessageCircle size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase tracking-tight">Need 1-on-1 Help?</h4>
                                <p className="text-sm opacity-60">Speak with a pro musician today.</p>
                            </div>
                            <button className="btn btn-primary btn-sm rounded-full px-8">Contact Crew</button>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`collapse collapse-plus border border-base-300 transition-all duration-300 rounded-[2rem] ${openIndex === index ? "bg-base-200 border-primary/30" : "bg-transparent"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={openIndex === index}
                                    onChange={() => toggleFAQ(index)}
                                />
                                <div className="collapse-title text-xl font-bold px-8 py-6 flex items-center gap-4">
                                    <span className={`text-primary font-mono text-sm ${openIndex === index ? 'opacity-100' : 'opacity-30'}`}>
                                        0{index + 1}
                                    </span>
                                    <span className="uppercase tracking-tight">{faq.question}</span>
                                </div>
                                <div className="collapse-content px-8 pb-6">
                                    <p className="text-base-content/60 leading-relaxed pl-10 border-l border-primary/20">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}