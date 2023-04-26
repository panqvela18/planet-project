import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Test() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((angle) => angle + 5); // increment the angle by 5 degrees every 50 milliseconds
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const x = 100 + 80 * Math.cos(angle * (Math.PI / 180)); // calculate x position using cosine
  const y = 100 + 80 * Math.sin(angle * (Math.PI / 180)); // calculate y position using sine

  return (
    <motion.div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "blue",
        position: "absolute",
        left: x,
        top: y,
      }}
    />
  );
}
