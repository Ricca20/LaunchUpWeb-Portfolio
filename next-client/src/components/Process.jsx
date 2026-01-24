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
    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">How It Works</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Our Simple <span className="text-blue-600">4-Step Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
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
                            className="relative group"
                        >
                            {/* Connector Line (Hidden on Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-gray-100 -z-10 group-hover:bg-blue-100 transition-colors duration-500" />
                            )}

                            <div className="bg-white border-2 border-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-lg group-hover:border-blue-200 group-hover:scale-110 transition-all duration-300 z-10 relative">
                                <div className="text-blue-500 group-hover:text-blue-600 transition-colors">{step.icon}</div>
                            </div>

                            <div className="text-center px-4 relative">
                                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-black text-gray-50 -z-10 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {index + 1}
                                </span>

                                <div className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-widest">
                                    Step 0{index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
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
