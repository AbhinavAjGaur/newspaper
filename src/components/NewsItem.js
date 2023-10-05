import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img   style={{ height: "200px" }}
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn" style={{fontStyle: "revert", fontSize:"20px", color:"#000000", border:"0px" }} on
            >
              {title}...
            </a>
            <p className="card-text" style={{color:"#5d5862"}}>{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}
