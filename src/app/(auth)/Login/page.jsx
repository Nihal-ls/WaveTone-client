"use client";
import { useAuth } from "@/Contexts/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LuMail, LuLock, LuArrowRight, LuGithub, LuChrome, LuShieldCheck } from "react-icons/lu";

export default function LoginPage() {

  const { login } = useAuth()
  const navigate = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    login(email, password)
      .then(res => {
        console.log(res.user)
        navigate.push('/')
        toast.success("🎉 Login Successful!");
      })
  }


  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598461141410-0975e828a27d?q=80&w=2500&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-50 scale-105"
          alt="Music Studio Background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-primary/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white/[0.01] backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl m-4"
      >

        <div className="hidden lg:flex flex-col justify-between p-16 bg-gradient-to-b from-primary/10 to-transparent border-r border-white/5">
          <div>
            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">
              Wave<span className="text-primary text-glow">_</span>Tone
            </h2>
            <div className="h-1 w-10 bg-primary rounded-full" />
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Access <br /> Your <span className="text-primary italic">Studio.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              The industry standard for professional gear. Log in to manage your collection and exclusive presets.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest">
              <LuShieldCheck className="text-primary" size={16} />
              Secure Session
            </div>
            <div className="h-px w-12 bg-white/10" />
            <div className="text-white/30 text-[10px] font-black uppercase tracking-widest">
              v2.0.26
            </div>
          </div>
        </div>

        <div className="bg-base-100 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-base-content uppercase tracking-tight">Sign In</h2>
            <p className="text-base-content/50 text-sm mt-2 font-medium">Please enter your professional credentials.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-4">
              <div className="form-control">
                <label className="label py-1"><span className="label-text text-[10px] font-black uppercase tracking-widest opacity-50">Identity</span></label>
                <div className="relative group">
                  <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                  <input
                    type="email"
                    name="email"
                    placeholder="artist@wavetone.com"
                    className="input input-bordered w-full pl-12 h-14 bg-base-200 border-none focus:ring-2 focus:ring-primary/30 focus:outline-none rounded-xl font-medium transition-all"
                  />
                </div>
              </div>

              <div className="form-control">
                <div className="flex justify-between items-end mb-1">
                  <label className="label py-0"><span className="label-text text-[10px] font-black uppercase tracking-widest opacity-50">Security Key</span></label>
                  <a href="#" className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">Forgot?</a>
                </div>
                <div className="relative group">
                  <LuLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full pl-12 h-14 bg-base-200 border-none focus:ring-2 focus:ring-primary/30 focus:outline-none rounded-xl font-medium transition-all"
                  />
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-block h-14 rounded-xl text-white font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:translate-y-[-2px] active:translate-y-[0px] transition-all group mt-4">
              Initialize Session
              <LuArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="divider text-[10px] font-black uppercase tracking-[0.3em] opacity-20 py-4">External Verification</div>

            <div className="grid grid-cols-2 gap-4">
              <button className="btn btn-outline border-base-300 rounded-xl h-14 hover:bg-base-200 transition-all font-bold group">
                <LuChrome className="mr-2 group-hover:text-primary transition-colors" /> Google
              </button>
              <button className="btn btn-outline border-base-300 rounded-xl h-14 hover:bg-base-200 transition-all font-bold group">
                <LuGithub className="mr-2 group-hover:text-primary transition-colors" /> Github
              </button>
            </div>
          </form>

          <p className="mt-12 text-center text-sm font-medium text-base-content/40">
            New to the studio? <a href="/Register" className="text-primary font-bold hover:text-primary-focus transition-colors">Apply for Access</a>
          </p>
        </div>
      </motion.div>

      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}