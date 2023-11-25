import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="haeder">
      {/*image logo*/}
      <div>
        <img
          style={{ width: 120, height: 40, marginTop: 10 }}
          className="image"
          src="https://links.papareact.com/f90"
        />
      </div>
      {/* Search Bar */}
      <div>
        <input type="text" placeholder="search Items or products" />
      </div>
    </div>
  );
}

export default Header;
