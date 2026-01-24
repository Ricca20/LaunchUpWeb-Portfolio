"use client";
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            company: "Thermotec Engineering",
            location: "Sri Lanka",
            quote: "LaunchUpWeb built us a professional website that significantly improved our business credibility. The quality and support were outstanding. Highly recommended!",
            rating: 5
        },
        {
            company: "Vishwa Bites",
            location: "Sri Lanka",
            quote: "Very supportive team, fast delivery, and high-quality service. Working with LaunchUpWeb was a great experience from start to finish.",
            rating: 5
        },
        {
            company: "Waudby Enterprises",
            location: "United Kingdom",
            quote: "We are extremely satisfied with both the website quality and the communication throughout the project. Professional, reliable, and results-driven.",
            rating: 5
        },
        {
            company: "Archstone Engineering",
            location: "Sri Lanka",
            quote: "LaunchUpWeb delivered exactly what we needed — a modern, professional website that represents our brand perfectly. Excellent work!",
            rating: 4
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
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        What Our <span className="text-blue-600">Clients Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        Don't just take our word for it — hear from businesses we've helped grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-2xl relative hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 w-10 h-10 group-hover:text-blue-200 transition-colors" />

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className={i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
                                ))}
                            </div>

                            <p className="text-gray-700 text-lg mb-6 italic relative z-10 font-medium leading-relaxed">
                                "{item.quote}"
                            </p>

                            <div className="border-t border-gray-100 pt-6 flex items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                                    {item.company.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold text-sm">{item.company}</h4>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
