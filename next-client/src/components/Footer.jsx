"use client";
import { Facebook, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-blue-50 pt-20 pb-10 text-gray-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black tracking-tight text-gray-900">
                            LaunchUp<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Web</span>
                        </h2>
                        <p className="leading-relaxed font-medium text-gray-500">
                            Helping businesses grow with high-converting professional websites. Modern, fast, and results-driven digital solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/17owgJdGeS/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"><Linkedin size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Contact</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Business Websites</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">E-Commerce</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Website Redesign</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">SEO Optimization</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors font-medium hover:pl-2 duration-300 block">Landing Pages</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start group">
                                <div className="bg-blue-50 p-2 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                                    <MessageCircle className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="mt-1 font-medium group-hover:text-blue-600 transition-colors">+94 77 832 0044</span>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-blue-50 p-2 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="mt-1 font-medium group-hover:text-blue-600 transition-colors">Info@launchupweb.com</span>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-blue-50 p-2 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center font-bold text-blue-600">L</span>
                                </div>
                                <span className="mt-1 font-medium group-hover:text-blue-600 transition-colors">Based in Sri Lanka,<br />Serving Clients Globally</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
                    <p className="text-gray-500">© {currentYear} LaunchUpWeb. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
