"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuShoppingCart, LuEye, LuBox, LuTrendingUp } from "react-icons/lu";

export default function ProductCard({ product }) {

    const {name,stock,price,image, } = product || {}

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative mx-auto w-full max-w-sm bg-base-200 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30"
        >
            <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                <div className="absolute top-4 left-4 z-10">
                    <div className={`badge ${stock > 0 ? 'badge-primary' : 'badge-ghost'} gap-2 font-black uppercase text-[10px] tracking-widest p-3 shadow-lg`}>
                        <LuBox size={12} />
                        {stock > 0 ? `${stock} in stock` : 'Out of Stock'}
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <button className="btn btn-circle btn-primary shadow-xl scale-75 group-hover:scale-100 transition-transform">
                        <LuShoppingCart size={20} />
                    </button>
                </div>
            </div>

            <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-base-content group-hover:text-primary transition-colors">
                            {name}
                        </h3>
                        <p className="text-[10px] font-bold text-base-content/40 uppercase tracking-[0.2em] mt-1">
                            Professional Series
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-primary italic">
                            ${price.toLocaleString()}
                        </span>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-[10px] font-black text-success uppercase tracking-widest opacity-80">
                        <LuTrendingUp size={14} />
                        Top Rated
                    </div>

                    <Link href={`/Products/${product._id}`} className="btn btn-outline btn-sm rounded-xl border-white/10 hover:bg-primary hover:border-primary px-6 font-black uppercase tracking-widest text-[10px] hover:text-white transition-all group/btn">
                        View Details
                        <LuEye className="ml-2 group-hover/btn:scale-110 transition-transform" />
                    </Link>
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-colors" />
        </motion.div>
    );
}