import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { apiData } from "../sampleOutput";
import Spinner from "./Spinner";

export default class News extends Component {
  pageNumber = 1;
  constructor() {
    super();
    console.log("Hello i am a constructor");
    this.state = {
      articles: apiData.articles.slice(0, 4),
      loading: false,
      totalPages: 1,
    };
    // this.getNews();
  }

  // Code with Harry pagination

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0c997bd2ad3e4370b30320aadbaaf9df&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: 1,
      loading: false,
    });
  }

  // Code with Harry pagination

  handlePrevClick = async () => {
    console.log("Previous", this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0c997bd2ad3e4370b30320aadbaaf9df&page=${
      this.state.page - 1 !== 0 ? this.state.page - 1 : 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  // Code With Harry pagination

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 6)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0c997bd2ad3e4370b30320aadbaaf9df&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  // Abhinav pagination

  // async getNews(page = 1){
  //   console.log("1")
  //   let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0c997bd2ad3e4370b30320aadbaaf9df&page=${this.setState()}&pageSize=6`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     articles : parsedData.articles,
  //     totalPages: parsedData.totalResults,
  //   })
  // }

  // Prateek pagination

  // async getNews(page = 1) {
  //   if (this.pageNumber !== page) {
  //     this.pageNumber = page;
  //     console.log(this.pageNumber);
  //     let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0c997bd2ad3e4370b30320aadbaaf9df&page=${
  //       !this.pageNumber ? this.pageNumber : 1
  //     }&pageSize=6`;
  //     let res = await fetch(url);
  //     let data = await res.json();
  //     console.log(data);
  //     this.setState({
  //       articles: data.articles,
  //       totalPage: data.totalResults,
  //     });
  //   } else {
  //     console.log("same page");
  //   }
  // }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewPaper - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        {/* Prateek Pagination 

        <nav>
          <ul className="pagination">
            <li className="page-item">
              <div
                className="page-link"
                onClick={() =>
                  this.getNews(
                    this.pageNumber - 1 !== 0 ? this.pageNumber - 1 : 1
                  )
                }
              >
                Previous
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={() => this.getNews(1)}>
                1
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={() => this.getNews(2)}>
                2
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={() => this.getNews(3)}>
                3
              </div>
            </li>
            <li className="page-item">
              <div
              disabled = {this.pageNumber > this.state.totalPages}
                className="page-link"
                onClick={() =>
                  this.getNews(
                    this.pageNumber + 1 <= this.state.totalPage
                      ? this.pageNumber + 1
                      : this.state.totalPage
                  )
                }
              >
                Next
              </div>
            </li>
          </ul>
        </nav> */}

        {/* Abhinav Pagination  */}

        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={()=>this.getNews(1)}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={()=>this.getNews(2)}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={()=>this.getNews(3)}>
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav> */}

        {/* Code with Harry pagination  */}

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
