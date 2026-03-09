import { motion } from 'framer-motion';
import { ArrowRight, Github, Send, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#050b1a] transition-colors duration-500">
            {/* Mesh Grid & Blobs Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-black tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 rounded-lg backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-ping"></span>
                            Innovation First
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-black tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-lg backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            Active Now
                        </motion.div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 text-white tracking-tighter">
                        Crafting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-indigo-400 to-purple-400 animate-gradient">Digital Edge</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
                        I am <span className="text-white font-extrabold border-b-2 border-primary-500/50">Tilahun Sitotaw</span>.
                        A Visionary Full-Stack Engineer and AI Specialist dedicated to building the next generation of
                        intelligent, high-performance web ecosystems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                to="/contact"
                                className="group relative w-full sm:w-auto px-10 py-5 bg-primary-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 overflow-hidden transition-all shadow-[0_20px_40px_-15px_rgba(14,165,233,0.5)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    Initiate Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </motion.div>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: Github, href: "https://github.com/Tilahun-Sitotaw" },
                                { icon: Send, href: "https://t.me/tiletechzone" },
                                { icon: Mail, href: "mailto:tilahunsitotaw87@gmail.com" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, translateY: -3 }}
                                    className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-slate-400 hover:text-white hover:border-primary-500/50 transition-all backdrop-blur-xl"
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full aspect-[4/5] max-w-[480px]">
                        {/* Layered Glass Frame */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-[3rem] blur-2xl -z-10 animate-glow"></div>
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl backdrop-blur-md">
                            <img
                                src="/images/profile.jpg"
                                alt="Tilahun Sitotaw"
                                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-60"></div>

                            {/* Floating Stats or Tech Tag */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/10">
                                <p className="text-white font-black text-xs uppercase tracking-widest mb-1">Status</p>
                                <p className="text-primary-400 font-bold text-sm">Building AI Ecosystems</p>
                            </div>
                        </div>

                        {/* Abstract Decor */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-primary-500/30 rounded-tr-[3rem]"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-indigo-500/30 rounded-bl-[3rem]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
