import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav classname="navbar navbar-light bg-light">
      <div classname="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
