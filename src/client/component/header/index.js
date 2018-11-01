import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow navbar-static-top navbar-light navbar-brand-center">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs"
                  href="#"
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="index.html">
                  <img
                    className="brand-logo"
                    alt="modern admin logo"
                    src="../../../../public/app-assets/images/logo/logo.png"
                  />
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="la la-ellipsis-v" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item d-none d-md-block">
                  <a
                    className="nav-link nav-menu-main menu-toggle hidden-xs"
                    href="#"
                  >
                    <i className="ft-menu" />
                  </a>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link nav-link-expand" href="#">
                    <i className="ficon ft-maximize" />
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span className="mr-1">
                      Hello,
                      <span className="user-name text-bold-700">John Doe</span>
                    </span>
                    <span className="avatar avatar-online">
                      <img
                        src="../../../../public/app-assets/images/portrait/small/avatar-s-19.png"
                        alt="avatar"
                      />
                      <i />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <i className="ft-user" />
                      Edit Profile
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="ft-power" /> Logout
                    </a>
                  </div>
                </li>
                <li className="dropdown dropdown-language nav-item">
                  <a
                    className="dropdown-toggle nav-link"
                    id="dropdown-flag"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flag-icon flag-icon-gb" />
                    <span className="selected-language" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdown-flag"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-gb" />
                      English
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-fr" /> French
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-cn" /> Chinese
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-de" /> German
                    </a>
                  </div>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon ft-bell" />
                    <span className="badge badge-pill badge-default badge-danger badge-default badge-up badge-glow">
                      5
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Notifications</span>
                      </h6>
                      <span className="notification-tag badge badge-default badge-danger float-right m-0">
                        5 New
                      </span>
                    </li>
                    <li className="scrollable-container media-list w-100">
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="ft-plus-square icon-bg-circle bg-cyan" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new order!
                            </h6>
                            <p className="notification-text font-small-3 text-muted">
                              Lorem ipsum dolor sit amet, consectetuer elit.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="ft-download-cloud icon-bg-circle bg-red bg-darken-1" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading red darken-1">
                              99% Server load
                            </h6>
                            <p className="notification-text font-small-3 text-muted">
                              Aliquam tincidunt mauris eu risus.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Five hour ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading yellow darken-3">
                              Warning notifixation
                            </h6>
                            <p className="notification-text font-small-3 text-muted">
                              Vestibulum auctor dapibus neque.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Today
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="ft-check-circle icon-bg-circle bg-cyan" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">Complete the task</h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Last week
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="ft-file icon-bg-circle bg-teal" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              Generate monthly report
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Last month
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item text-muted text-center"
                        href="javascript:void(0)"
                      >
                        Read all notifications
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
