import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, ShoppingCart, Map, Sprout, Factory } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AgroChain Ethiopia",
            description: "A secure agricultural supply chain platform with Real-time Chat, MongoDB Atlas integration, and Cloudinary media management. Focused on transparency and full-stack excellence.",
            tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Socket.io"],
            icon: <Sprout className="text-emerald-500" />,
            link: "https://agrochain-client-orz8.onrender.com"
        },
        {
            title: "ASF Textile Factory",
            description: "A digital hub and smart manufacturing platform for redefining East African manufacturing with smart automation and digital supply chain excellence.",
            tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind"],
            icon: <Factory className="text-blue-500" />,
            link: "https://asf-textile-factory-com-et.onrender.com"
        },
        {
            title: "Student Management System",
            description: "A full-featured desktop application with admin and user roles, auto-increment student IDs, authentication, and database integration.",
            tech: ["Java Swing", "MySQL", "JDBC"],
            icon: <Monitor className="text-primary-500" />,
            link: "#"
        },
        {
            title: "E-Market System",
            description: "An online marketplace system with product management, shopping cart, order processing, admin dashboard, and user dashboard.",
            tech: ["JSP", "Servlets", "MySQL", "Bootstrap"],
            icon: <ShoppingCart className="text-orange-500" />,
            link: "#"
        },
        {
            title: "Ethiopian Tour & Travel",
            description: "A modern web platform with booking features, admin dashboard, dynamic content, and responsive design.",
            tech: ["PHP", "MySQL", "JavaScript"],
            icon: <Map className="text-cyan-500" />,
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected <span className="text-primary-600">Projects</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">
                            Here are some of the key systems I've built, ranging from desktop applications to full-stack web platforms.
                        </p>
                    </div>
                    <a href="https://github.com/Tilahun-Sitotaw" target="_blank" className="flex items-center gap-2 text-primary-600 font-semibold hover:underline">
                        View all on GitHub <ExternalLink size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col"
                        >
                            <div className="glass p-1 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(14,165,233,0.15)] h-full">
                                <div className="p-6 md:p-8 lg:p-10 h-full rounded-[2.4rem] md:rounded-[2.9rem] bg-white/80 dark:bg-slate-900/40 backdrop-blur-3xl flex flex-col">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                                        <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-[1.2rem] group-hover:scale-110 transition-transform duration-500">
                                            {project.icon}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{project.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-base md:text-lg flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full sm:flex-1 py-4 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:bg-primary-600 dark:hover:bg-primary-500 transition-all text-center shadow-lg shadow-black/5 dark:shadow-white/5 active:scale-95"
                                            >
                                                View Live
                                            </a>
                                        )}
                                        <a
                                            href="https://github.com/Tilahun-Sitotaw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full sm:w-auto p-4 glass rounded-2xl text-slate-900 dark:text-slate-100 hover:text-primary-600 transition-all border border-slate-200 dark:border-slate-800 ${project.link === "#" ? "flex-1" : ""}`}
                                            title="View Code"
                                        >
                                            <div className="flex justify-center items-center gap-2">
                                                <Github size={24} />
                                                {project.link === "#" && <span className="font-bold">View Source Code</span>}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
