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
        <section id="faq" className="py-20 bg-dark border-t border-gray-800">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                </motion.div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-800 rounded-xl overflow-hidden bg-surface"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-white">{item.q}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 border-t border-gray-800/50 pt-4">
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
