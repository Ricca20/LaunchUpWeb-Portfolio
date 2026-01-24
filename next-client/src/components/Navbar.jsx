"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import logo from '../assets/logo.svg';

// Magnetic Link Component defined outside to prevent re-renders
const MagneticLink = ({ children, href }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3; // Magnetic strength
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="text-gray-700 hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors relative group overflow-hidden"
        >
            <div className="relative z-10">{children}</div>
            <div className="absolute inset-0 bg-black/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
        </motion.a>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // Trigger earlier for smoother feel
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Process', href: '#process' },
        { name: 'About', href: '#about' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom bezier for premium feel
        }
    };

    return (
        <motion.nav
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full ${scrolled
                ? 'bg-white/80 backdrop-blur-2xl border border-primary/10 shadow-glass'
                : 'bg-transparent border border-transparent'
                }`}
        >
            <div className="px-6 py-2">
                <div className="flex items-center justify-between">

                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Tilt perspective={500} scale={1.05} transitionSpeed={2000}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={logo.src || logo}
                                    alt="LaunchUp Web"
                                    className="h-10 w-auto drop-shadow-sm filter brightness-110"
                                />
                            </motion.div>
                        </Tilt>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <MagneticLink key={link.name} href={link.href}>
                                    <span className="font-medium tracking-wide text-sm text-gray-800">{link.name}</span>
                                </MagneticLink>
                            ))}
                            <Tilt scale={1.05} transitionSpeed={2500}>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ boxShadow: "0 0 20px rgba(0, 122, 255, 0.4)" }}
                                    className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 transition-all duration-300 ring-2 ring-blue-500/20 hover:ring-blue-500/40"
                                >
                                    Get Started
                                </motion.a>
                            </Tilt>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none p-2 rounded-full hover:bg-black/5 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 10 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-3xl border border-white/50 rounded-3xl mt-2 overflow-hidden shadow-glass-lg p-2"
                    >
                        <div className="flex flex-col items-center space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-800 hover:bg-gray-100/50 block px-6 py-3 rounded-2xl text-sm font-medium w-full text-center transition-all duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-primary text-white font-bold py-3 rounded-2xl mt-4 shadow-lg shadow-blue-500/20"
                            >
                                Get Started
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
