import React, { Component } from "react";
import Navbar from "../../navbar";
import Header from "../../header";

class futuresListing extends Component {
  state = {
    data: []
  };

  getData() {
    fetch("/api/derivatives")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const listItems = this.state.data.map(item => {
      return (
        <tr>
          <td />
          <td>{item.tradeRefNo}</td>
          <td>{item.allocatedStatus}</td>
          <td>{item.status}</td>
          <td>{item.tradeDate}</td>
          <td>{item.traderName}</td>
          <td>{item.nominee}</td>
          <td>{item.externalRefNo}</td>
          <td>{item.deliveryDateMonth}</td>
          <td>{item.buySell}</td>
          <td>{item.clearerName}</td>
          <td>{item.clearerAccount}</td>
          <td>{item.brokerCommissionTypeName}</td>
          <td>{item.brokerCommissionDetails}</td>
          <td>{item.clearerCommAmt}</td>

          <td>{item.brokerName}</td>
          <td>{item.brokerCommissionTypeName}</td>
          <td>{item.purposeDisplayName}</td>
          <td>{item.dealType}</td>
          <td>{item.instrumentName}</td>
          <td>{item.totalQuantity}</td>
          <td>{item.totalLots}</td>
          <td>{item.openLots}</td>
          <td>{item.closedLots}</td>
          <td>{item.profitCenterName}</td>
          <td>{item.tradePrice}</td>
          <td>{item.createdBy}</td>

          <td>{item.createdThrough}</td>
          <td>{item.promptDate}</td>
          <td>{item.stripRefNo}</td>
          <td>{item.internalAggTradeRefNo}</td>
          <td>{item.lotSizeDisplay}</td>
        </tr>
      );
    });

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
                <div className="col-12">
                  <div className="card">
                    <div className="card-content collapse show">
                      <div className="table-responsive">
                        <div className="bd-example">
                          <table className="table table-bordered table-responsive-lg">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ref No</th>
                                <th scope="col">Allocated Status</th>
                                <th scope="col">Status</th>
                                <th scope="col">Trade Date</th>
                                <th scope="col">Trader</th>
                                <th scope="col">Nominee</th>
                                <th scope="col">External Trade Ref No</th>
                                <th scope="col">Prompt/Delivery Detail</th>
                                <th scope="col">B/S</th>
                                <th scope="col">Clearer/Broker</th>
                                <th scope="col">Clearer/Broker Account</th>
                                <th scope="col">Clearer/Broker Commission</th>
                                <th scope="col">Commision Details</th>
                                <th scope="col">Comission Amount</th>
                                <th scope="col">Broker</th>
                                <th scope="col">Broker Commission Type</th>
                                <th scope="col">Purpose</th>
                                <th scope="col">Deal Type</th>
                                <th scope="col">Internal Trade Nos.</th>
                                <th scope="col">Statergy</th>
                                <th scope="col">Exchange Instrument</th>
                                <th scope="col">Total Quantity</th>
                                <th scope="col">Total Lots</th>
                                <th scope="col">Open Lots</th>
                                <th scope="col">Closed Lots</th>
                                <th scope="col">Profit Center</th>
                                <th scope="col">Trade Price </th>
                                <th scope="col">Created By</th>
                                <th scope="col">Created Date</th>
                                <th scope="col">Created Through</th>
                                <th scope="col">Prompt/delivery Date</th>
                                <th scope="col">Strip Ref. No.</th>
                                <th scope="col">Original Trade</th>
                              </tr>
                            </thead>
                            <tbody>{listItems}</tbody>
                          </table>
                        </div>
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

export default futuresListing;
