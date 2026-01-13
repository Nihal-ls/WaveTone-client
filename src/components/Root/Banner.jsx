"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuPlayCircle, LuGuitar, LuHeadphones, LuInfo } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";

export default function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="hero min-h-[70vh] bg-base-100 text-base-content relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-base-300/30 via-transparent to-base-300/30 opacity-70"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div> {/* Subtle grid overlay */}

      <div className="hero-content text-center py-16 lg:py-24 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-primary block drop-shadow-md">WAVE<span className="text-base-content">TONE</span></span>
            Your Sound, Your Journey.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg lg:text-xl mb-8 leading-relaxed opacity-80 max-w-2xl mx-auto">
            Explore a vast collection of instruments, equipment, and accessories.
            Ignite your passion and find your perfect sound at WaveTone.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/shop" className="btn btn-primary btn-lg rounded-full px-10 text-lg">
              <CiShoppingCart className="text-2xl" />  Start Shopping
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg rounded-full px-10 text-lg border-base-content/30 hover:bg-base-content/10">
              <LuInfo className="text-2xl" /> Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/4 left-10 text-primary/50 text-8xl md:text-[10rem] opacity-20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <LuGuitar />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-secondary/50 text-7xl md:text-[9rem] opacity-20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <LuHeadphones />
      </motion.div>
    </div>
  );
}