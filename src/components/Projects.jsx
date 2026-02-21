import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, ShoppingCart, Map, Sprout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AgroChain Ethiopia",
            description: "A secure agricultural supply chain platform with Real-time Chat, MongoDB Atlas integration, and Cloudinary media management. Focused on transparency and full-stack excellence.",
            tech: ["React", "Express", "MongoDB", "Tailwind", "Socket.io"],
            icon: <Sprout className="text-emerald-500" />,
            link: "https://agrochain-client-orz8.onrender.com"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-800 p-1 border border-transparent hover:border-primary-500/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
                        >
                            <div className="p-8 h-full bg-white dark:bg-slate-800 rounded-[2.3rem] flex flex-col justify-between">
                                <div>
                                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl w-fit mb-6 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors text-center"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href="https://github.com/Tilahun-Sitotaw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-900 dark:text-slate-100 hover:text-primary-600 transition-colors"
                                        >
                                            <Github size={20} />
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
