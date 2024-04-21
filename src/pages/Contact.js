import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <h3>
            <strong>our location</strong>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <iframe
              title="my"
              style={{ width: "100%", height: "315px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711"
            ></iframe>
          </div>
          <div className="col-md-5">
            <h3>
              <strong>contact</strong>
            </h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="phone"
                />
              </div>
              <textarea
                className=" form-control"
                cols={30}
                rows={3}
                placeholder="message"
              />
              <Link to="#" className="btn btn-outline-primary text-uppercase">
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                <i className="fa fa-telegram-plane" aria-hidden="true"></i>
                &nbsp;Send
              </Link>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
