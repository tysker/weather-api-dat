import React from "react";
// STYLING
import "../css/index.css";

export default function SearchByCity(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          <input
            type="text"
            name="searchByCity"
            onChange={props.onChange}
            className="input-text"
          />
        </label>
        <input type="submit" value="Search" className="btn" />
      </form>
    </div>
  );
}
