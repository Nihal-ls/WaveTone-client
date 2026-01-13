"use client";
import { motion } from "framer-motion";
import { LuMusic, LuSpeaker, LuGamepad2 } from "react-icons/lu";
import { FaGuitar } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { GiMusicalKeyboard, GiDrumKit, GiPlug } from "react-icons/gi";

const categories = [
    { id: 1, name: "Guitars", icon: <FaGuitar />, count: "120+ Products", color: "bg-blue-500" },
    { id: 2, name: "Keyboards", icon: <GiMusicalKeyboard />, count: "80+ Products", color: "bg-purple-500" },
    { id: 3, name: "Drums", icon: <GiDrumKit />, count: "50+ Products", color: "bg-orange-500" },
    { id: 4, name: "Recording", icon: <FaMicrophone/>, count: "150+ Products", color: "bg-red-500" },
    { id: 5, name: "Audio Gear", icon: <LuSpeaker />, count: "90+ Products", color: "bg-emerald-500" },
    { id: 6, name: "Accessories", icon: <GiPlug />, count: "300+ Products", color: "bg-amber-500" },
];

export default function Categories() {
    return (
        <section className="py-20 px-4 bg-base-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                            Browse by <span className="text-primary">Category</span>
                        </h2>
                        <p className="text-base-content/60 font-medium text-lg">Find the right gear for your next masterpiece.</p>
                    </div>
                    <button className="btn btn-outline btn-primary rounded-full px-8 font-bold hover:scale-105 transition-transform">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="card bg-base-200 border border-base-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden h-full">
                                <div className="card-body items-center text-center p-8">
                                    <div className={`text-5xl mb-4 p-5 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${cat.color} bg-opacity-10 text-primary`}>
                                        {cat.icon}
                                    </div>

                                    <h3 className="card-title text-lg font-bold group-hover:text-primary transition-colors">
                                        {cat.name}
                                    </h3>

                                    <div className="w-8 h-1 bg-primary/20 group-hover:w-12 group-hover:bg-primary transition-all duration-300 my-2 rounded-full"></div>

                                    <p className="text-[10px] opacity-60 uppercase font-black tracking-[0.2em]">
                                        {cat.count}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}