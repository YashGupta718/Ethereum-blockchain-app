import React from "react";
import "./Header.css";
import PunkLogo from '../assets/assetscrpto/assets/header/cryptopunk-logo'
import SearchIcon from "../assets/assetscrpto/assets/header/search.png";
import ThemeSwitchIcon from "../assets/assetscrpto/assets/header/theme-switch.png"
function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={PunkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={SearchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, items or user..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
          <div className="themeSwitchContainer">
              <img src={ThemeSwitchIcon} alt="" />
          </div>
      </div>
      <div className="loginButton">
          GET IN
      </div>
    </div>
  );
}

export default Header;