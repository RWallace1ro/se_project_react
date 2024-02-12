import React, { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const isChecked = currentTemperatureUnit === "C";

  // useEffect(
  //   () => setIsChecked(currentTemperatureUnit === "C"),
  //   [currentTemperatureUnit]
  // );

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          className="switch__box"
          name="toggle-switch-box"
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch_slider switch__slider-F"
              : "switch_slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
