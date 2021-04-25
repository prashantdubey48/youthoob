import React, { useState } from "react";
import "./_categoriesBar.scss";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/video.action";

const keywords = [
  "All",
  "React js",
  "Jethalal Champaklal Gada",
  "React Native",
  "Yes theory",
  "Redux",
  "yatri doctor",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "cycle baba",
  "Cricket",
  "Football",
  "Real Madrid",
  "wandering with paint",
  "Poor Coder",
  "Shwetabh",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
