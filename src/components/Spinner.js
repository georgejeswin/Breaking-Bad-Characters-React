import React from "react";
import spinner from "../img/spinner.gif";
import "./Spinner.css";
const Spinner = () => {
  return <img src={spinner} className="spinner" alt="Loading...." />;
};

export default Spinner;
