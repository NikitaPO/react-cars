import React from "react";

const withClass = (Component, className) => {
  return props => {
    return (
      <li className={className}>
        <Component {...props} />
      </li>
    );
  };
};

export default withClass;
