import React, { Component } from "react";
import Loader from "./Loader";

export default class Skeleton extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col-md-4">
            <Loader />
          </div>
          <div className="col-md-4">
            <Loader />
          </div>
          <div className="col-md-4">
            <Loader />
          </div>
          <div className="col-md-4">
            <Loader />
          </div>
          <div className="col-md-4">
            <Loader />
          </div>
          <div className="col-md-4">
            <Loader />
          </div>
        </div>
      </div>
    );
  }
}
