import { motion } from "framer-motion";

const tickerData = [

  { coin: "BTC", price: "$106,420", change: "+2.34%" },

  { coin: "ETH", price: "$6,180", change: "+1.82%" },

  { coin: "SOL", price: "$242", change: "+4.66%" },

  { coin: "LINK", price: "$28.41", change: "+0.91%" },

  { coin: "DOGE", price: "$0.42", change: "-1.24%" },

  { coin: "ADA", price: "$1.14", change: "+2.03%" },

  { coin: "AVAX", price: "$62.18", change: "-0.85%" },

  { coin: "SUI", price: "$3.94", change: "+5.41%" }

];

export default function MarketTicker() {

  const data = [...tickerData, ...tickerData];

  return (

    <div className="w-full border-y border-green-900 bg-zinc-950 overflow-hidden">

      <motion.div

        className="flex whitespace-nowrap"

        animate={{ x: ["0%", "-50%"] }}

        transition={{

          duration: 30,

          ease: "linear",

          repeat: Infinity

        }}

      >

        {data.map((item, index) => (

          <div

            key={index}

            className="flex items-center gap-3 px-10 py-3"

          >

            <span className="font-bold text-green-400">

              {item.coin}

            </span>

            <span className="text-white">

              {item.price}

            </span>

            <span

              className={`font-semibold ${
                item.change.startsWith("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}

            >

              {item.change}

            </span>

          </div>

        ))}

      </motion.div>

    </div>

  );

}