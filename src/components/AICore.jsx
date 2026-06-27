import { motion } from "framer-motion";

export default function AICore() {

    return (

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            {/* Outer Ring */}

            <motion.div

                className="absolute w-[380px] h-[380px] rounded-full border border-emerald-400/30"

                animate={{ rotate: 360 }}

                transition={{

                    duration: 20,

                    repeat: Infinity,

                    ease: "linear"

                }}

            />

            {/* Middle Ring */}

            <motion.div

                className="absolute w-[280px] h-[280px] rounded-full border border-emerald-500/40"

                animate={{ rotate: -360 }}

                transition={{

                    duration: 14,

                    repeat: Infinity,

                    ease: "linear"

                }}

            />

            {/* Inner Ring */}

            <motion.div

                className="absolute w-[180px] h-[180px] rounded-full border border-green-300/50"

                animate={{ rotate: 360 }}

                transition={{

                    duration: 10,

                    repeat: Infinity,

                    ease: "linear"

                }}

            />

            {/* AI Core */}

            <motion.div

                className="w-28 h-28 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_80px_rgba(34,197,94,.9)]"

                animate={{

                    scale: [1, 1.15, 1],

                    opacity: [0.9, 1, 0.9]

                }}

                transition={{

                    duration: 2,

                    repeat: Infinity

                }}

            />

        </div>

    );

}