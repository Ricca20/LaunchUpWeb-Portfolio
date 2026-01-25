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
        <section id="services" className="py-32 relative overflow-hidden bg-blue-50/20">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/60 border border-white/60 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md shadow-glass-sm">
                        <Briefcase size={16} className="text-secondary" />
                        <span className="text-sm font-bold text-gray-800">Our Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        World-Class <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        We provide complete web solutions designed to help your business succeed online. From brand-new websites to complete redesigns, we've got you covered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            perspective={2000}
                            transitionSpeed={1500}
                            scale={1.01}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] group hover:border-primary/50 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                            >
                                {/* Watermark Number */}
                                <div className="absolute -right-4 -top-8 text-[12rem] font-black text-gray-50/80 group-hover:text-blue-50/50 transition-colors duration-500 select-none z-0 pointer-events-none font-outline-2">
                                    0{index + 1}
                                </div>

                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8 inline-flex items-center justify-center p-5 rounded-2xl bg-blue-50 border border-blue-100 text-primary group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-sm w-fit group-hover:scale-110 group-hover:rotate-3">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>

                                    <p className="text-gray-600 mb-8 leading-relaxed font-medium flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-primary/20 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Perfect For</span>
                                                <span className="text-sm font-semibold text-gray-700">{service.perfectFor}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

                <div className="text-center">
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="group relative inline-flex items-center bg-blue-600 border border-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-lg shadow-blue-500/30"
                    >
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
