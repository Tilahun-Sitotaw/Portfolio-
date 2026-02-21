import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Instagram, Loader2, CheckCircle2, Phone } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's <span className="text-primary-600">Connect</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            If you are looking for a dedicated developer, collaborator, or learner, feel free to reach out.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass p-8 rounded-3xl space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-primary-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Me</h4>
                                        <a href="mailto:tilahunsitotaw87@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 transition-colors">tilahunsitotaw87@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Call / WhatsApp</h4>
                                        <a href="tel:+251985076701" className="text-slate-500 dark:text-slate-400 hover:text-green-600 transition-colors">+251 985 076 701</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl text-cyan-600">
                                        <Send size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Telegram</h4>
                                        <a href="https://t.me/tiletechzone" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 transition-colors">@tiletechzone</a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-primary-600 rounded-3xl text-white">
                                <h4 className="text-xl font-bold mb-4">Work Ethic & Vision</h4>
                                <p className="text-primary-100 italic leading-relaxed">
                                    "I am self-motivated, disciplined, and a highly collaborative team player. My vision is to build impactful systems through effective communication and strong project management."
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                                    <textarea
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'success' ? 'bg-green-500 text-white' :
                                        status === 'error' ? 'bg-red-500 text-white' :
                                            'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/20'
                                        }`}
                                >
                                    {status === 'loading' ? (
                                        <>Sending Message <Loader2 className="animate-spin" size={20} /></>
                                    ) : status === 'success' ? (
                                        <>Message Sent! <CheckCircle2 size={20} /></>
                                    ) : status === 'error' ? (
                                        'Error Occurred. Try Again'
                                    ) : (
                                        <>Send Message <Send size={20} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
