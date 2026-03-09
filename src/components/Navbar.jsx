import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.mobile-toggle')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/project' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-white/80 dark:bg-slate-900/80 shadow-2xl backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 relative z-50"
                >
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-lg border-2 border-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 dark:text-white">
                            TILAHUN<span className="text-primary-500">.</span>
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                            <Link
                                to={link.path}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive(link.path)
                                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-4" />
                    <button
                        onClick={toggleDarkMode}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-indigo-400" />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-3">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 backdrop-blur-md"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-indigo-400" />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mobile-toggle p-2.5 rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, scale: 0.95, y: -20, rotateX: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20, rotateX: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute top-[calc(100%+12px)] left-6 right-6 md:hidden glass border border-white/20 dark:border-slate-800/50 rounded-3xl shadow-3xl overflow-hidden z-50 origin-top"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${isActive(link.path)
                                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive(link.path) && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-white shadow-glow" />}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
