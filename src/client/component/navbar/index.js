import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div
        className="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-dark navbar-without-dd-arrow navbar-shadow"
        role="navigation"
        data-menu="menu-wrapper"
      >
        <div
          className="navbar-container main-menu-content"
          data-menu="menu-container"
        >
          <ul
            className="nav navbar-nav"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className="dropdown nav-item" data-menu="dropdown">
              <a className="dropdown-toggle nav-link" href="index.html">
                <i className="la la-home" />
                <span>Home</span>
              </a>
            </li>
            <li className="dropdown nav-item" data-menu="dropdown">
              <a
                className="dropdown-toggle nav-link"
                href="#"
                data-toggle="dropdown"
              >
                <i className="la la-comment" />
                <span>Physicals</span>
              </a>
            </li>
            <li className="dropdown nav-item" data-menu="dropdown">
              <a
                className="dropdown-toggle nav-link"
                href="#"
                data-toggle="dropdown"
              >
                <i className="la la-truck" />
                <span>Logistics</span>
              </a>
            </li>
            <li className="dropdown nav-item" data-menu="dropdown">
              <a
                className="dropdown-toggle nav-link"
                href="#"
                data-toggle="dropdown"
              >
                <i className="la la-server" />
                <span>Inventory</span>
              </a>
            </li>
            <li className="dropdown nav-item" data-menu="dropdown">
              <a
                className="dropdown-toggle nav-link"
                href="#"
                data-toggle="dropdown"
              >
                <i className="la la-files-o" />
                <span>Derivatives</span>
              </a>
              <ul className="dropdown-menu">
                <li
                  className="dropdown dropdown-submenu"
                  data-menu="dropdown-submenu"
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Trades
                  </a>
                  <ul className="dropdown-menu">
                    <li data-menu="">
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Forwards
                      </a>
                    </li>
                    <li
                      className="dropdown dropdown-submenu"
                      data-menu="dropdown-submenu"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Future
                      </a>
                      <ul className="dropdown-menu">
                        <li data-menu="">
                          <a
                            className="dropdown-item"
                            href="future_trade.html"
                            data-toggle="dropdown"
                          >
                            New Future
                          </a>
                        </li>
                        <li data-menu="">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            New Calender Future
                          </a>
                        </li>
                        <li data-menu="">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            List All
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li data-menu="">
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Exchange Options
                      </a>
                    </li>
                    <li data-menu="">
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="dropdown"
                      >
                        OTC Options
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item" href="#" data-toggle="dropdown">
                    Settlements
                  </a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item" href="#" data-toggle="dropdown">
                    FX Trades
                  </a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item" href="#" data-toggle="dropdown">
                    Pricing Process
                  </a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item" href="#" data-toggle="dropdown">
                    Pricing Process List
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
