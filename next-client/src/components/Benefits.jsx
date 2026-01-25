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
        <section className="py-24 bg-white relative overflow-hidden" id="benefits">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        What You Get With <span className="text-blue-600">Every Website</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        We don't settle for "good enough." Every project includes these premium features as standard.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white border border-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
