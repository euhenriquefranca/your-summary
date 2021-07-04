import React from "react";

import "./styles.css";

export default function Button({ title }) {
  return (
    <button type="submit" className="button">
      <p className="button-text">{title}</p>
    </button>
  );
}
