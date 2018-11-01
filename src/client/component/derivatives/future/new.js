import React, { Component } from "react";
import Navbar from "../../navbar";
import Header from "../../header";

class newFuture extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <div className="app-content content">
          <div className="content-wrapper">
            <div className="content-header row">
              <div class="content-header-left col-md-6 col-12 mb-2">
                <h3 class="content-header-title">Future Trades</h3>
                <div class="row breadcrumbs-top">
                  <div class="breadcrumb-wrapper col-12">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#">Derivatives</a>
                      </li>
                      <li class="breadcrumb-item active">Future Trades</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header" />
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <form className="form">
                          <div className="form-body">
                            <h4 className="form-section">
                              <i className="ft-user" /> Future Contract Details
                            </h4>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput1">
                                    Trade Ref. No.
                                  </label>
                                  <input
                                    type="text"
                                    id="projectinput1"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="fname"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput2">
                                    External Trade Ref. No.
                                  </label>
                                  <input
                                    type="text"
                                    id="projectinput2"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lname"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">Trade Date*</label>
                                  <input
                                    type="date"
                                    id="timesheetinput3"
                                    className="form-control"
                                    name="date"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">Trader*</label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">
                                    Exchange Instrument*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">
                                    Prompt/Delivery Details*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">Trade Type*</label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">
                                    Trade Price*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">Trade Value</label>
                                  <input
                                    type="text"
                                    id="projectinput1"
                                    className="form-control"
                                    value="0"
                                    name="fname"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">Lot Size*</label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">Quantity*</label>
                                  <input
                                    type="text"
                                    id="projectinput1"
                                    className="form-control"
                                    value="0"
                                    name="fname"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">
                                    Settlement Currency*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">
                                    Clearer/Broker*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">
                                    Clearer/Broker Account*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">
                                    Clearer/Broker Commission Type
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">
                                    Commission Value
                                  </label>
                                  <input
                                    type="text"
                                    id="projectinput1"
                                    className="form-control"
                                    value="0"
                                    name="fname"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">Broker</label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">
                                    Broker Commission Type
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <h4 className="form-section">
                              <i className="la la-paperclip" />
                              Internal
                            </h4>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">
                                    Profit Center*
                                  </label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">Strategy*</label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput3">Purpose*</label>
                                  <select
                                    id="projectinput7"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value="0" selected="" disabled="">
                                      Select
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="projectinput4">Remarks</label>
                                  <textarea
                                    id="projectinput8"
                                    rows="5"
                                    className="form-control"
                                    name="comment"
                                    placeholder="Remarks"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-actions">
                            <button
                              type="button"
                              className="btn btn-warning mr-1"
                            >
                              <i className="ft-x" /> Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                              <i className="la la-check-square-o" /> Create
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default newFuture;
