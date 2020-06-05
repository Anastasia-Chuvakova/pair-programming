import React from "react";
import logo from "./../asset/cocktail-logo.png";
import { Link } from "react-router-dom";
import "./../styles/main.css";

function Home() {
  return (
    <>
      <div className="body">
        <header>
          <div className="header-container">
            <div className="logo-container">
              <Link to="/home">
                <img className="header__logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-container">
              <div className="search-bar-container">
                <form className="search-bar">
                  <input
                    className="search-bar-input"
                    type="text"
                    name="search"
                    placeholder="Search.."
                  />{" "}
                  <button className="button button-upload">
                    <Link to="/search">
                      <span>Search</span>
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="drink-image-container">
            <div className="img-container">
              <img
                className="drink-image"
                src="http://place-puppy.com/public-images/index-page/image1/210x280-lg.jpg"
                alt=""
              />
            </div>

            <div className="button-container">
              <button className="random-button">Random</button>
              <button className="random-button">All Drinks</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
