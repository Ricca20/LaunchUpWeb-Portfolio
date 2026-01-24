import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, Code, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
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
        <section id="portfolio" className="py-32 relative bg-dark overflow-hidden">
            {/* 3D Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div style={{ y: y1, x: -50 }} className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
                <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-left mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <Layers size={16} className="text-secondary" />
                        <span className="text-sm font-medium text-gray-300">Selected Works</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                        Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Speaks</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                        We don't just build websites; we craft digital experiences that allow your business to stand out and scale up.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    {projects.map((project, index) => (
                        <Tilt
                            key={project._id}
                            perspective={2500}
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            scale={1.01}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            transitionSpeed={2000}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex flex-col relative"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Image Container */}
                                <div className="relative h-72 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay z-10`} />
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col h-full" style={{ transform: 'translateZ(30px)' }}>

                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`text-[10px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-white uppercase tracking-widest border border-white/10 shadow-lg shadow-black/20`}>
                                            {project.category}
                                        </div>
                                        {/* Globe Icon removed as mostly redundant or moved to bottom */}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors min-h-[4rem] flex items-center leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 text-sm md:text-base h-[4.5rem]">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8 min-h-[2rem] content-start">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="text-[10px] font-semibold text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 flex items-center hover:bg-white/10 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 mt-auto bg-gradient-to-t from-dark/20 to-transparent -mx-8 -mb-8 px-8 pb-8">
                                        <div className="flex items-end justify-between mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Impact</span>
                                                <span className="text-sm text-gray-200 font-medium max-w-[12rem] leading-snug">{project.results}</span>
                                            </div>
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative overflow-hidden w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all duration-300 border border-white/10 shadow-lg hover:shadow-primary/25"
                                            >
                                                <ArrowRight size={20} className="transform group-hover/btn:-rotate-45 transition-transform duration-300" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary font-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary">
                        <span className="mr-2">Start Your Project</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-white/40 animate-pulse"></div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
