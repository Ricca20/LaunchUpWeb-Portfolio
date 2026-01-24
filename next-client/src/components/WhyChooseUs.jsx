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
        <section className="py-24 bg-white relative overflow-hidden">
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
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Our Advantages</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Why Choose <span className="text-blue-600">LaunchUpWeb?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        We don't just build websites. We build digital assets that help you get more leads, build more trust, and achieve real business growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
                        >
                            <div className={`${feature.color.replace('bg-', 'bg-').replace('-500', '-50')} w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default WhyChooseUs;
