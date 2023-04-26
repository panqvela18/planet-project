import "./PlanetPage.css";
import LineMaxWidth from "./LineMaxWidth";
import { useState, useLayoutEffect } from "react";
import Tabs from "./Tabs";
import PlanetData from "../Interface";
import { Outlet, useLocation } from "react-router-dom";

export default function PlanetPage(props: { color: string; data: PlanetData }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const parrentPath = useLocation().pathname.split("/")[2];

  useLayoutEffect(() => {
    const locationIndex =
      parrentPath === "surface" ? 3 : parrentPath === "structure" ? 2 : 1;
    setActiveIndex(locationIndex);
  }, []);

  const changeActiveIndex = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="planet-page-container">
        <div className="display-none">
          <Tabs
            color={props.color}
            activeIndex={activeIndex}
            changeActiveIndex={changeActiveIndex}
          />
          <LineMaxWidth />
        </div>

        <Outlet />
      </div>
    </>
  );
}
