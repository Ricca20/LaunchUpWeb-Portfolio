"use client";
import { motion } from 'framer-motion';
import { TrendingUp, Zap, MousePointerClick, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <TrendingUp size={32} className="text-gray-900" />,
            color: "bg-blue-500",
            title: "Business Growth Focused",
            description: "Every website we build is designed with your business goals in mind. More leads, more sales, more growth."
        },
        {
            icon: <Zap size={32} className="text-gray-900" />,
            color: "bg-purple-500",
            title: "Modern & High Performance",
            description: "Lightning-fast loading speeds, cutting-edge design, mobile optimization, and top-tier security built in."
        },
        {
            icon: <MousePointerClick size={32} className="text-gray-900" />,
            color: "bg-emerald-500",
            title: "Smart & User Friendly",
            description: "Intuitive navigation and clean interfaces that make it easy for your customers to find what they need."
        },
        {
            icon: <Handshake size={32} className="text-gray-900" />,
            color: "bg-orange-500",
            title: "Reliable & Professional",
            description: "Clear communication, on-time delivery, ongoing support, and a partnership approach to your success."
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-tr-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Choose <span className="text-primary">LaunchUpWeb?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We don't just build websites. We build digital assets that help you get more leads, build more trust, and achieve real business growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface border border-gray-800 p-6 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
