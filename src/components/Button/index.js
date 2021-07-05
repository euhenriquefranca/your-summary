import React from "react";

import "./styles.css";

export default function Button(props) {
  const { title } = props;
  return (
    <button type="submit" className="button" {...props}>
      <p className="button-text">{title}</p>
    </button>
  );
}
