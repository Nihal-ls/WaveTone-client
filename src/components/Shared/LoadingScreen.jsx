"use client";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative flex flex-col items-center gap-8">
        
        {/* The Animated Waveform Loader */}
        <div className="flex items-center justify-center gap-1.5 h-16">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 20, opacity: 0.3 }}
              animate={{ 
                height: [20, 60, 20],
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              className="w-2 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          ))}
        </div>

        {/* Text and Branding */}
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-black text-white italic tracking-tighter uppercase"
          >
            Wave<span className="text-primary">_</span>Tone
          </motion.h2>
          
          <div className="flex flex-col items-center">
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] animate-pulse">
              Initializing Session
            </p>
            {/* Progress Bar Track */}
            <div className="mt-4 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}