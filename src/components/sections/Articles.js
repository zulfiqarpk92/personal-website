import React, { Component } from "react";
// import Article from "../elements/Article";

class Articles extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
  }

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <h1 className="title">Articles</h1>
          <h2 className="subtitle is-4">My latest articles</h2>
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default Articles;
