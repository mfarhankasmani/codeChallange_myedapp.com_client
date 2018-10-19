import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          Quest
        </Link>
      </div>
    </nav>
  );
};

export default header;
