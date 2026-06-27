import { FaBitcoin } from "react-icons/fa";

import {

  SiEthereum,

  SiSolana,

  SiChainlink,

  SiCardano,

  SiLitecoin,

  SiSui,

  SiOptimism

} from "react-icons/si";

const coinIcons = {

  bitcoin: <FaBitcoin className="text-orange-500 text-5xl" />,

  ethereum: <SiEthereum className="text-slate-300 text-5xl" />,

  solana: <SiSolana className="text-purple-400 text-5xl" />,

  chainlink: <SiChainlink className="text-blue-400 text-5xl" />,

  cardano: <SiCardano className="text-blue-500 text-5xl" />,

  litecoin: <SiLitecoin className="text-gray-300 text-5xl" />,

  sui: <SiSui className="text-cyan-400 text-5xl" />,

  optimism: <SiOptimism className="text-red-500 text-5xl" />

};

export default function ScanCard({ coin }) {

  let color = "text-red-400";

  if (coin.pump_probability >= 70) {

    color = "text-green-400";

  } else if (coin.pump_probability >= 40) {

    color = "text-yellow-400";

  }

  return (

    <div
className="
rounded-[30px]
p-6
bg-white/5
backdrop-blur-xl
border
border-emerald-500/20
hover:border-emerald-400
hover:shadow-[0_0_45px_rgba(16,185,129,0.18)]
transition-all
duration-500
hover:scale-[1.03]
"
>

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          {coinIcons[coin.coin] || (

            <div className="text-5xl">

              🪙

            </div>

          )}

          <div>

            <h2 className="text-2xl font-bold capitalize">

              {coin.coin.replace(/-/g, " ")}

            </h2>

          </div>

        </div>

        <span className={`${color} font-bold text-lg`}>

          {coin.confidence}

        </span>

      </div>

      <div className="mt-8">

        <p className="text-zinc-400">

          Pump Probability

        </p>

        <h1 className={`text-5xl font-black mt-2 ${color}`}>

          {coin.pump_probability.toFixed(2)}%

        </h1>

      </div>

    </div>

  );

}