import { Facebook, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark border-t border-gray-800 pt-16 pb-8 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            LaunchUp<span className="text-primary">Web</span>
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Helping businesses grow with high-converting professional websites. Modern, fast, and results-driven.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><Linkedin size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#services" className="hover:text-primary transition-colors">Business Websites</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">E-Commerce</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Website Redesign</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">SEO Optimization</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Landing Pages</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MessageCircle className="w-5 h-5 mr-3 text-primary mt-1" />
                                <span>+94 77 832 0044</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 text-primary mt-1" />
                                <span>hello@launchupweb.com</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-5 h-5 mr-3 text-primary flex items-center justify-center font-bold">L</span>
                                <span>Based in Sri Lanka,<br />Serving Clients Globally</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© {currentYear} LaunchUpWeb. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
