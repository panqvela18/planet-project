import { NavLink } from "react-router-dom";

export default function Tabs(props: {
  color: string;
  activeIndex: number;
  changeActiveIndex: Function;
}) {
  return (
    <div className="tabs-container">
      <NavLink
        className={"tab"}
        to={"overview"}
        style={{ color: props.activeIndex === 1 ? props.color : "white" }}
        onClick={() => props.changeActiveIndex(1)}
      >
        OVERVIEW
      </NavLink>
      <NavLink
        className={"tab"}
        to={"structure"}
        style={{ color: props.activeIndex === 2 ? props.color : "white" }}
        onClick={() => props.changeActiveIndex(2)}
      >
        STRUCTURE
      </NavLink>
      <NavLink
        className={"tab"}
        to={"surface"}
        style={{ color: props.activeIndex === 3 ? props.color : "white" }}
        onClick={() => props.changeActiveIndex(3)}
      >
        SURFACE
      </NavLink>
    </div>
  );
}
