"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter Package",
            subtitle: "Perfect for new businesses",
            icon: "🥉",
            features: [
                "Up to 5 pages",
                "Mobile responsive design",
                "Basic SEO optimization",
                "Contact form integration",
                "1 month support"
            ],
            price: "Contact us",
            cta: "Get Started",
            popular: false
        },
        {
            name: "Business Package",
            subtitle: "Perfect for growing businesses",
            icon: "🥈",
            features: [
                "Up to 10 pages",
                "Custom design",
                "Advanced SEO setup",
                "Social media integration",
                "E-commerce ready (optional)",
                "3 months support"
            ],
            price: "Contact us",
            cta: "Get Started",
            popular: true
        },
        {
            name: "Premium Package",
            subtitle: "Perfect for established companies",
            icon: "🥇",
            features: [
                "Unlimited pages",
                "Premium custom design",
                "Complete SEO optimization",
                "Advanced features & integrations",
                "E-commerce included",
                "6 months priority support"
            ],
            price: "Contact us",
            cta: "Get Started",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
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
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Pricing Plans</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pricing</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        Choose the package that fits your business needs. Every package includes professional design, mobile optimization, and ongoing support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative bg-white rounded-2xl p-8 border transition-all duration-500 flex flex-col group hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2
                                ${plan.popular
                                    ? 'border-blue-600 shadow-xl shadow-blue-500/20 md:-translate-y-4 scale-105 z-10'
                                    : 'border-blue-100 hover:border-blue-300'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl tracking-wider uppercase shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                {plan.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100 font-medium">{plan.subtitle}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700 group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="bg-blue-50 rounded-full p-0.5 mr-3 mt-0.5 group-hover/item:bg-blue-100 transition-colors">
                                            <Check size={14} className="text-blue-600" />
                                        </div>
                                        <span className="font-medium text-sm group-hover/item:text-gray-900 transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <a href="#contact" className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group/btn 
                                    ${plan.popular
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50'
                                        : 'bg-white border-2 border-blue-50 text-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                                    <span className="relative z-10">{plan.cta}</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
