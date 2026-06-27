import { motion } from "framer-motion";

import AnimatedBackground from "../components/AnimatedBackground";

import {

  BrainCircuit,

  Activity,

  ShieldCheck,

  Database,

  Cpu,

  LineChart,

  ArrowRight,

  Rocket

} from "lucide-react";

export default function About() {

  return (

    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">

        {/* HERO */}

        <motion.div

          initial={{ opacity: 0, y: 35 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7 }}

          className="text-center"

        >

          <h1 className="text-6xl font-black">

            About Crypto Pump AI

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl mx-auto">

            Crypto Pump AI is a Machine Learning platform designed to identify

            potential cryptocurrency pump opportunities using real-time market

            data, technical indicators and predictive analytics.

          </p>

        </motion.div>

        {/* OVERVIEW */}

        <motion.div

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{ delay: 0.2 }}

          className="mt-20 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-10"

        >

          <h2 className="text-3xl font-bold">

            Project Overview

          </h2>

          <p className="text-zinc-400 leading-8 mt-6 text-lg">

            This project combines real-time cryptocurrency market data,

            engineered technical indicators and Machine Learning to estimate

            the probability of a future pump event.

            <br /><br />

            Instead of relying purely on intuition, the model evaluates market

            behaviour through statistical features and produces an AI-powered

            probability score that helps traders identify potential

            opportunities.

          </p>

        </motion.div>

        {/* MISSION CARDS */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl border border-zinc-800 p-8">

            <BrainCircuit className="text-green-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">

              AI Powered

            </h3>

            <p className="text-zinc-400 mt-4">

              Advanced Machine Learning algorithms evaluate market behaviour

              instead of traditional rule-based strategies.

            </p>

          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl border border-zinc-800 p-8">

            <Activity className="text-green-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">

              Real-Time

            </h3>

            <p className="text-zinc-400 mt-4">

              Live cryptocurrency prices are fetched continuously to analyse

              current market momentum.

            </p>

          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl border border-zinc-800 p-8">

            <ShieldCheck className="text-green-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">

              Reliable

            </h3>

            <p className="text-zinc-400 mt-4">

              Predictions are generated using feature engineering and

              supervised learning rather than random speculation.

            </p>

          </div>

        </div>

        {/* HOW IT WORKS */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center">

            How It Works

          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-14">

            <Step icon={<Database />} title="Market Data" />

            <ArrowRight className="text-green-500" />

            <Step icon={<LineChart />} title="Feature Engineering" />

            <ArrowRight className="text-green-500" />

            <Step icon={<Cpu />} title="XGBoost Model" />

            <ArrowRight className="text-green-500" />

            <Step icon={<Rocket />} title="Pump Prediction" />

          </div>

        </div>

      </div>

    </div>

  );

}

function Step({ icon, title }) {

  return (

    <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 w-52 text-center">

      <div className="flex justify-center text-green-400">

        {icon}

      </div>

      <h3 className="font-bold mt-4">

        {title}

      </h3>

    </div>

  );

}