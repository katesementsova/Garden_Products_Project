import React from "react";
import "./index.module.css";

const ModalWindow = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      // onClick={() => setActive(false)}
    >
      <div className="modal_content">Congratulations!</div>
    </div>
  );
};

export default ModalWindow;
