import { motion } from 'framer-motion';
import { ArrowRight, Zap, Smartphone, TrendingUp, Search } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-32">
            {/* Modern Glow Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-1000" />
                <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-accent/15 blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center bg-glass-white/90 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 cursor-default"
                    >
                        <span className="flex h-2.5 w-2.5 relative mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-gray-200 tracking-wide">Accepting New Projects for 2025</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
                    >
                        We Build Websites That <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x pb-2">
                            Drive Real Growth
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Empowering startups and ambitious brands with <span className="text-white font-medium">stunning, fast, and high-performing</span> websites that turn visitors into loyal customers.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-5 mb-24"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="group bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center text-lg"
                        >
                            Get a Free Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#portfolio"
                            className="bg-white/5 border border-white/20 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-md hover:border-white/40 text-lg"
                        >
                            View Portfolio
                        </motion.a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {[
                            { icon: Zap, title: "Blazing Fast", desc: "100/100 Speed Score", color: "text-accent" },
                            { icon: Search, title: "SEO Ready", desc: "Rank #1 on Google", color: "text-secondary" },
                            { icon: Smartphone, title: "Responsive", desc: "looks great everywhere", color: "text-primary" },
                            { icon: TrendingUp, title: "High Converting", desc: "More leads & sales", color: "text-green-400" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center group cursor-default"
                            >
                                <div className={`bg-white/5 p-4 rounded-2xl mb-4 ${item.color} border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/20`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
