import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NotFounPage extends Component {
  render() {
    return (
      <div className="container align-content-between">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>oops!</h1>
              <h2>error</h2>
            </div>
            <div className="error-details">sorry</div>
            <div className="error-actions">
              <Link to="/" className="btn btn-outline-primary btn-lg">
                <i className="fas fas-home" />
                &nbsp; back
              </Link>
              <Link to="/contact" className="btn btn-outline-primary btn-lg">
                <i className="fas fas-envelop" />
                &nbsp; support
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFounPage;
