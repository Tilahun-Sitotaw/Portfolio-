import { motion } from 'framer-motion';
import { Layout, Server, Database, Code2, Smartphone, Terminal, Users, Speech } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout className="text-primary-500" size={32} />,
            skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
        },
        {
            title: "Backend & Systems",
            icon: <Server className="text-cyan-500" size={32} />,
            skills: ["Spring Boot", "Spring MVC", "Java Servlets", "PHP", "Node.js", "C# / .NET", "Python"]
        },
        {
            title: "Data & Architecture",
            icon: <Database className="text-purple-500" size={32} />,
            skills: ["MySQL", "MongoDB Atlas", "Database Design", "Cloudinary", "Data Structures", "Algorithms"]
        },
        {
            title: "Intelligence & AI",
            icon: <Code2 className="text-rose-500" size={32} />,
            skills: ["Machine Learning", "AI Concepts", "Python Analytics", "Logic Designing"]
        },
        {
            title: "Soft Skills & Leadership",
            icon: <Users className="text-indigo-500" size={32} />,
            skills: ["Problem Solving", "Team Collaboration", "Strong Communication", "Emotional Intelligence"]
        },
        {
            title: "Management & Tools",
            icon: <Speech className="text-emerald-500" size={32} />,
            skills: ["Agile / Scrum", "Project Management", "Git & GitHub", "Vite", "Technical Support"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                        Skills & <span className="text-primary-600">Expertise</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        I focus on writing clean, scalable code and delivering user-centric solutions.
                        My diverse skill set allows me to tackle complex problems from both a technical and managerial perspective.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-3xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            <div className="p-8 glass rounded-3xl relative z-10 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.3)] bg-white/80 dark:bg-slate-900/80 h-full flex flex-col">
                                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                    {category.skills.map((skill, si) => (
                                        <span
                                            key={si}
                                            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20 hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Skills;
