import React from "react";

export default props => {
  return (
    <div className="header__input-wrapper">
      <input
        value={props.title}
        onChange={props.changeTitleHandler}
        className="header__input"
      ></input>
    </div>
  );
};
