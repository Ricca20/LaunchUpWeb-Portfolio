"use client";
import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, Layout, RefreshCw, MousePointerClick, BarChart3, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Services = () => {
    const services = [
        {
            icon: <Briefcase size={32} />,
            title: "Business & Corporate Websites",
            description: "Professional, credible websites for companies, service providers, and established brands. Build authority and win more clients.",
            perfectFor: "Professional services, B2B companies, consultants",
            gradient: "from-blue-500/20 to-cyan-400/20"
        },
        {
            icon: <ShoppingCart size={32} />,
            title: "E-Commerce Websites",
            description: "Sell products online with secure, user-friendly e-commerce platforms. Shopping carts, payment gateways, inventory management.",
            perfectFor: "Retail brands, online stores, product businesses",
            gradient: "from-orange-500/20 to-red-400/20"
        },
        {
            icon: <Layout size={32} />,
            title: "Portfolio & Personal Websites",
            description: "Showcase your work, build your personal brand, and attract better opportunities with a stunning portfolio site.",
            perfectFor: "Freelancers, creatives, professionals, agencies",
            gradient: "from-purple-500/20 to-pink-400/20"
        },
        {
            icon: <RefreshCw size={32} />,
            title: "Website Redesign & Upgrades",
            description: "Transform outdated websites into modern, high-performing platforms that reflect your current business level.",
            perfectFor: "Established businesses ready to upgrade",
            gradient: "from-green-500/20 to-emerald-400/20"
        },
        {
            icon: <MousePointerClick size={32} />,
            title: "Landing Pages & Sales Funnels",
            description: "High-converting landing pages designed to capture leads and drive specific marketing campaigns.",
            perfectFor: "Marketing campaigns, product launches",
            gradient: "from-yellow-500/20 to-orange-400/20"
        },
        {
            icon: <BarChart3 size={32} />,
            title: "SEO & Performance Optimization",
            description: "Rank higher on Google, load faster, and deliver better user experiences with technical optimization.",
            perfectFor: "Existing websites needing a performance boost",
            gradient: "from-indigo-500/20 to-blue-400/20"
        }
    ];

    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-black/5 border border-black/5 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <Briefcase size={16} className="text-secondary" />
                        <span className="text-sm font-medium text-gray-700">Our Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        We provide complete web solutions designed to help your business succeed online. From brand-new websites to complete redesigns, we've got you covered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            transitionSpeed={1500}
                            scale={1.02}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full bg-black/5 backdrop-blur-xl border border-black/5 p-8 rounded-3xl group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                                    <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-black/5 border border-black/5 text-gray-900 group-hover:scale-110 group-hover:bg-black/5 transition-all duration-300 shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                                        {service.description}
                                    </p>
                                    <div className="text-sm text-gray-500 border-t border-black/5 pt-4 group-hover:border-black/5 transition-colors">
                                        <span className="font-semibold text-primary">Perfect for:</span> <span className="text-gray-700">{service.perfectFor}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

                <div className="text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="group relative inline-flex items-center bg-transparent border border-black/10 hover:border-primary/50 text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center">
                            Request a Custom Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Services;
