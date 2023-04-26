import Astronaut from "../assets/notfound.png";
import "./NotFound.css";
import { motion } from "framer-motion";
import Test from "./Test";

function NotFount() {
  return (
    <div className="not-found-page-container">
      <motion.div
        animate={{
          x: [-10, -150, -150, -50, -50],
          y: [-50, -50, -150, -150, -50],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
        initial={{ x: 0, y: 0 }}
        className="astronaut-wrapper"
      >
        <img className="astronaut" src={Astronaut} alt="astronaut" />
      </motion.div>
      <div className="lost-in-space-text">
        <p>YOU GOT LOST IN SPACE.</p>
        <span className="error-message">(page not found)</span>
      </div>
      <Test />
    </div>
  );
}

export default NotFount;
