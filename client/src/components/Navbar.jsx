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
            className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors relative group overflow-hidden"
        >
            <div className="relative z-10">{children}</div>
            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
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
            className={`fixed top-0 w-full z-50 transition-all duration-500 py-2 ${scrolled
                ? 'bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Tilt perspective={500} scale={1.05} transitionSpeed={2000}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={logo}
                                    alt="LaunchUp Web"
                                    className="h-16 w-auto drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] filter brightness-110"
                                />
                            </motion.div>
                        </Tilt>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center gap-1">
                            {navLinks.map((link) => (
                                <MagneticLink key={link.name} href={link.href}>
                                    <span className="font-medium tracking-wide text-sm">{link.name}</span>
                                </MagneticLink>
                            ))}
                            <Tilt scale={1.05} transitionSpeed={2500}>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)" }}
                                    className="ml-4 bg-gradient-to-r from-primary/90 to-secondary/90 hover:from-primary hover:to-secondary text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 border border-white/20 block backdrop-blur-md transition-all duration-300"
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
                            className="text-white/80 hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/5 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="lg:hidden bg-dark/40 backdrop-blur-2xl border-b border-white/10 overflow-hidden absolute top-full left-0 right-0 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/70 hover:text-white hover:bg-white/5 block px-6 py-3 rounded-full text-lg font-medium w-full text-center transition-all duration-300"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full max-w-xs text-center bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 rounded-full mt-6 shadow-xl shadow-primary/20 border border-white/10 hover:shadow-primary/40 transition-shadow"
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
