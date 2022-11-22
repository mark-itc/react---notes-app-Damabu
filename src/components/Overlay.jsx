import React from "react";
import "./Overlay.css";

const Overlay = ({ children, close, allStatesApp }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  const { modalOn, setModalOn } = allStatesApp

  return (
    <div
      className="overlay"
      onClick={() => setModalOn(!modalOn)}
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