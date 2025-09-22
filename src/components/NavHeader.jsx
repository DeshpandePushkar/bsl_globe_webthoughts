import React from "react";
import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <div className="nav-content">
          <img
            src="/assets/logo.svg"
            alt="Globe Logo"
            className="nav-logo"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
