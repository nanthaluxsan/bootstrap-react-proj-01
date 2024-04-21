import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info1 from "../info1";
import Details from "./Details";
const m1 = [0, 1, 2, 3, 4, 5];
export class Home extends Component {
  render() {
    return (
      <InfoConsumer>
        {() => {
          return (
            <>
              <div className="row">
                {m1.map((m) => (
                  <Info1 value={m} />
                ))}
                {m1.map((m) => (
                  <Details value={m} />
                ))}
              </div>
            </>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Home;
