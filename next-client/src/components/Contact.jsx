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
        <section id="contact" className="py-32 relative overflow-hidden perspective-1000">
            {/* 3D Floating Objects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, y: [0, 50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ rotate: -360, y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[120px]"
                />

                {/* Isometric Cubes - Glass */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotateZ: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] w-24 h-24 bg-white/20 border border-white/50 backdrop-blur-md rounded-3xl shadow-glass transform rotate-45"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotateZ: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-white/10 border border-white/40 backdrop-blur-md rounded-full shadow-glass"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/60 border border-white/60 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md shadow-glass-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-bold text-gray-800">Let's Work Together</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Start Your Project <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">With LaunchUpWeb</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
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
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                                <div className="bg-blue-50/60 border border-blue-100 p-8 rounded-[2rem] h-full hover:border-primary/50 transition-all duration-300 group shadow-glass hover:shadow-glass-lg backdrop-blur-xl hover:bg-blue-100/50">
                                    <div className="bg-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-50">
                                        <Smartphone size={32} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">WhatsApp</h3>
                                    <p className="text-gray-600 mb-4 font-medium">+94 77 832 0044</p>
                                    <a href="#" className="text-primary font-bold hover:text-blue-600 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                                        Chat Now <Send size={16} className="ml-2" />
                                    </a>
                                </div>
                            </Tilt>

                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                                <div className="bg-blue-50/60 border border-blue-100 p-8 rounded-[2rem] h-full hover:border-secondary/50 transition-all duration-300 group shadow-glass hover:shadow-glass-lg backdrop-blur-xl hover:bg-blue-100/50">
                                    <div className="bg-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-50">
                                        <Mail size={32} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-4 font-medium">hello@launchupweb.com</p>
                                    <a href="mailto:hello@launchupweb.com" className="text-secondary font-bold hover:text-pink-600 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                                        Send Email <Send size={16} className="ml-2" />
                                    </a>
                                </div>
                            </Tilt>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50/80 to-blue-50/40 border border-blue-100 p-8 rounded-[2rem] relative overflow-hidden group shadow-glass backdrop-blur-xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                            <div className="relative z-10 flex items-start">
                                <div className="bg-white p-3 rounded-xl text-primary mr-6 mt-1 shadow-md border border-blue-50">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">Global Reach, Local Roots</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        Proudly based in Sri Lanka 🇱🇰, delivering world-class digital solutions to clients across the globe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-gray-900 font-bold text-xl mb-6 flex items-center">
                                Follow Our Journey
                                <span className="h-px bg-gray-200 flex-grow ml-6"></span>
                            </h3>
                            <div className="flex gap-4">
                                {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        href="#"
                                        className="bg-white border border-blue-100 p-4 rounded-2xl text-gray-500 hover:text-primary hover:shadow-glass transition-all duration-300 shadow-sm"
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
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            perspective={1500}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[3rem] blur-xl opacity-50 transform translate-y-4" />

                            <div className="bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-[3rem] p-8 md:p-10 relative z-10 shadow-glass-lg">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400 font-medium shadow-inner"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400 font-medium shadow-inner"
                                                placeholder="Business Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400 font-medium shadow-inner"
                                                placeholder="+94 ..."
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400 font-medium shadow-inner"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Service</label>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-white/50 border border-white/50 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none font-medium cursor-pointer shadow-inner"
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
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full bg-white/50 border border-white/50 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400 font-medium resize-none shadow-inner"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 122, 255, 0.5)" }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'sending' || status === 'success'}
                                        className={`w-full flex items-center justify-center py-5 px-6 rounded-2xl font-bold text-white text-lg transition-all duration-300 shadow-xl ${status === 'success' ? 'bg-green-500 shadow-green-500/30' : 'bg-primary shadow-blue-500/30'
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
