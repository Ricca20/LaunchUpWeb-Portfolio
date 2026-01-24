"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About <span className="text-primary">LaunchUpWeb</span>
                        </h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                LaunchUpWeb is a professional web design and development service dedicated to helping businesses grow online. Whether you're a startup looking to make your first impression, a small business ready to expand, or an established company needing a digital refresh, we craft modern, responsive, and conversion-focused websites that build trust and drive measurable results.
                            </p>
                            <p>
                                Our approach is simple but powerful: we listen to your goals, understand your customers, and create websites that work as hard as you do. Every project combines strategic thinking, beautiful design, and technical excellence to give you a website that truly works for your business.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a href="#contact" className="inline-flex items-center text-primary font-bold hover:text-gray-900 transition-colors">
                                Learn More About Our Story <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="bg-surface border border-gray-800 p-8 rounded-2xl text-center hover:border-primary/50 transition-colors">
                            <div className="flex justify-center mb-4 text-primary">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">10+</h3>
                            <p className="text-gray-600 font-medium">Successful Projects</p>
                            <p className="text-xs text-gray-500 mt-2">Proven track record</p>
                        </div>

                        <div className="bg-surface border border-gray-800 p-8 rounded-2xl text-center hover:border-secondary/50 transition-colors">
                            <div className="flex justify-center mb-4 text-secondary">
                                <Globe size={40} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">Global</h3>
                            <p className="text-gray-600 font-medium">International Clients</p>
                            <p className="text-xs text-gray-500 mt-2">Serving UK & Sri Lanka</p>
                        </div>

                        <div className="bg-surface border border-gray-800 p-8 rounded-2xl text-center hover:border-accent/50 transition-colors sm:col-span-2">
                            <div className="flex justify-center mb-4 text-accent">
                                <Users size={40} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
                            <p className="text-gray-600 font-medium">Client Satisfaction</p>
                            <p className="text-xs text-gray-500 mt-2">Quality guaranteed</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
