import React from "react";
import "./Burger.css";
import arrow from "../assets/icon-chevron.svg";
import LineMaxWidth from "./LineMaxWidth";
import { Link } from "react-router-dom";

export default function BurgerElement(props: {
  planetName: string;
  color: string;
  linktoDirection: string;
  negateShowMenu: Function;
}) {
  return (
    <div style={{ padding: "15px 20px" }}>
      <Link
        onClick={() => props.negateShowMenu()}
        to={props.linktoDirection}
        className="burger-element-container"
      >
        <div className="burger-element-wrapper">
          <div
            className="planet-circle"
            style={{ backgroundColor: props.color }}
          ></div>
          <p className="planet-element-name">{props.planetName}</p>
        </div>
        <img src={arrow} alt="arrow" />
      </Link>
      <LineMaxWidth />
    </div>
  );
}
