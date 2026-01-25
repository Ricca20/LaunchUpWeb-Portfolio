"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background - PopHop Style (Soft Mesh + Grid) */}
            <div className="absolute inset-0 pointer-events-none bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge - Pill Shape */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-lg shadow-gray-200/50 mb-10 border border-gray-100"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-gray-600">Trusted by businesses in Sri Lanka & UK</span>
                    </motion.div>

                    {/* Headline - Mixed Typography */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-8xl text-gray-900 mb-8 leading-[1.1] tracking-tight"
                    >
                        <span className="font-serif font-medium italic mr-4">Building</span>
                        <span className="font-bold inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Empires</span>
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        We simplify the complex. From stunning designs to SEO that dominates, everything your business needs to scale — in one place.
                    </motion.p>

                    {/* CTAs - Integrated Input style or Just Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-20"
                    >
                        <div className="relative group">
                            <a href="#contact" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-200">
                                Start your project
                                <ArrowRight size={18} />
                            </a>
                        </div>
                        <a href="#portfolio" className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all hover:border-gray-300">
                            View our work
                        </a>
                    </motion.div>

                    {/* Bottom Pills - Trust Elements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {['Custom Design', 'SEO Optimized', 'Fast Support', 'Mobile Ready', 'Secure'].map((item, i) => (
                            <div key={i} className="px-5 py-2 bg-blue-50/50 border border-blue-100 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm">
                                {item}
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
