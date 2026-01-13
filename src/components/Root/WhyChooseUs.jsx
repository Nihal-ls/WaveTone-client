"use client";
import { motion } from "framer-motion";
import {  LuShieldCheck, LuTruck, LuUsers } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa6";

const features = [
  {
    id: 1,
    title: "High-Quality Audio",
    description: "Curated selection of premium instruments and studio-grade gear for the best sound.",
    icon: <FaMicrophone className="text-primary" />,
    borderColor: "border-primary/20",
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Fully encrypted transaction process protecting your financial data at every step.",
    icon: <LuShieldCheck className="text-secondary" />,
    borderColor: "border-secondary/20",
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "Expedited shipping with specialized handling to ensure your gear arrives safe.",
    icon: <LuTruck className="text-accent" />,
    borderColor: "border-accent/20",
  },
  {
    id: 4,
    title: "Trusted by Creators",
    description: "The preferred choice for thousands of professional musicians and content creators.",
    icon: <LuUsers className="text-info" />,
    borderColor: "border-info/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-base-200/30 relative overflow-hidden">
      {/* Decorative Soundwave Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-sm"
          >
            The WaveTone Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-4"
          >
            Why Choose <span className="italic">WaveTone?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 bg-base-100 rounded-[2rem] border ${feature.borderColor} hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="w-14 h-14 bg-base-200 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base-content/60 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="mt-6 w-10 h-1 bg-base-300 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-base-300 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {/* You can replace these with real logo SVGs later */}
          <span className="text-xl font-black italic tracking-tighter">FENDER</span>
          <span className="text-xl font-black italic tracking-tighter">ROLAND</span>
          <span className="text-xl font-black italic tracking-tighter">YAMAHA</span>
          <span className="text-xl font-black italic tracking-tighter">SHURE</span>
          <span className="text-xl font-black italic tracking-tighter">MARSHALL</span>
        </motion.div>
      </div>
    </section>
  );
}