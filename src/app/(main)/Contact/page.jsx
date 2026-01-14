"use client";
import { motion } from "framer-motion";
import { LuMail, LuPhone, LuMapPin, LuSend, LuClock } from "react-icons/lu";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-black uppercase tracking-[0.5em] text-xs">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
              Let's <span className="text-primary italic">Connect</span>
            </h1>
            <p className="text-base-content/50 max-w-2xl mx-auto text-lg">
              Whether you're looking for gear advice or need technical support, our crew of musicians is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="card bg-base-200 border border-base-300 p-8 rounded-[2.5rem] hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <LuPhone size={24} />
                </div>
                <h3 className="font-black uppercase tracking-tight">Call Us</h3>
              </div>
              <p className="text-base-content/70 font-medium">+1 (800) WAVE-TONE</p>
              <p className="text-[10px] uppercase font-bold text-primary mt-2 flex items-center gap-1">
                <LuClock size={12} /> Mon-Fri, 9am - 6pm EST
              </p>
            </div>

            <div className="card bg-base-200 border border-base-300 p-8 rounded-[2.5rem] hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                  <LuMail size={24} />
                </div>
                <h3 className="font-black uppercase tracking-tight">Email</h3>
              </div>
              <p className="text-base-content/70 font-medium">support@wavetone.audio</p>
            </div>

            <div className="card bg-base-200 border border-base-300 p-8 rounded-[2.5rem] hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
                  <LuMapPin size={24} />
                </div>
                <h3 className="font-black uppercase tracking-tight">Studio HQ</h3>
              </div>
              <p className="text-base-content/70 font-medium leading-relaxed">
                42 Audio Avenue, Sound District <br /> Nashville, TN 37203
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-base-200 border border-base-300 rounded-[3rem] p-8 md:p-12 shadow-sm"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label"><span className="label-text font-bold uppercase text-[10px] tracking-widest opacity-50">Full Name</span></label>
                <input type="text" placeholder="John Coltrane" className="input input-ghost bg-base-100 focus:bg-base-100 rounded-2xl w-full border-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              
              <div className="form-control w-full">
                <label className="label"><span className="label-text font-bold uppercase text-[10px] tracking-widest opacity-50">Email Address</span></label>
                <input type="email" placeholder="john@example.com" className="input input-ghost bg-base-100 focus:bg-base-100 rounded-2xl w-full border-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>

              <div className="form-control w-full md:col-span-2">
                <label className="label"><span className="label-text font-bold uppercase text-[10px] tracking-widest opacity-50">Subject</span></label>
                <select className="select select-ghost bg-base-100 rounded-2xl w-full border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium">
                  <option disabled selected>Why are you reaching out?</option>
                  <option>Product Inquiry</option>
                  <option>Order Support</option>
                  <option>Artist Partnerships</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-control w-full md:col-span-2">
                <label className="label"><span className="label-text font-bold uppercase text-[10px] tracking-widest opacity-50">Your Message</span></label>
                <textarea className="textarea textarea-ghost bg-base-100 focus:bg-base-100 rounded-3xl w-full h-40 border-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="How can we help?"></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button className="btn btn-primary btn-block rounded-2xl h-16 font-black uppercase tracking-widest group">
                  Send Message
                  <LuSend className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}