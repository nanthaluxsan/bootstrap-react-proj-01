import React, { Component } from "react";
import NewsCard from "../NewsCard";
class News extends Component {
  render() {
    const arr = [0, 1, 2, 3, 4, 5];
    return (
      <>
        {arr.map((b) => (
          <NewsCard key={b} value={b} />
        ))}
      </>
    );
  }
}

export default News;
