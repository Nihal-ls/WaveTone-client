"use client"
import ProductCard from '@/components/Shared/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { LuSearch, LuSlidersHorizontal, LuMusic2,  LuKeyboard } from "react-icons/lu";
import LoadingScreen from '@/components/Shared/LoadingScreen';
const Page = () => {

    const [Products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const data = axios("http://localhost:5000/products")
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
    }, [])
    if (loading) return <LoadingScreen/>
    console.log(Products);
    return (
        <div>
            <section className="pt-20 pb-10 px-6 bg-base-100">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* 1. Dynamic Heading */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-2"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-[2px] w-8 bg-primary"></span>
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Vault</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                Explore <br /> <span className="text-primary italic">The Gear</span>
                            </h1>
                        </motion.div>

                        <p className="max-w-[280px] text-base-content/40 text-xs font-bold uppercase tracking-widest leading-loose border-l border-white/10 pl-6">
                            Pro-grade instruments curated for the next generation of sound architects.
                        </p>
                    </div>

                    {/* 2. Search & Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative flex flex-col md:flex-row gap-4 items-center p-2 bg-base-200 border border-white/5 rounded-[2rem] shadow-2xl"
                    >
                        {/* Search Input Group */}
                        <div className="relative flex-1 w-full group">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/50 group-focus-within:text-primary transition-colors">
                                <LuSearch size={22} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by instrument, brand, or tone..."
                                className="w-full bg-transparent h-16 pl-16 pr-6 rounded-2xl focus:outline-none font-medium text-lg placeholder:text-base-content/20"
                            />
                        </div>

                        {/* Vertical Divider (Hidden on Mobile) */}
                        <div className="hidden md:block w-px h-10 bg-white/10" />

                        {/* Category Quick-Links (Visual only) */}
                        <div className="hidden lg:flex items-center gap-2 px-4">
                            <button className="btn btn-ghost btn-sm rounded-xl gap-2 text-[10px] font-black uppercase opacity-40 hover:opacity-100">
                                <LuMusic2 size={14} /> Guitars
                            </button>
                            <button className="btn btn-ghost btn-sm rounded-xl gap-2 text-[10px] font-black uppercase opacity-40 hover:opacity-100">
                                {/* <LuMic2 size={14} /> */}
                                 Studio
                            </button>
                            <button className="btn btn-ghost btn-sm rounded-xl gap-2 text-[10px] font-black uppercase opacity-40 hover:opacity-100">
                                <LuKeyboard size={14} /> Keys
                            </button>
                        </div>

                        {/* Filter Button */}
                        <button className="btn btn-primary h-16 px-8 rounded-[1.5rem] gap-3 font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto">
                            <LuSlidersHorizontal size={20} />
                            Filters
                            <div className="badge badge-sm bg-white/20 border-none text-white font-bold ml-1">3</div>
                        </button>
                    </motion.div>
                </div>
            </section>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {Products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)}
            </div>

        </div>
    );
};

export default Page;