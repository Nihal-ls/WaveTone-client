"use client";
import { motion } from "framer-motion";
import { LuPlus, LuShoppingCart, LuStar, LuArrowRight } from "react-icons/lu";

const products = [
    { id: 1, name: "Fender Player Stratocaster", category: "Guitars", price: 849, rating: 4.8, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800" },
    { id: 2, name: "Gibson Les Paul Standard", category: "Guitars", price: 2799, rating: 4.9, image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=800" },
    { id: 6, name: "Yamaha P-125 Digital Piano", category: "Keyboards", price: 699, rating: 4.7, image: "https://m.media-amazon.com/images/I/81TY+v42rcL._AC_UF350,350_QL80_.jpg" },
    { id: 11, name: "Roland TD-17KVX V-Drums", category: "Drums", price: 1899, rating: 4.9, image: "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?auto=format&fit=crop&w=800" },
];

export default function FeaturedProducts() {
    return (
        <section className="py-20 px-4 bg-base-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 uppercase">
                            Featured <span className="text-primary">Instruments</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
                        <p className="text-base-content/60 font-medium">Professional grade gear, handpicked by WaveTone experts.</p>
                    </div>
                    <button className="btn btn-primary btn-sm rounded-full px-6">View All Gear</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="card bg-base-200 shadow-sm border border-base-300 hover:shadow-xl hover:border-primary/40 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                                
                                <figure className="px-6 pt-6 relative overflow-hidden">
                                    <div className="bg-base-100 rounded-2xl w-full aspect-square flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
                                        <motion.img
                                            whileHover={{ scale: 1.1, rotate: 2 }}
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        
                                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button className="btn btn-primary btn-circle btn-sm shadow-xl">
                                                <LuArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-8 right-8 badge badge-secondary gap-1 font-bold py-3 shadow-md">
                                        <LuStar className="fill-current" size={12} /> {product.rating}
                                    </div>
                                </figure>

                                <div className="card-body p-6">
                                    <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">
                                        {product.category}
                                    </span>
                                    <h3 className="card-title text-base-content font-bold leading-tight line-clamp-2 min-h-[3rem]">
                                        {product.name}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] opacity-50 uppercase font-bold tracking-tighter">Price</span>
                                            <span className="text-2xl font-black text-base-content tracking-tighter">
                                                ${product.price}
                                            </span>
                                        </div>
                                        
                                        <button className="btn btn-primary btn-circle group-hover:scale-110 transition-transform shadow-lg">
                                            <LuPlus size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}