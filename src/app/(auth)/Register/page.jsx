"use client";
import { useAuth } from "@/Contexts/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LuUser, LuMail, LuLock, LuArrowRight, LuGithub, LuChrome } from "react-icons/lu";

export default function RegisterPage() {

    const { setUser, signup, googleSignUp } = useAuth()

    const navigate = useRouter()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ name, email, password })
        signup(email, password)
            .then(res => {
                setUser(res.user)
                navigate.push('/')
                toast.success("🎉 Registration Successful!");

            })
    }
    const HandleGoogleSignUp = () => {
        googleSignUp()
            .then(res => {
                console.log(res.user)
                navigate.push('/')
                toast.success("🎉 Registration Successful!");

            })
    }
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral">

            {/* 1. Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2500&auto=format&fit=crop"
                    className="w-full h-full object-cover scale-105"
                    alt="Concert Stage Background"
                />
                {/* Dark Overlay with Gradient for Readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] bg-gradient-to-br from-black/80 via-transparent to-black/80" />
            </div>

            {/* 2. Glassmorphic Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl m-4"
            >

                {/* Left Side: Branding/Content Area */}
                <div className="hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-primary/20 to-transparent">
                    <div>
                        <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">
                            Wave<span className="text-primary">_</span>Tone
                        </h2>
                        <div className="h-1 w-12 bg-primary rounded-full" />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl font-black text-white leading-none uppercase tracking-tighter">
                            Join the <br /> <span className="text-primary">Sonic</span> Revolution.
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                            Create your account and gain access to high-fidelity gear, artist presets, and the WaveTone community.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                        <span>Verified Gear</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span>Secure Checkout</span>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="bg-base-100/90 lg:bg-base-100 p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-black text-base-content uppercase tracking-tight">Create Account</h2>
                        <p className="text-base-content/50 text-sm mt-2 font-medium">Step into the studio. It only takes a minute.</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleFormSubmit}>
                        {/* Input Group */}
                        <div className="space-y-4">
                            <div className="relative group">
                                <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="input input-bordered w-full pl-12 h-14 bg-base-200/50 border-base-300 focus:border-primary focus:outline-none rounded-2xl font-medium transition-all"
                                />
                            </div>

                            <div className="relative group">
                                <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full pl-12 h-14 bg-base-200/50 border-base-300 focus:border-primary focus:outline-none rounded-2xl font-medium transition-all"
                                />
                            </div>

                            <div className="relative group">
                                <LuLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full pl-12 h-14 bg-base-200/50 border-base-300 focus:border-primary focus:outline-none rounded-2xl font-medium transition-all"
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary btn-block h-14 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all group">
                            Get Started
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="divider text-[10px] font-black uppercase tracking-[0.2em] opacity-30 py-4">Direct Connection</div>

                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={HandleGoogleSignUp} className="btn btn-outline border-base-300 rounded-2xl h-14 hover:bg-base-200 transition-all font-bold group">
                                <LuChrome className="mr-2 group-hover:text-primary transition-colors" /> Google
                            </button>
                            <button className="btn btn-outline border-base-300 rounded-2xl h-14 hover:bg-base-200 transition-all font-bold group">
                                <LuGithub className="mr-2 group-hover:text-primary transition-colors" /> Github
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm font-medium text-base-content/50">
                        Already a member? <a href="/Login" className="text-primary font-bold hover:underline underline-offset-4">Sign In</a>
                    </p>
                </div>
            </motion.div>

            {/* 3. Floating Background Elements (Optional for extra "Perfect" look) */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
} 