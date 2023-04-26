import { useState, useEffect } from "react";
import "./Header.css";
import burger from "../assets/icon-hamburger.svg";
import LineMaxWidth from "./LineMaxWidth";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import Burger from "./Burger";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", show);
  }, [show]);

  const negateShowMenu = (): void => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <header className="header-container">
        <h1 className="header-logo">THE PLANETS</h1>
        <nav>
          <ul className="nav-ul">
            <Link className="nav-link mercury" to={"mercury/overview"}>
              MERCURY
            </Link>
            <Link className="nav-link venus" to={"venus/overview"}>
              VENUS
            </Link>
            <Link className="nav-link earth" to={"earth/overview"}>
              EARTH
            </Link>
            <Link className="nav-link mars" to={"mars/overview"}>
              MARS
            </Link>
            <Link className="nav-link jupiter" to={"jupiter/overview"}>
              JUPITER
            </Link>
            <Link className="nav-link saturn" to={"saturn/overview"}>
              SATURN
            </Link>
            <Link className="nav-link uranus" to={"uranus/overview"}>
              URANUS
            </Link>
            <Link className="nav-link neptune" to={"neptune/overview"}>
              NEPTUNE
            </Link>
          </ul>
        </nav>
        <img
          onClick={() => {
            setShow((prev) => !prev);
            window.scrollTo({ top: 0, left: 0 });
          }}
          className={`burger ${show ? "reduce-opacity" : ""}`}
          src={burger}
          alt="burger"
        />
      </header>
      <LineMaxWidth />
      <Burger show={show} negateShowMenu={negateShowMenu} />
      <Outlet />
    </>
  );
}
