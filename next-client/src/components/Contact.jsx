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
            // Attempt to save to backend (which now handles Email)
            // Use environment variable for API URL or fallback to localhost
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
            await axios.post(`${apiUrl}/api/contact`, formData);

            setStatus('success');
            setFormData({ name: '', company: '', phone: '', email: '', service: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden perspective-1000">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            {/* 3D Floating Objects - Subtle Theme Colors */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, y: [0, 50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ rotate: -360, y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cyan-100/40 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Let's Work Together</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Start Your Project <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">With LaunchUpWeb</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
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
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
                                <a href="https://wa.me/94778320044" target="_blank" rel="noopener noreferrer" className="block bg-white border border-blue-50 p-8 rounded-[2rem] h-full hover:border-blue-200 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                                    <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-50">
                                        <Smartphone size={32} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">WhatsApp</h3>
                                    <p className="text-gray-600 mb-4 font-medium">+94 77 832 0044</p>
                                    <span className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                                        Chat Now <Send size={16} className="ml-2" />
                                    </span>
                                </a>
                            </Tilt>

                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
                                <div className="bg-white border border-blue-50 p-8 rounded-[2rem] h-full hover:border-blue-200 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                                    <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-50">
                                        <Mail size={32} />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-4 font-medium">Info@launchupweb.com</p>
                                    <a href="mailto:Info@launchupweb.com" className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                                        Send Email <Send size={16} className="ml-2" />
                                    </a>
                                </div>
                            </Tilt>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem] relative overflow-hidden group shadow-sm">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                            <div className="relative z-10 flex items-start">
                                <div className="bg-white p-3 rounded-xl text-blue-600 mr-6 mt-1 shadow-sm border border-blue-100">
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
                                <span className="h-px bg-gray-100 flex-grow ml-6"></span>
                            </h3>
                            <div className="flex gap-4">
                                {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        href={idx === 0 ? "https://www.facebook.com/share/17owgJdGeS/?mibextid=wwXIfr" : "#"}
                                        className="bg-white border border-blue-50 p-4 rounded-2xl text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 shadow-sm"
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Tilt
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            perspective={1500}
                            className="relative"
                        >
                            <div className="bg-white border border-blue-50 rounded-[2.5rem] p-8 md:p-10 relative z-10 shadow-xl shadow-blue-500/5">
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
                                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-gray-400 font-medium"
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
                                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-gray-400 font-medium"
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
                                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-gray-400 font-medium"
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
                                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-gray-400 font-medium"
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
                                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none font-medium cursor-pointer"
                                            >
                                                <option value="">Select a Service</option>
                                                <option value="Business Website">Business Website</option>
                                                <option value="E-Commerce">E-Commerce</option>
                                                <option value="Portfolio Website">Portfolio Website</option>
                                                <option value="Website Redesign">Website Redesign</option>
                                                <option value="Landing Pages & Funnels">Landing Pages & Funnels</option>
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
                                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-gray-400 font-medium resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'sending' || status === 'success'}
                                        className={`w-full flex items-center justify-center py-5 px-6 rounded-2xl font-bold text-white text-lg transition-all duration-300 shadow-xl ${status === 'success' ? 'bg-green-500 shadow-green-500/30' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-600 shadow-blue-600/30'
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
