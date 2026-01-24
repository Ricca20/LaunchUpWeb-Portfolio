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
        <section id="pricing" className="py-20 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the package that fits your business needs. Every package includes professional design, mobile optimization, and ongoing support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative bg-blue-50/50 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/20 transform md:-translate-y-4' : 'border-blue-100'} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="text-4xl mb-4">{plan.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-700">{plan.subtitle}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <a href="#contact" className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30' : 'bg-white border border-blue-200 text-primary hover:bg-blue-50'}`}>
                                    {plan.cta}
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
