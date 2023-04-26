import React from "react";
import "./PlanetStat.css";
import { motion } from "framer-motion";

export default function PlanetStat(props: { name: string; value: string }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "spring", duration: 10 }}
      className="planet-stat-container"
    >
      <h4 className="planet-stat-name">{props.name}</h4>
      <span className="planet-stat-number">{props.value}</span>
    </motion.div>
  );
}
