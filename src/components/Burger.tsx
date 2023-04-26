import React from "react";
import BurgerElement from "./BurgerElement";
import "./Burger.css";

export default function Burger(props: {
  show: boolean;
  negateShowMenu: Function;
}) {
  return (
    <div className={`burger-list ${props.show ? "show" : ""}`}>
      <BurgerElement
        color="#DEF4FC"
        planetName="MERCURY"
        linktoDirection="mercury/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#DEF4FC"
        planetName="VENUS"
        linktoDirection="venus/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#545BFE"
        planetName="EARTH"
        linktoDirection="earth/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#FF6A45"
        planetName="MARS"
        linktoDirection="mars/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#ECAD7A"
        planetName="JUPITER"
        linktoDirection="jupiter/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#FCCB6B"
        planetName="SATURN"
        linktoDirection="saturn/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#65F0D5"
        planetName="URANUS"
        linktoDirection="uranus/overview"
        negateShowMenu={props.negateShowMenu}
      />
      <BurgerElement
        color="#497EFA"
        planetName="NEPTUNE"
        linktoDirection="neptune/overview"
        negateShowMenu={props.negateShowMenu}
      />
    </div>
  );
}
