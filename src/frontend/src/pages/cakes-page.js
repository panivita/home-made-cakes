import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cakes-page.css";

const Cake = ({ id, url, title, max_reservations, price }) => (
  <div className="cakes">
    <img src={url} className="img-cake" alt="cake"></img>
    <h1>{title}</h1>
    <p>
      <b>Servings:</b> {max_reservations}
    </p>
    <p>
      <b>Price:</b> {price} dkk
    </p>
    <Link to={"/cake/" + id} className="booking">
      Book now
    </Link>
  </div>
);

export const CakesPage = () => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/meals");
      const result = await response.json();
      setMeals(result);
    })();
  }, []);
  return (
    <div className="cakes-container">
      {meals && meals.map((m) => <Cake key={m.id} {...m} />)}
    </div>
  );
};
