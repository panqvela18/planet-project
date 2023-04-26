import { Link, useLocation } from "react-router-dom";
import source from "../assets/icon-source.svg";
import "./PlanetInfo.css";
import PlanetStat from "./PlanetStat";
import PlanetData from "../Interface";
import { DetailedInfo } from "../Interface";
import TabsDesktop from "./TabsDesktop";
import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PlanetInfo(props: {
  data: PlanetData;
  details: DetailedInfo;
  image: string;
  extraImage?: string;
  color: string;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const parrentPath = useLocation().pathname.split("/")[2];

  useLayoutEffect(() => {
    const locationIndex =
      parrentPath === "surface" ? 3 : parrentPath === "structure" ? 2 : 1;
    setActiveIndex(locationIndex);
  }, [parrentPath]);

  const changeActiveIndex = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="planet-info-container">
        <div className="image-and-description-and-tabs-desktop">
          <motion.div
            animate={{ rotate: 360 }}
            initial={{ rotate: 0 }}
            transition={{ type: "spring", duration: 20, repeat: Infinity }}
            className="images-cont"
          >
            <img
              className="planet-img"
              src={props.image}
              alt={props.data.name}
            />
            {props.extraImage && (
              <img
                className="extra-image"
                src={props.extraImage}
                alt="planet"
              />
            )}
          </motion.div>

          <div className="description-and-tabsDesktop">
            <motion.div
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 2 }}
              className="planet-title-description-source"
            >
              <h2 className="planet-title">{props.data.name}</h2>
              <p className="planet-description">{props.details.content}</p>
              <span className="source-wrapper">
                {" "}
                Source:
                <Link className="wiki-link" to={props.details.source}>
                  Wikipedia
                </Link>
                <img className="source-arrow" src={source} alt="source" />
              </span>
            </motion.div>
            <div className="tabs-desktop-wrapper">
              <TabsDesktop
                color={props.color}
                activeIndex={activeIndex}
                changeActiveIndex={changeActiveIndex}
              />
            </div>
          </div>
        </div>

        <div className="planetstat-cont">
          <PlanetStat name="Rotation Time" value={props.data.rotation} />
          <PlanetStat name="Revolution Time" value={props.data.revolution} />
          <PlanetStat name="Radius" value={props.data.radius} />
          <PlanetStat name="Average Temp" value={props.data.temperature} />
        </div>
      </div>
    </>
  );
}
