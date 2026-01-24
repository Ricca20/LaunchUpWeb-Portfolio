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
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute right-0 top-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                            className="bg-surface border border-gray-800 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-gray-700 w-12 h-12 opacity-50" />

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className={i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} />
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg mb-6 italic relative z-10">
                                "{item.quote}"
                            </p>

                            <div className="border-t border-gray-700 pt-6">
                                <h4 className="text-white font-bold">{item.company}</h4>
                                <p className="text-sm text-gray-500">{item.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
