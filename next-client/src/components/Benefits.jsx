"use client";
import { motion } from 'framer-motion';
import { Smartphone, Zap, ShieldCheck, Palette, TrendingUp, Edit3 } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        { icon: <Smartphone />, title: "Mobile-First Design", desc: "Perfect display on every device — phone, tablet, desktop" },
        { icon: <Zap />, title: "Lightning Fast Loading", desc: "Optimized for speed and performance" },
        { icon: <ShieldCheck />, title: "Secure & Protected", desc: "SSL certificates and security best practices" },
        { icon: <Palette />, title: "Custom Design", desc: "Unique to your brand, never templated" },
        { icon: <TrendingUp />, title: "SEO Ready", desc: "Built to rank on Google from day one" },
        { icon: <Edit3 />, title: "Easy to Update", desc: "Simple content management for future changes" },
    ];

    return (
        <section className="py-20 bg-white border-y border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What You Get With Every Website</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start p-6 rounded-xl hover:bg-surface transition-colors"
                        >
                            <div className="bg-primary/20 p-3 rounded-lg text-primary mr-4">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
