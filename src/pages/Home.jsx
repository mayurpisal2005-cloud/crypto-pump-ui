import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import MouseGlow from "../components/MouseGlow";
import FloatingCoins from "../components/FloatingCoins";
import AICore from "../components/AICore";

export default function Home() {

    return (

        <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
              <AnimatedBackground />
              <MouseGlow/>
              <FloatingCoins/>
              <AICore/>

            {/* Background Glow */}

            <div className="absolute w-[550px] h-[550px] bg-green-500 rounded-full blur-[180px] opacity-20 -top-40 -left-40 animate-pulse" />

            <div className="absolute w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[180px] opacity-20 bottom-0 right-0 animate-pulse" />

            {/* Hero Card */}

            <div className="relative max-w-6xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-[40px] px-16 py-20 shadow-2xl">

                <motion.div

                    initial={{ opacity: 0, y: -40 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.8 }}

                >

                    <h1 className="text-7xl font-black bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent">

                        AI Crypto Pump Detector

                    </h1>

                </motion.div>

                <motion.p

                    className="text-zinc-300 text-2xl mt-8 leading-relaxed"

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    transition={{ delay: 0.5 }}

                >

                    Machine Learning Powered

                    <br />

                    Real-Time Crypto Market Intelligence

                </motion.p>

                <motion.div

                    className="flex justify-center gap-6 mt-14"

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    transition={{ delay: 0.8 }}

                >

                    <Link

                        to="/predict"

                        className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-500 hover:to-lime-500 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.35)] text-xl font-bold"

                    >

                        Predict Coin

                    </Link>

                    <Link

                        to="/scan"

                        className="px-10 py-5 rounded-2xl border border-green-500/40 hover:border-green-400 hover:bg-green-500/10 hover:scale-105 transition-all duration-300 text-xl font-bold"

                    >

                        Scan Market

                    </Link>

                </motion.div>

            </div>

        </div>

    );

}