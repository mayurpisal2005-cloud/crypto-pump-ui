import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(mouseX, {
        stiffness: 80,
        damping: 20
    });

    const y = useSpring(mouseY, {
        stiffness: 80,
        damping: 20
    });

    function handleMove(e) {

        mouseX.set(e.clientX - 250);
        mouseY.set(e.clientY - 250);

    }

    return (

        <>

            <div
                onMouseMove={handleMove}
                className="fixed inset-0 z-0"
            />

            <motion.div

                style={{
                    x,
                    y
                }}

                className="
                fixed
                w-[500px]
                h-[500px]
                rounded-full
                pointer-events-none
                blur-[170px]
                bg-emerald-500/20
                z-0
                "

            />

        </>

    );

}