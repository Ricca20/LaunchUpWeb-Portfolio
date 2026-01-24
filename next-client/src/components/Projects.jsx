"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, Code, Globe } from 'lucide-react';
import thermotecLogo from '../assets/thermoteclogo1.png';
import vishwaLogo from '../assets/Vioshwabites.png';
import waudbyLogo from '../assets/wepng.png';
import archstoneLogo from '../assets/Archstone.png';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 3000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 3000], [0, -200]);

    useEffect(() => {
        const scriptProjects = [
            {
                _id: '1',
                title: 'Thermotec Engineering',
                category: 'Engineering',
                description: 'A clean, credible corporate website that improved client trust and positioned Thermotec as an industry authority.',
                results: 'Enhanced brand credibility',
                technologies: ['React', 'Tailwind', 'Framer'],
                imageUrl: thermotecLogo,
                liveLink: 'https://thermotec.lk',
                color: 'from-blue-500 to-cyan-400'
            },
            {
                _id: '2',
                title: 'Vishwa Bites',
                category: 'FMCG Brand',
                description: 'E-commerce-style brand website for a growing FMCG company, showcasing products with style and professionalism.',
                results: 'Increased customer engagement',
                technologies: ['Next.js', 'Stripe', 'MongoDB'],
                imageUrl: vishwaLogo,
                liveLink: 'https://vishwabites.lk',
                color: 'from-orange-500 to-red-400'
            },
            {
                _id: '3',
                title: 'Waudby Enterprises UK',
                category: 'Global Business',
                description: 'Professional business website for a UK-based company, establishing global credibility and trust.',
                results: 'International market presence',
                technologies: ['React', 'Node.js', 'GSAP'],
                imageUrl: waudbyLogo,
                liveLink: 'https://waudbyenterprises.co.uk',
                color: 'from-indigo-500 to-purple-400'
            },
            {
                _id: '4',
                title: 'Archstone Engineering',
                category: 'Corporate',
                description: 'Strong corporate website built for brand authority and professional client acquisition.',
                results: 'Improved market positioning',
                technologies: ['Vue.js', 'Nuxt', 'Sass'],
                imageUrl: archstoneLogo,
                liveLink: 'https://archstone-engineering.com',
                color: 'from-emerald-500 to-teal-400'
            }
        ];
        setProjects(scriptProjects);
    }, []);

    return (
        <section id="portfolio" className="py-32 relative overflow-hidden bg-white">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-left mb-12 relative"
                >
                    {/* Decorative line */}
                    <div className="absolute -left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block opacity-30" />

                    <div className="inline-flex items-center space-x-2 bg-white border border-blue-100 rounded-full px-5 py-2 mb-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-xs font-bold text-gray-800 tracking-wide uppercase">Featured One-Pages</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-tight text-gray-900 leading-[1.1]">
                        Transforming Ideas into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Reality.</span>
                    </h2>

                    <p className="text-base text-gray-500 max-w-xl font-medium leading-relaxed">
                        We don't just design websites; we architect digital experiences that captivate audiences and drive measurable growth for your brand.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white border border-blue-100 rounded-[2rem] overflow-hidden flex flex-col hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={project.imageUrl.src || project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-blue-600 flex items-center justify-center shadow-lg">
                                        <ArrowRight size={18} className="transform -rotate-45" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`text-[10px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 uppercase tracking-widest border border-blue-100`}>
                                        {project.category}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-5 leading-relaxed text-sm font-medium line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack & Result */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Result</span>
                                        <span className="text-xs text-gray-900 font-bold">{project.results}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 text-lg"
                    >
                        <span className="mr-2">Start Your Project</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
