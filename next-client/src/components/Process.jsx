"use client";
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, CheckSquare, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <MessageSquare size={28} />,
            title: "Discovery & Strategy",
            description: "We start by understanding your business, your goals, and your target customers. What do you want to achieve?"
        },
        {
            icon: <PenTool size={28} />,
            title: "Design & Development",
            description: "Our team creates a custom design tailored to your brand, then builds a fast, secure, and responsive website."
        },
        {
            icon: <CheckSquare size={28} />,
            title: "Review & Refinement",
            description: "You review the website, provide feedback, and we refine until it's perfect. Your satisfaction is our priority."
        },
        {
            icon: <Rocket size={28} />,
            title: "Launch & Support",
            description: "We launch your website, ensure everything runs smoothly, and provide ongoing support as your business grows."
        }
    ];

    return (
        <section id="process" className="py-20 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 w-full h-96 bg-primary/5 -skew-y-6 transform origin-left" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Simple 4-Step Process</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From first conversation to final launch, we make the website development process smooth, transparent, and stress-free.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Connector Line (Hidden on Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-800 -z-10" />
                            )}

                            <div className="bg-surface border border-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/50 z-10 relative">
                                <div className="text-primary">{step.icon}</div>
                            </div>

                            <div className="text-center px-4">
                                <div className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs font-bold text-gray-600 mb-3">
                                    STEP {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
