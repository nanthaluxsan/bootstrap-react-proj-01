import React from "react";
import styled from "styled-components";
function footer() {
  return (
    <Footercontaines className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-3 col-sm-3 text-center">
              <h4> One of three columns</h4>
              <ul className=" list-unstyled d-none d-sm-block">
                <li>name1</li>
                <li>name1</li>
                <li>name1</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3  text-center">
              <h4> One of three columns</h4>
              <ul className=" list-unstyled d-none d-sm-block">
                <li>
                  <a href="/">name1</a>
                </li>
                <li>
                  <a href="/">name1</a>
                </li>
                <li>
                  <a href="/">name1</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3  text-center">
              <h4> One of three columns</h4>
              <ul className=" list-unstyled d-none d-sm-block">
                <li>
                  <a href="/">name1</a>
                </li>
                <li>
                  <a href="/">name1</a>
                </li>
                <li>
                  <a href="/">name1</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3  text-center">
              <h4> One of three columns</h4>
              <ul className=" list-unstyled d-none d-sm-block">
                <li>
                  <a href="/">name1</a>
                </li>
                <li>
                  <a href="/">name1</a>
                </li>
                <li>
                  <a href="/">name1</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center align-items-start">
              &copy; {new Date().getFullYear()} verithanam
            </p>
          </div>
        </div>
      </div>
    </Footercontaines>
  );
}

export default footer;
const Footercontaines = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  ul li a {
    color: var(--mainGray);
  }
  ul li a:hover {
    color: var(--mainWhite);
  }
`;
