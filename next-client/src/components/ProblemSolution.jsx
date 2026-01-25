"use client";
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle, EyeOff } from 'lucide-react';

const ProblemSolution = () => {
    const problems = [
        {
            icon: <AlertTriangle size={40} className="text-orange-500" />,
            title: "Losing Credibility",
            description: "Outdated design makes visitors doubt your professionalism and choose competitors."
        },
        {
            icon: <XCircle size={40} className="text-red-500" />,
            title: "Missing Leads",
            description: "Poor navigation and slow loading drive potential customers away before they contact you."
        },
        {
            icon: <EyeOff size={40} className="text-gray-600" />,
            title: "Invisible Online",
            description: "No SEO optimization means no one finds your business when searching on Google."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                        <AlertTriangle size={14} className="text-blue-600" />
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">The Reality Check</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Is Your Website Costing You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Business?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Many businesses lose potential customers every day because of slow, outdated, or unprofessional websites.
                        Your website is often the first impression — and you don't get a second chance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-20">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white border border-blue-50 p-8 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -mr-4 -mt-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{problem.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-blue-600 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl shadow-blue-500/30"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                            That's where <span className="text-blue-100">LaunchUpWeb</span> comes in.
                        </h3>
                        <p className="text-xl text-blue-50 max-w-2xl mx-auto font-medium leading-relaxed">
                            We create websites that solve these problems and help your business grow.
                            Don't let a bad website hold you back.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolution;
