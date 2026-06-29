import { useState } from "react";
import AIMetrics from "../components/AIMetrics";
import AICore from "../components/AICore";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

import { Search, Cpu } from "lucide-react";

import API from "../services/api";

import PredictionCard from "../components/PredictionCard";
import MouseGlow from "../components/MouseGlow";
import FloatingCoins from "../components/FloatingCoins";

export default function Predict() {

    const [coin, setCoin] = useState("");

    const [loading, setLoading] = useState(false);

    const [prediction, setPrediction] = useState(null);

    async function predictCoin() {
        console.log("BUTTON CLICKED");

    try {

        setLoading(true);

        const response = await API.post("/predict", {

            coin: coin

        });

        setPrediction(response.data);

    }

    catch (error) {

        console.log(error);

        alert("Prediction Failed");

    }

    finally {

        setLoading(false);

    }

}

    return (

        <div className="max-w-6xl mx-auto py-20 px-8">
              {/* <AnimatedBackground /> */}
{/* <MouseGlow /> */}
{/* <FloatingCoins /> */}
{/* <AICore /> */}

            {/* HERO */}

            <motion.div

                initial={{ opacity: 0, y: -30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: .8 }}

                className="text-center"

            >

                <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-full">

                    <Cpu className="text-emerald-400" size={22} />

                    <span className="text-emerald-400 font-semibold">

                        AI Prediction Engine

                    </span>

                </div>

                <h1 className="text-6xl font-black mt-8">

                    Predict Single Coin

                </h1>

                <p className="text-zinc-400 text-xl mt-5">

                    Machine Learning powered real-time crypto pump prediction

                </p>

            </motion.div>

            {/* SEARCH */}

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: .3 }}

                className="mt-14"

            >

                <div className="relative">

                    <Search

                        size={24}

                        className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-400"

                    />

                    <input

                        value={coin}

                        onChange={(e)=>setCoin(e.target.value)}

                        placeholder="Search cryptocurrency (bitcoin, ethereum...)"

                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none rounded-2xl py-6 pl-16 pr-6 text-xl transition-all"

                    />

                </div>

            </motion.div>

            {/* BUTTON */}

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: .5 }}

                className="mt-8"

            >

                <button

                    onClick={predictCoin}

                    disabled={loading}

                    className="px-12 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-105 hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-300 font-bold text-xl"

                >

                    {

                        loading

                        ?

                        "Analyzing..."

                        :

                        "Analyze Coin"

                    }

                </button>

            </motion.div>

            {/* AI STATUS */}

            <AIMetrics />

            {/* RESULT */}

            <motion.div
    layout
    transition={{ duration: 0.5 }}
>

    {loading && (

        <div className="bg-red-600 text-white text-3xl p-10 rounded-2xl mt-10">

            LOADING IS TRUE

        </div>

    )}

    {!loading && prediction && (

        <PredictionCard prediction={prediction} />

    )}

</motion.div>

        </div>

    );

}