"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            q: "How long does it take to build a website?",
            a: "Most websites are completed within 2-4 weeks, depending on complexity and your feedback speed. We work efficiently without compromising quality."
        },
        {
            q: "Do I need to provide content and images?",
            a: "We can work with your existing content or help create new content. Professional images can be sourced or you can provide your own."
        },
        {
            q: "Will my website work on mobile phones?",
            a: "Absolutely! Every website we build is fully responsive and optimized for all devices — phones, tablets, and desktops."
        },
        {
            q: "Can I update the website myself later?",
            a: "Yes! We build websites with user-friendly content management systems so you can make updates easily. We also provide training and ongoing support."
        },
        {
            q: "Do you provide hosting and domain services?",
            a: "Yes, we can handle domain registration, hosting setup, and all technical aspects. Or we can work with your existing hosting provider."
        },
        {
            q: "What happens after the website launches?",
            a: "We provide ongoing support, maintenance options, and are available to help you grow and scale your website as your business expands."
        }
    ];

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Support</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-blue-50 rounded-2xl overflow-hidden bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                            >
                                <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>{item.q}</span>
                                <div className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-100 rotate-180' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                                    {activeIndex === index ? (
                                        <Minus size={20} className="text-blue-600" />
                                    ) : (
                                        <Plus size={20} className="text-blue-600" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium border-t border-blue-50 pt-4">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
