"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                            <Users size={14} className="text-blue-600" />
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Who We Are</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">LaunchUpWeb</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                            <p>
                                LaunchUpWeb is a professional web design and development service dedicated to helping businesses grow online. Whether you're a startup looking to make your first impression, a small business ready to expand, or an established company needing a digital refresh, we craft modern, responsive, and conversion-focused websites that build trust and drive measurable results.
                            </p>
                            <p>
                                Our approach is simple but powerful: we listen to your goals, understand your customers, and create websites that work as hard as you do. Every project combines strategic thinking, beautiful design, and technical excellence to give you a website that truly works for your business.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a href="#contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group">
                                Learn More About Our Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                        <div className="bg-white border border-blue-50 p-8 rounded-2xl text-center hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle size={48} />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">10+</h3>
                            <p className="text-gray-600 font-bold">Successful Projects</p>
                            <p className="text-xs text-blue-500 font-medium mt-2 bg-blue-50 inline-block px-2 py-1 rounded-md">Proven track record</p>
                        </div>

                        <div className="bg-white border border-blue-50 p-8 rounded-2xl text-center hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="flex justify-center mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                <Globe size={48} />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">Global</h3>
                            <p className="text-gray-600 font-bold">International Clients</p>
                            <p className="text-xs text-cyan-600 font-medium mt-2 bg-cyan-50 inline-block px-2 py-1 rounded-md">Serving UK & Sri Lanka</p>
                        </div>

                        <div className="bg-white border border-blue-50 p-8 rounded-2xl text-center hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1 sm:col-span-2">
                            <div className="flex justify-center mb-4 text-indigo-500 group-hover:scale-110 transition-transform duration-300">
                                <Users size={48} />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">100%</h3>
                            <p className="text-gray-600 font-bold">Client Satisfaction</p>
                            <p className="text-xs text-indigo-600 font-medium mt-2 bg-indigo-50 inline-block px-2 py-1 rounded-md">Quality guaranteed</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
