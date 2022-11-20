import React from "react";
import "./Overlay.css";

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <div
      className="overlay"
      onClick={close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </div>
  );
};

export default Overlay;