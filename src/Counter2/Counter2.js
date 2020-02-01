import React from "react";
import { ClickedContext } from "../App";

export default props => {
  return (
    <div className="counter">
      <h2 style={{ fontSize: "12px" }}>
        Counter:{" "}
        <strong>
          <ClickedContext.Consumer>
            {clicked => {
              return clicked ? "Clicked" : null;
            }}
          </ClickedContext.Consumer>
        </strong>
      </h2>
    </div>
  );
};
