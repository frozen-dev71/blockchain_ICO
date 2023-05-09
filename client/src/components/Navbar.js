import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden sm:inline">
      <Link to="/" className="navbar-title">
        Home
      </Link>
      <Link to="/token" className="navbar-title">
        Token
      </Link>
      <Link to="/transaction" className="navbar-title">
        Transaction
      </Link>     
    </div>
  );
};

export default Navbar;
