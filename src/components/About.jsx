import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-primary-500/20 shadow-2xl animate-float">
                            <img
                                src="/images/about.jpg"
                                alt="Tilahun Sitotaw"
                                className="w-full h-full object-cover min-h-[500px] hover:scale-110 transition-transform duration-1000"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                                }}
                            />
                        </div>
                        {/* Interactive Glow */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-[4rem] opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-700 -z-0"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 text-sm font-bold">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                </span>
                                Debre Berhan University
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                                Delivering Excellence through <span className="text-gradient">Logic & Design</span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                Hello, I’m <strong>Tilahun Sitotaw Gobezie</strong>, a 4th-year Information Technology student at Debre Berhan University and a dedicated Software Engineering professional.
                            </p>
                            <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                                <p>
                                    I am a results-driven <strong>Problem Solver</strong> committed to developing high-impact digital solutions. My expertise lies in bridging the gap between complex technical logic and seamless user experiences, specializing in <strong>Full-stack Engineering, Enterprise Java, and Scalable AI Systems.</strong>
                                </p>
                                <p>
                                    I pride myself on being a <strong>Strategic Communicator</strong> and a <strong>Collaborative Leader</strong>. Whether working in a team or leading a project, I ensure that clear communication and <strong>Agile Project Management</strong> are the foundations of every successful delivery.
                                </p>
                                <p>
                                    My technical arsenal includes <strong>Spring Boot, Python, C#, and Modern JS Frameworks</strong>, complemented by advanced media and data management through Cloudinary and MongoDB. I don't just write code; I build <strong>Future-Ready Systems.</strong>
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                    <h3 className="text-3xl font-bold text-primary-600 mb-1">3+</h3>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Exp</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                    <h3 className="text-3xl font-bold text-primary-600 mb-1">10+</h3>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects</p>
                                </div>
                            </div>

                            <div className="pt-4 flex gap-4 items-center text-slate-600 dark:text-slate-400">
                                <span className="font-semibold">Project Management:</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-primary-600">AGILE</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-primary-600">SCRUM</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default About;
