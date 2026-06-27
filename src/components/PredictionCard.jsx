import { FaBitcoin } from "react-icons/fa";

import { SiEthereum, SiSolana, SiChainlink } from "react-icons/si";

import ProbabilityGauge from "./ProbabilityGauge";

const coinIcons = {

  bitcoin: <FaBitcoin className="text-orange-500 text-5xl" />,

  ethereum: <SiEthereum className="text-slate-300 text-5xl" />,

  solana: <SiSolana className="text-purple-400 text-5xl" />,

  chainlink: <SiChainlink className="text-blue-400 text-5xl" />

};

export default function PredictionCard({ prediction }) {

  if (!prediction) return null;

  const probability = prediction.pump_probability;

  let color = "text-red-400";

  let badge = "LOW";

  if (probability >= 70) {

    color = "text-green-400";

    badge = "HIGH";

  } else if (probability >= 40) {

    color = "text-yellow-400";

    badge = "MEDIUM";

  }

  return (

    <div
className="
mt-12
rounded-[36px]
p-10
backdrop-blur-2xl
bg-white/5
border
border-emerald-500/20
shadow-[0_0_40px_rgba(16,185,129,0.08)]
hover:border-emerald-400
hover:shadow-[0_0_70px_rgba(16,185,129,0.25)]
transition-all
duration-500
"
>

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-5">

          {coinIcons[prediction.coin] || (

            <div className="text-5xl">🪙</div>

          )}

          <div>

            <h2 className="text-4xl font-bold capitalize">

              {prediction.coin.replace(/-/g, " ")}

            </h2>

            <p className="text-zinc-400 mt-1">

              AI Pump Prediction

            </p>

          </div>

        </div>

        <div

          className={`px-5 py-2 rounded-full font-bold ${color} bg-zinc-800 border border-green-500/20`}

        >

          {badge}

        </div>

      </div>

      {/* Gauge */}

      <div className="mt-12 flex justify-center">

        <ProbabilityGauge probability={probability} />

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mt-12">

        <div className="bg-zinc-800 rounded-2xl p-6 border border-green-500/10">

          <p className="text-zinc-400">

            Confidence

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {prediction.confidence}

          </h2>

        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 border border-green-500/10">

          <p className="text-zinc-400">

            Recommendation

          </p>

          <h2 className={`text-xl font-bold mt-2 ${color}`}>

            {

              probability >= 70

                ? "Strong Buy"

                : probability >= 40

                ? "Watch"

                : "Avoid"

            }

          </h2>

        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 border border-green-500/10">

          <p className="text-zinc-400">

            Risk

          </p>

          <h2 className="text-2xl font-bold mt-2">

            {

              probability >= 70

                ? "Low"

                : probability >= 40

                ? "Medium"

                : "High"

            }

          </h2>

        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 border border-green-500/10">

          <p className="text-zinc-400">

            AI Verdict

          </p>

          <h2 className={`text-xl font-bold mt-2 ${color}`}>

            {

              probability >= 70

                ? "Bullish"

                : probability >= 40

                ? "Neutral"

                : "Bearish"

            }

          </h2>

        </div>

      </div>

    </div>

  );

}