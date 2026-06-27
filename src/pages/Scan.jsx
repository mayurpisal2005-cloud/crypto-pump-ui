import { useEffect, useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import AICore from "../components/AICore";
import API from "../services/api";

import ScanCard from "../components/ScanCard";
import MouseGlow from "../components/MouseGlow";
import FloatingCoins from "../components/FloatingCoins";

export default function Scan() {
  const [coins, setCoins] = useState([]);

  const [coinsScanned, setCoinsScanned] = useState(0);

  const [loading, setLoading] = useState(true);

  async function loadScanner() {
    try {
      const response = await API.get("/scan-market");

      console.log(response.data);

      setCoins(response.data.top_pump_candidates);

      setCoinsScanned(response.data.coins_scanned);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadScanner();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white p-10 overflow-hidden">
      <AnimatedBackground />
      <MouseGlow/>
      <FloatingCoins/>
      <AICore/>

      <div>
        <h1 className="text-5xl font-black">
          🤖 AI Market Scanner
        </h1>

        <p className="text-zinc-400 mt-3">
          Live crypto opportunities detected using Machine Learning.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Coins Scanned
          </p>

          <h2 className="text-4xl font-black mt-3 text-blue-400">
            {coinsScanned}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Best Opportunity
          </p>

          <h2 className="text-2xl font-bold mt-3 capitalize">
            {
              coins.length > 0
                ? coins[0].coin.replace(/-/g, " ")
                : "--"
            }
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Highest Probability
          </p>

          <h2 className="text-4xl font-black text-green-400 mt-3">
            {
              coins.length > 0
                ? `${coins[0].pump_probability.toFixed(2)}%`
                : "--"
            }
          </h2>
        </div>
      </div>

      {
        loading ?
        (
          <div className="mt-20 text-center text-2xl">
            Scanning Market...
          </div>
        )
        :
        (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {
              coins.map((coin) => (
                <ScanCard
                  key={coin.coin}
                  coin={coin}
                />
              ))
            }
          </div>
        )
      }

      </div>

    );

}