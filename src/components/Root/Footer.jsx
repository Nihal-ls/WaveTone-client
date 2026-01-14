"use client";
import { motion } from "framer-motion";
import { LuInstagram, LuTwitter, LuYoutube, LuGithub, LuArrowRight } from "react-icons/lu";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-100 pt-20 pb-10 px-6 border-t border-base-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <h2 className="text-3xl font-black tracking-tighter uppercase italic">
                            Wave<span className="text-primary">_</span>Tone
                        </h2>
                        <p className="text-base-content/50 text-sm max-w-xs leading-relaxed">
                            Premium instruments for the modern creator. Redefining the sound of tomorrow, today.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-colors"><LuInstagram size={20} /></a>
                            <a href="#" className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-colors"><LuTwitter size={20} /></a>
                            <a href="#" className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-colors"><LuYoutube size={20} /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Shop</h4>
                        <ul className="space-y-3 text-sm font-medium text-base-content/70">
                            <li><a href="#" className="hover:text-primary transition-colors">Guitars</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Keyboards</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Studio Gear</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Deals</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Company</h4>
                        <ul className="space-y-3 text-sm font-medium text-base-content/70">
                            <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Stay In Tune</h4>
                        <p className="text-sm text-base-content/50">Join our newsletter for exclusive drops and artist interviews.</p>
                        <div className="join w-full">
                            <input
                                className="input input-bordered join-item w-full focus:outline-none focus:border-primary bg-base-200 border-none rounded-l-2xl"
                                placeholder="email@example.com"
                            />
                            <button className="btn btn-primary join-item rounded-r-2xl px-6 group">
                                <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">
                        © {currentYear} WaveTone International. All Rights Reserved.
                    </div>

                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-base-content/40">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}