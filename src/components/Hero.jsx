import { motion } from 'framer-motion';
import { ArrowRight, Github, Send, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold tracking-wider text-primary-600 uppercase bg-primary-500/10 border border-primary-500/20 rounded-full"
                        >
                            Transforming Ideas
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-wider text-green-600 dark:text-green-400 uppercase bg-green-500/10 border border-green-500/20 rounded-full"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for Work
                        </motion.div>
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.1] mb-8 text-slate-900 dark:text-white tracking-tight">
                        Building Future <br />
                        <span className="text-gradient">Digital Solutions</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
                        I am <span className="text-slate-900 dark:text-white font-bold underline decoration-primary-500/40 decoration-4 underline-offset-4 hover:decoration-primary-500 transition-colors">Tilahun Sitotaw</span>, a visionary developer crafting high-performance full-stack applications and AI-driven systems tailored for modern needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <motion.div whileHover={{ scale: 1.05, translateY: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto hover-glow">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary-600 to-cyan-500 hover:from-primary-500 hover:to-cyan-400 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(14,165,233,0.5)] transition-all text-lg"
                            >
                                Let's Talk <ArrowRight size={22} className="animate-pulse" />
                            </Link>
                        </motion.div>
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
                                    whileHover={{ scale: 1.15, rotate: 5, translateY: -4 }}
                                    className="p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.4)] hover:text-primary-500 hover:border-primary-500/30 transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 relative group overflow-hidden"
                                    title={social.label}
                                >
                                    <div className="absolute inset-0 bg-primary-500/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out"></div>
                                    <social.icon size={24} className="relative z-10" />
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
