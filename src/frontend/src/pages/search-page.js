import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./search-page.css";

export const Auto = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!search || search.length < 2) {
      setOptions([]);
      setDisplay(false);
      return;
    }
    fetch("/api/meals?title=" + search)
      .then((res) => res.json())
      .then((cakes) => {
        setOptions(cakes);
        setDisplay(true);
      })
      .catch((err) => console.log(err));
  }, [search]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickerOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickerOutside);
    };
  }, []);

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  const goToCake = (id) => {
    history.push("/cake/" + id);
  };
  return (
    <div ref={wrapperRef} className="search-container">
      <input
        className="search-input"
        placeholder="Find your favorite cake"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="auto-container">
          {options.map(({ id, title }) => (
            <div
              onClick={() => goToCake(id)}
              className="options"
              key={id}
              tabIndex="0"
            >
              <span>{title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
