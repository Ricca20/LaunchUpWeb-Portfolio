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
            icon: <EyeOff size={40} className="text-gray-400" />,
            title: "Invisible Online",
            description: "No SEO optimization means no one finds your business when searching on Google."
        }
    ];

    return (
        <section className="py-20 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Is Your Website Costing You <span className="text-red-500">Business?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Many businesses lose potential customers every day because of slow, outdated, or unprofessional websites.
                        Your website is often the first impression — and you don't get a second chance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-surface/50 border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-all duration-300 group"
                        >
                            <div className="mb-6 bg-dark inline-block p-4 rounded-full shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{problem.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        That's where <span className="text-primary">LaunchUpWeb</span> comes in.
                    </h3>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We create websites that solve these problems and help your business grow.
                        Don't let a bad website hold you back.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolution;
