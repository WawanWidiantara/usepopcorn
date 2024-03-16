import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";

function Test() {
  const [movieRating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        className={"test"}
        message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        onSetRating={setRating}
      />
      <p>This movie has {movieRating} rating</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
  </React.StrictMode>
);
