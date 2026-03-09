import { motion } from 'framer-motion';
import { ArrowRight, Github, Send, Instagram, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
            {/* Animated Blobs BACKGROUND */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-600 uppercase bg-primary-500/10 border border-primary-500/20 rounded-full"
                    >
                        Transforming Ideas into Digital Reality
                    </motion.div>
                    <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.1] mb-8 text-slate-900 dark:text-white tracking-tight">
                        Building Future <br />
                        <span className="text-gradient">Digital Solutions</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
                        I am <span className="text-slate-900 dark:text-white font-bold underline decoration-primary-500/30 decoration-4 underline-offset-4">Tilahun Sitotaw</span>, a visionary developer crafting high-performance full-stack applications and AI-driven systems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.02, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-primary-500/40 transition-all text-lg"
                        >
                            Let's Talk <ArrowRight size={22} />
                        </motion.a>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/Tilahun-Sitotaw", label: "GitHub" },
                                { icon: Send, href: "https://t.me/tiletechzone", label: "Telegram" },
                                { icon: Instagram, href: "https://instagram.com/tile_tech2025", label: "Instagram" },
                                { icon: Mail, href: "mailto:tilahunsitotaw87@gmail.com", label: "Email" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, translateY: -3 }}
                                    className="p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-primary-500/20 hover:text-primary-600 transition-all text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
                                    title={social.label}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="relative z-10 w-full aspect-square max-w-[520px] mx-auto overflow-hidden rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-8 border-white/10 backdrop-blur-3xl animate-float">
                        <img
                            src="/images/profile.jpg"
                            alt="Tilahun Sitotaw"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-500/20 rounded-full blur-[80px] -z-0 group-hover:bg-primary-500/30 transition-colors duration-700"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-0 group-hover:bg-cyan-500/30 transition-colors duration-700"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
