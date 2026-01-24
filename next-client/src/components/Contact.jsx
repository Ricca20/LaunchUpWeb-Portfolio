"use client";
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Smartphone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', company: '', phone: '', email: '', service: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden perspective-1000">
            {/* 3D Floating Objects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ rotate: -360, y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px]"
                />

                {/* Isometric Cubes */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotateZ: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-[20%] left-[10%] w-20 h-20 bg-gradient-to-br from-black/5 to-transparent border border-black/5 backdrop-blur-md rounded-2xl transform rotate-45"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotateZ: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-md rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-surface border border-black/5 text-sm font-medium text-primary mb-4">Let's Work Together</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Start Your Project <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">With LaunchUpWeb</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ready to transform your digital presence? We're here to help you build something extraordinary. Drop us a line!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                                <div className="bg-surface/50 border border-black/5 p-8 rounded-3xl h-full hover:bg-surface hover:border-primary/30 transition-all duration-300 group shadow-lg">
                                    <div className="bg-primary/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                        <Smartphone size={32} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">WhatsApp</h3>
                                    <p className="text-gray-600 mb-4">+94 77 832 0044</p>
                                    <a href="#" className="text-primary font-bold hover:text-gray-900 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                                        Chat Now <Send size={16} className="ml-2" />
                                    </a>
                                </div>
                            </Tilt>

                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                                <div className="bg-surface/50 border border-black/5 p-8 rounded-3xl h-full hover:bg-surface hover:border-secondary/30 transition-all duration-300 group shadow-lg">
                                    <div className="bg-secondary/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                                        <Mail size={32} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-4">hello@launchupweb.com</p>
                                    <a href="mailto:hello@launchupweb.com" className="text-secondary font-bold hover:text-gray-900 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                                        Send Email <Send size={16} className="ml-2" />
                                    </a>
                                </div>
                            </Tilt>
                        </div>

                        <div className="bg-gradient-to-r from-surface to-white border border-black/5 p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                            <div className="relative z-10 flex items-start">
                                <div className="bg-gray-800 p-3 rounded-xl text-gray-900 mr-6 mt-1 shadow-lg">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">Global Reach, Local Roots</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Proudly based in Sri Lanka 🇱🇰, delivering world-class digital solutions to clients across the globe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-gray-900 font-bold text-xl mb-6 flex items-center">
                                Follow Our Journey
                                <span className="h-px bg-gray-800 flex-grow ml-6"></span>
                            </h3>
                            <div className="flex gap-4">
                                {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ y: -5, backgroundColor: "#f1f5f9", color: "#000000" }}
                                        href="#"
                                        className="bg-surface border border-black/5 p-4 rounded-xl text-gray-600 transition-all duration-300"
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - 3D Glass Envelope */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Tilt
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={1500}
                            className="bg-gray-100/50 backdrop-blur-3xl border border-black/5 p-1 rounded-[40px] shadow-2xl relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[40px] pointer-events-none" />

                            <div className="bg-white/80 rounded-[36px] p-8 md:p-10 relative z-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-surface border border-gray-700 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 font-medium"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-surface border border-gray-700 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 font-medium"
                                                placeholder="Business Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-surface border border-gray-700 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 font-medium"
                                                placeholder="+94 ..."
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-surface border border-gray-700 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 font-medium"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">Service</label>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-surface border border-gray-700 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none font-medium cursor-pointer"
                                            >
                                                <option value="">Select a Service</option>
                                                <option value="Business Website">Business Website</option>
                                                <option value="E-Commerce">E-Commerce</option>
                                                <option value="Portfolio Website">Portfolio Website</option>
                                                <option value="Website Redesign">Website Redesign</option>
                                                <option value="SEO Optimization">SEO Optimization</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full bg-surface border border-gray-700 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 font-medium resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'sending' || status === 'success'}
                                        className={`w-full flex items-center justify-center py-5 px-6 rounded-xl font-bold text-gray-900 text-lg transition-all duration-300 shadow-xl ${status === 'success' ? 'bg-green-600 shadow-green-900/20' : 'bg-gradient-to-r from-primary to-secondary shadow-primary/25 hover:shadow-primary/40'
                                            }`}
                                    >
                                        {status === 'sending' ? (
                                            'Sending...'
                                        ) : status === 'success' ? (
                                            <>
                                                <CheckCircle className="mr-2" size={24} /> Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-3" size={22} /> Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
