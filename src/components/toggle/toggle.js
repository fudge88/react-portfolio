import "./toggle.css";

import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { useContext } from "react";
import { modeContext } from "../../context";

function Toggle() {
  const mode = useContext(modeContext);
  const darkMode = mode.state.darkMode;

  const handleClick = () => {
    mode.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={sun} alt="" className="toggle-icon"></img>
      <img src={moon} alt="" className="toggle-icon"></img>
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{
          left: mode.state.darkMode ? -1 : 25,
          backgroundColor: darkMode && "#ff4500",
        }}
      ></div>
    </div>
  );
}
export default Toggle;
