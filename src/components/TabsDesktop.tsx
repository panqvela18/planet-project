import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./TabsDesktop.css";

export default function TabsDesktop(props: {
  color: string;
  activeIndex: number;
  changeActiveIndex: Function;
}) {
  return (
    <div className="tabs-desktop-container">
      <Link
        className={`tab-desktop ${
          props.activeIndex === 1 ? "" : "not-selected"
        }`}
        to={"../overview"}
        style={{
          backgroundColor:
            props.activeIndex === 1 ? props.color : "transparent",
        }}
        onClick={() => props.changeActiveIndex(1)}
      >
        <span className="tabs-number">01</span>
        OVERVIEW
      </Link>
      <Link
        className={`tab-desktop ${
          props.activeIndex === 2 ? "" : "not-selected"
        }`}
        to={"../structure"}
        style={{
          backgroundColor:
            props.activeIndex === 2 ? props.color : "transparent",
        }}
        onClick={() => props.changeActiveIndex(2)}
      >
        <span className="tabs-number">02</span>
        STRUCTURE
      </Link>
      <Link
        className={`tab-desktop ${
          props.activeIndex === 3 ? "" : "not-selected"
        }`}
        to={"../surface"}
        style={{
          backgroundColor:
            props.activeIndex === 3 ? props.color : "transparent",
        }}
        onClick={() => props.changeActiveIndex(3)}
      >
        <span className="tabs-number">03</span>
        SURFACE
      </Link>
    </div>
  );
}
