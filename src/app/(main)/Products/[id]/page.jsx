"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { LuBox, LuChevronLeft, LuShoppingCart, LuShieldCheck, LuStar, LuLayers, LuInfo } from 'react-icons/lu';
import Link from 'next/link';
import LoadingScreen from '@/components/Shared/LoadingScreen';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const Page = () => {
    const params = useParams();
    const id = params.id;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://next-js-backhand.vercel.app/products");
                const singleProduct = res.data.find(item => item._id === id);
                setProduct(singleProduct);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <LoadingScreen />;
    if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;

    const { name, image, description, category, price, rating, ratingsData, reviewsCount, specs, stock } = product;
 console.log(product);
    return (
        <div className="min-h-screen bg-base-100 pt-28 pb-20 px-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex justify-between items-center mb-12">
                    <Link href="/products" className="btn btn-ghost btn-sm gap-2 opacity-50 hover:opacity-100 uppercase tracking-[0.2em] text-[10px] font-black">
                        <LuChevronLeft size={16} /> The Vault
                    </Link>
                    <div className="badge badge-outline border-white/10 text-[10px] font-black uppercase tracking-widest px-4 py-3 opacity-40">
                        {category}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-base-200 shadow-2xl group">
                            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                   
                    </div>

                    <div className="lg:col-span-7 space-y-10">
                        <section>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Reference: {id.slice(-8)}</span>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mt-4 mb-6">
                                {name.split(' ')[0]} <br />
                                <span className="text-primary italic">{name.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-base-content/50 text-lg leading-relaxed max-w-xl italic font-medium">
                                "{description}"
                            </p>
                        </section>

                        <div className="flex items-center gap-10 bg-base-200/30 p-8 rounded-[2rem] border border-white/5">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-1">Market Price</p>
                                <span className="text-5xl font-black text-white italic tracking-tighter">${price}</span>
                            </div>
                            <div className="h-14 w-px bg-white/10" />
                            <div className="space-y-2">
                                <div className={`badge ${stock > 0 ? 'badge-primary' : 'badge-error'} gap-2 font-black uppercase tracking-[0.1em] text-[10px] py-4 px-6 rounded-xl`}>
                                    <LuBox size={14} /> {stock > 0 ? `${stock} Units In Vault` : 'Out of Stock'}
                                </div>
                                <p className="text-[9px] font-bold opacity-20 uppercase tracking-[0.2em] ml-1">Ships within 24 hours</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 flex items-center gap-2">
                                <LuInfo size={14}/> Technical Specifications
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.entries(specs || {}).map(([key, value]) => (
                                    <div key={key} className="p-5 rounded-2xl bg-base-200 border border-white/5 hover:border-primary/20 transition-colors group">
                                        <p className="text-[8px] font-black uppercase tracking-widest opacity-30 group-hover:text-primary transition-colors mb-1">{key}</p>
                                        <p className="text-xs font-bold text-white uppercase tracking-tight">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="btn btn-primary h-20 px-12 rounded-[1.5rem] font-black uppercase tracking-widest flex-1 shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all group">
                                <LuShoppingCart className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                                Initialize Order
                            </button>
                            <button className="btn btn-outline h-20 px-10 rounded-[1.5rem] font-black uppercase tracking-widest border-white/10 hover:bg-white/5">
                                <LuLayers className="mr-2" /> Compare
                            </button>
                        </div>

                        <div className="pt-4 flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] opacity-20">
                            <LuShieldCheck className="text-primary" />
                            Authenticated & Calibrated for Professional Use
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;