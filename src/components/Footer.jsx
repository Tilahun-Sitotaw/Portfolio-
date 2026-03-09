import { Github, Send, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-black text-gradient mb-2 uppercase tracking-tighter">TILAHUN.</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Software Developer & IT Student</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/Tilahun-Sitotaw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors" title="GitHub"><Github size={24} /></a>
                        <a href="https://t.me/tiletechzone" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors" title="Telegram"><Send size={24} /></a>
                        <a href="https://instagram.com/tile_tech2025" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors" title="Instagram"><Instagram size={24} /></a>
                        <a href="mailto:tilahunsitotaw87@gmail.com" className="text-slate-400 hover:text-primary-600 transition-colors" title="Email"><Mail size={24} /></a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-primary-600 rounded-full transition-all border border-slate-100 dark:border-slate-700"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Tilahun Sitotaw Gobezie. All rights reserved.
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1.5">
                        Crafted with <span className="text-primary-500 font-semibold">React</span>, <span className="text-green-500 font-semibold">Node.js</span> & <span className="text-cyan-500 font-semibold">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
