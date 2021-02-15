import React from "react";
import cakesImagePath from "./cakes.png";
import "./recipes-thank-page.css";

export const Thanks = () => {
  return (
    <div className="thank-page-container">
      <h1 className="recipes-h1">Thank you for your reservation!!!</h1>
      <div className="thank-page-line">
        <div className="line-left"></div>
        <img src={cakesImagePath} alt="thre cakes" className="cakes-img" />
        <div className="line-right"></div>
      </div>
    </div>
  );
};
