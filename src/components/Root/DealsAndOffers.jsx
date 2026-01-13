"use client";
import { motion } from "framer-motion";
import { LuArrowRight, LuZap, LuTimer, LuGift } from "react-icons/lu";

export default function DealsAndOffers() {
  return (
    <section className="py-24 px-6 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Exclusives</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              The <span className="text-primary italic">Drop</span>
            </h2>
          </div>
          <p className="max-w-xs text-base-content/50 font-medium text-sm border-l border-base-300 pl-4">
            Curated price cuts on industry-standard equipment. Resetting every 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-8 md:row-span-2 relative group rounded-[3rem] bg-base-200 border border-base-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 via-transparent to-transparent z-10" />
            
            <img 
              src="https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=1600&auto=format&fit=crop" 
              alt="Guitar Promotion" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />

            <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-end items-start text-base-content">
              <div className="flex items-center gap-2 bg-primary text-primary-content px-4 py-1 rounded-full text-xs font-bold mb-4">
                <LuZap size={14} fill="currentColor" /> DEAL OF THE DAY
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4">
                Classic Series <br /> <span className="text-primary italic">40% OFF</span>
              </h3>
              <button className="btn btn-primary rounded-full px-10 font-bold group">
                BUY NOW 
                <LuArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-4 md:row-span-1 bg-secondary text-secondary-content rounded-[3rem] p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <LuTimer className="absolute -right-4 -top-4 text-white/10" size={180} />
            <div className="relative z-10">
              <h4 className="text-2xl font-black uppercase leading-tight">Bundle <br /> & Level Up</h4>
              <p className="text-sm opacity-80 mt-2">Get free cables & stands with any speaker purchase.</p>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <span className="font-mono text-xl">CODE: WAVE20</span>
              <div className="w-10 h-10 rounded-full border border-secondary-content/30 flex items-center justify-center group-hover:bg-secondary-content group-hover:text-secondary transition-all">
                <LuArrowRight />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-4 md:row-span-1 bg-accent text-accent-content rounded-[3rem] p-8 flex items-center gap-6 group cursor-pointer"
          >
            <div className="w-20 h-20 bg-accent-content/10 rounded-3xl flex items-center justify-center scale-110 group-hover:rotate-12 transition-transform">
              <LuGift size={40} />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase leading-tight">Join The <br /> Wave List</h4>
              <p className="text-xs opacity-70 mt-1 uppercase tracking-widest font-bold">Earn Points</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}