import React, { useEffect, useState } from "react";

import Online from "../assets/online.png";

const Reachability = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => setIsOnline(false));
    window.addEventListener("online", () => setIsOnline(true));
  }, []);

  const imageStyle = {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: isOnline ? "#36b52f" : "#db5656",
    borderRadius: "10px",
    color: "white",
  };

  return <img style={imageStyle} src={Online} alt="online" />;
};

export default Reachability;
