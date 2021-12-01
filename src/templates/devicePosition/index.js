import React from "react";
import { useMotion } from "react-use";
import { get } from "lodash";

import { Navigation } from "../../components";

const DevicePosition = () => {
  const state = useMotion();
  const xAngle = state?.accelerationIncludingGravity.x;
  const yAngle = state?.accelerationIncludingGravity.y;

  const errDiveStyle = {
    backgroundColor: "red",
    width: "50%",
    textAlign: "center",
    margin: "0 auto",
    height: "auto",
    padding: "10px 0",
  };

  const errTextStyle = {
    color: "white",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  if (
    get(state, "accelerationIncludingGravity.x") == null &&
    get(state, "accelerationIncludingGravity.y") == null
  )
    return (
      <>
        <Navigation />
        <div style={errDiveStyle}>
          <p style={errTextStyle}>Your device doesn't support accelerometer</p>
        </div>
      </>
    );

  const meterRadius = 35 / 9;

  const xTransformValue = xAngle * meterRadius;
  const yTransformValue = yAngle * meterRadius;

  const xTranslation = `-50% + ${xTransformValue}vmin`;
  const yTranslation = `-50% - ${yTransformValue}vmin`;

  const meterStyle = {
    margin: "20px",
    border: "4px solid #303030",
    width: "80vmin",
    height: "80vmin",
    borderRadius: "100%",
    position: "relative",
    backgroundColor: "rgb(195,93)",
    background: "radial-gradient(circle, black 11%, grey 14%, white 100%)",
  };

  const pointerStyle = {
    transform: `translate(calc(${xTranslation}), calc(${yTranslation}))`,
    backgroundColor: "#303030",
    width: "10vmin",
    height: "10vmin",
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "100%",
  };

  const dimensionStyle = {
    fontWeight: "bold",
    paddingLeft: "10px",
  };

  return (
    <div>
      <Navigation />
      <p style={dimensionStyle}>X: {state.accelerationIncludingGravity.x}</p>
      <p style={dimensionStyle}>Y: {state.accelerationIncludingGravity.y}</p>
      <p style={dimensionStyle}>Z: {state.accelerationIncludingGravity.z}</p>
      <div style={meterStyle}>
        <div style={pointerStyle} />
      </div>
    </div>
  );
};

export default DevicePosition;
