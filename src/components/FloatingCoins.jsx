import { motion } from "framer-motion";

import { FaBitcoin } from "react-icons/fa";

import {
    SiEthereum,
    SiSolana,
    SiChainlink,
    SiCardano,
    SiLitecoin
} from "react-icons/si";

const coins = [

    {
        icon: <FaBitcoin />,
        color: "text-yellow-500",
        left: "8%",
        top: "18%"
    },

    {
        icon: <SiEthereum />,
        color: "text-slate-300",
        left: "88%",
        top: "20%"
    },

    {
        icon: <SiSolana />,
        color: "text-purple-400",
        left: "12%",
        top: "78%"
    },

    {
        icon: <SiChainlink />,
        color: "text-blue-500",
        left: "82%",
        top: "72%"
    },

    {
        icon: <SiCardano />,
        color: "text-blue-400",
        left: "50%",
        top: "8%"
    },

    {
        icon: <SiLitecoin />,
        color: "text-gray-300",
        left: "48%",
        top: "88%"
    }

];

export default function FloatingCoins() {

    return (

        <>

            {

                coins.map((coin, index) => (

                    <motion.div

                        key={index}

                        className={`absolute text-7xl ${coin.color} opacity-20`}

                        style={{

                            left: coin.left,

                            top: coin.top

                        }}

                        animate={{

                            y: [0, -40, 0],

                            rotate: [0, 20, -20, 0],

                            scale: [1, 1.15, 1]

                        }}

                        transition={{

                            duration: 8 + index,

                            repeat: Infinity,

                            ease: "easeInOut"

                        }}

                    >

                        {coin.icon}

                    </motion.div>

                ))

            }

        </>

    );

}