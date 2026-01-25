"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-[100px]" />
                <div className="absolute -bottom-[50%] -right-[20%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-400/30 blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight"
                >
                    Ready to Build Your <br />
                    Dream Website?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium"
                >
                    Join the businesses in Puttalam and beyond who are scaling up with LaunchUpWeb. Let's turn your vision into pixel-perfect reality.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/contact" passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-10 rounded-full text-lg shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 cursor-pointer"
                        >
                            Start Your Project <ArrowRight className="ml-2" />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
