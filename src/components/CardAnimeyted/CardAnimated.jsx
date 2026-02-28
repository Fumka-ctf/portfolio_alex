import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import style from "./CardAnimated.module.css";

const CardAnimated = ({
                      image,
                      tiltIntensity = 1
                  }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [`${tiltIntensity}deg`, `-${tiltIntensity}deg`]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [`-${tiltIntensity}deg`, `${tiltIntensity}deg`]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseXFromCenter = e.clientX - rect.left - rect.width / 2;
        const mouseYFromCenter = e.clientY - rect.top - rect.height / 2;
        x.set(mouseXFromCenter / rect.width);
        y.set(mouseYFromCenter / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={style.GifBlock}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <motion.img
                 src={image}
                 className={style.Gif}
                 style={{ transform: "translateZ(30px)",  width: '80%', margin: "5% auto" }}
                 // whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

export default CardAnimated;