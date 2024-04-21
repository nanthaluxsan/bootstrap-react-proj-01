import React, { Component, createContext } from "react";
import { reviews, detailInfo, news, placeInfo } from "./data";

// Creating context
const InfoContext = createContext();

// Context provider
class InfoProvider extends Component {
  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news,
    // Placeholder for comment
  };

  getItem = (id) => {
    const item = this.state.info.find((item) => item.id === id);
    return item;
  };

  handleClick = (id) => {
    const item = this.getItem(id);
    this.setState(() => {
      return { detailInfo: item };
    });
  };

  render() {
    return (
      <InfoContext.Provider
        value={{ ...this.state, handleClick: this.handleClick }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

// Creating a consumer
const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer, InfoContext };
