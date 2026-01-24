"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Smartphone, TrendingUp, Search } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
            {/* 3D Modern Background Elements - Enhanced Blue */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-[130px] opacity-80"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] left-[-15%] w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-accent/30 to-primary/30 blur-[140px] opacity-70"
                />
                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Floating Badge - Blue Tint */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="inline-flex items-center bg-white/80 border border-primary/30 rounded-full px-5 py-2 mb-10 backdrop-blur-xl shadow-glass hover:scale-105 transition-transform duration-300 cursor-default ring-1 ring-primary/10"
                    >
                        <span className="flex h-3 w-3 relative mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-sm font-bold text-gray-800 tracking-wide">Accepting Projects for 2025</span>
                    </motion.div>

                    {/* Main Headline with 3D feel */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight tracking-tighter perspective-1000"
                    >
                        We Build Websites That <br className="hidden md:block" />
                        <span className="text-primary drop-shadow-lg py-2 inline-block transform hover:scale-[1.02] transition-transform duration-500 origin-center cursor-default">
                            Drive Real Growth
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-700 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Empowering ambitious brands with <span className="text-primary font-bold">stunning, fast, and intelligent</span> digital experiences that turn visitors into loyal customers.
                    </motion.p>

                    {/* CTAs with Gloss Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-6 mb-28"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,122,255,0.4)", backgroundColor: "#1D4ED8" }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="group relative bg-blue-600 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl shadow-blue-500/30 flex items-center justify-center text-lg overflow-hidden ring-4 ring-blue-500/20 hover:ring-blue-500/40"
                        >
                            <span className="relative z-10 flex items-center">
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE" }}
                            whileTap={{ scale: 0.98 }}
                            href="#portfolio"
                            className="bg-blue-50 border-2 border-blue-200 text-primary font-bold py-5 px-12 rounded-full transition-all duration-300 backdrop-blur-xl shadow-glass hover:shadow-glass-lg text-lg hover:border-primary/50"
                        >
                            View Portfolio
                        </motion.a>
                    </motion.div>

                    {/* Trust Badges - Enhanced Blue */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 relative"
                    >
                        {[
                            { icon: Zap, title: "Blazing Fast", desc: "100/100 Speed Score", color: "text-blue-600", bg: "bg-blue-200" },
                            { icon: Search, title: "SEO Ready", desc: "Rank #1 on Google", color: "text-blue-600", bg: "bg-blue-200" },
                            { icon: Smartphone, title: "Responsive", desc: "Looks great everywhere", color: "text-blue-600", bg: "bg-blue-200" },
                            { icon: TrendingUp, title: "High Converting", desc: "More leads & sales", color: "text-blue-600", bg: "bg-blue-200" }
                        ].map((item, index) => (
                            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} className="h-full">
                                <motion.div
                                    className="flex flex-col items-center p-6 rounded-3xl bg-blue-50/80 backdrop-blur-md border border-blue-100 shadow-glass-sm hover:shadow-glass-lg transition-all duration-500 h-full group hover:bg-blue-100 hover:border-primary/30"
                                >
                                    <div className={`p-4 rounded-2xl mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
