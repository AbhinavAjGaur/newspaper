import React, { Component } from "react";
import "./Loader.css";
import Shimmer from "./Shimmer";

export default class Loader extends Component {
  render() {
    return (
      <>
        <div className="skeleton-blog">
          <header>
            <div className="skeleton-author"></div>
          </header>
          <main className="skeleton-image"></main>

          <footer className="skeleton-footer"></footer>
          <Shimmer />
        </div>

      </>
    );
  }
}
