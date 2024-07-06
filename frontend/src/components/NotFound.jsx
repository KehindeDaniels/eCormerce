import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p className="text-9xl font-bold">Error 404</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
