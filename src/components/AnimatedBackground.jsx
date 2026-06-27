import { motion } from "framer-motion";

import {

  FaBitcoin,

  FaEthereum

} from "react-icons/fa";

import {

  SiSolana,

  SiChainlink

} from "react-icons/si";

const symbols = [

  {

    icon: <FaBitcoin />,

    left: "8%",

    top: "18%",

    color: "text-yellow-500"

  },

  {

    icon: <FaEthereum />,

    left: "82%",

    top: "20%",

    color: "text-zinc-400"

  },

  {

    icon: <SiSolana />,

    left: "15%",

    top: "75%",

    color: "text-purple-400"

  },

  {

    icon: <SiChainlink />,

    left: "90%",

    top: "72%",

    color: "text-blue-400"

  }

];

const candles = Array.from({ length: 45 });

const particles = Array.from({ length: 80 });

export default function AnimatedBackground() {

  return (

    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* GRID */}

      <div

        className="absolute inset-0 opacity-[0.08]"

        style={{

          backgroundImage: `

          linear-gradient(rgba(34,197,94,0.18) 1px, transparent 1px),

          linear-gradient(90deg, rgba(34,197,94,0.18) 1px, transparent 1px)

          `,

          backgroundSize: "55px 55px"

        }}

      />

      {/* TREND LINES */}

      <svg

        className="absolute inset-0 w-full h-full opacity-15"

      >

        <motion.path

          d="M0 500 C250 430 450 520 700 410 S1200 330 1600 420"

          stroke="#22c55e"

          strokeWidth="2"

          fill="transparent"

          animate={{

            opacity: [0.15,0.35,0.15]

          }}

          transition={{

            duration:6,

            repeat:Infinity

          }}

        />

        <motion.path

          d="M0 300 C250 340 500 220 760 260 S1200 460 1600 320"

          stroke="#ef4444"

          strokeWidth="1.5"

          fill="transparent"

          animate={{

            opacity:[0.08,0.22,0.08]

          }}

          transition={{

            duration:7,

            repeat:Infinity

          }}

        />

      </svg>

      {/* CANDLESTICKS */}

      <div className="absolute inset-0 flex items-end justify-between px-8 opacity-[0.10]">

        {

          candles.map((_,i)=>(

            <motion.div

              key={i}

              className={`w-[5px] rounded-full ${

                i%3===0

                ?

                "bg-green-500"

                :

                "bg-red-500"

              }`}

              style={{

                height:`${40+Math.random()*180}px`

              }}

              animate={{

                scaleY:[1,1.15,1]

              }}

              transition={{

                duration:3+Math.random()*3,

                repeat:Infinity

              }}

            />

          ))

        }

      </div>

      {/* FLOATING COINS */}

      {

        symbols.map((coin,index)=>(

          <motion.div

            key={index}

            className={`absolute text-7xl opacity-[0.07] ${coin.color}`}

            style={{

              left:coin.left,

              top:coin.top

            }}

            animate={{

              y:[0,-25,0],

              rotate:[0,10,-10,0]

            }}

            transition={{

              duration:10+index,

              repeat:Infinity,

              ease:"easeInOut"

            }}

          >

            {coin.icon}

          </motion.div>

        ))

      }

      {/* MARKET PARTICLES */}

      {

        particles.map((_,i)=>(

          <motion.div

            key={i}

            className={`absolute rounded-full ${

              i%2===0

              ?

              "bg-green-500"

              :

              "bg-red-500"

            } opacity-20`}

            style={{

              width:2,

              height:2,

              left:`${Math.random()*100}%`,

              top:`${Math.random()*100}%`

            }}

            animate={{

              y:[0,-80],

              opacity:[0,0.25,0]

            }}

            transition={{

              duration:4+Math.random()*6,

              repeat:Infinity,

              delay:Math.random()*6

            }}

          />

        ))

      }

      {/* WORLD MAP EFFECT */}

      <div

        className="absolute inset-0 opacity-[0.03]"

        style={{

          backgroundImage:

          "radial-gradient(circle at 20% 40%, white 1px, transparent 2px), radial-gradient(circle at 70% 55%, white 1px, transparent 2px), radial-gradient(circle at 55% 25%, white 1px, transparent 2px)",

          backgroundSize:"280px 180px"

        }}

      />

    </div>

  );

}