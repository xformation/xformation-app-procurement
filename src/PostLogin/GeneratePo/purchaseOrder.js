import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import BlockIcon from "@material-ui/icons/Block";
import requestorImage from "../../assets/images/Setup/ahmad.png";
import { connect } from "react-redux";
import { purchaseOrderAction } from "../../_actions/";
import { status } from "../../_constants";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
class PurchaseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ApproveOrder: {},
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.dispatch(
      purchaseOrderAction.getApprovePurchaseOrder({ id: id })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search_approvepo_status !==
        this.props.search_approvepo_status &&
      this.props.search_approvepo_status === status.SUCCESS
    ) {
      this.setState({ ApproveOrder: this.props.search_approvepo });
    }
  }
  handleApprove = (status) => {
    const { ApproveOrder } = this.state;
    this.props.dispatch(
      purchaseOrderAction.approvePurchaseOrder({
        id: ApproveOrder.id,
        status: status,
      })
    );
    this.props.history.push(`/postlogin/generatepo`);
  };
  render() {
    const { ApproveOrder } = this.state;
    return (
      <div className='main-content'>
        <div className='generate-content'>
          <div className='generate-purchase'>
            <div className='heading'>
              <IconButton className='head-icon'>
                <KeyboardBackspaceIcon
                  onClick={() =>
                    this.props.history.push(`/postlogin/approvepo`)
                  }
                />
              </IconButton>
              <h4>Approve Purchase Order</h4>
            </div>
          </div>
          <div className='d-block w-100 sub-heading'>
            <h5>Purchase Order</h5>
          </div>
          <div className='d-block w-100 purchase-order'>
            <div className='row justify-content-between'>
              <div className='col-md-6 col-12 pr-md-5'>
                <div className='d-block order-overview'>
                  <h6>Overview</h6>
                  <ul>
                    <li>
                      <strong className='pending-heading'>Status</strong>
                      {ApproveOrder && ApproveOrder.Status && (
                        <p className='pending'>#{ApproveOrder.Status}</p>
                      )}
                    </li>
                    <li>
                      <strong>Delivery Status</strong>
                      {ApproveOrder && ApproveOrder.DeliveryStatus && (
                        <p>{ApproveOrder.DeliveryStatus}</p>
                      )}
                    </li>
                    <li>
                      <strong>Payment Status</strong>
                      {ApproveOrder && ApproveOrder.PaymentStatus && (
                        <p className='not-paid'>{ApproveOrder.PaymentStatus}</p>
                      )}
                    </li>
                    <li>
                      <strong>P O Number</strong>
                      {ApproveOrder && ApproveOrder.ContactNumber && (
                        <p>{ApproveOrder.ContactNumber}</p>
                      )}
                    </li>
                    <li>
                      <strong>Department</strong>
                      {ApproveOrder && ApproveOrder.Department && (
                        <p>{ApproveOrder.Department}</p>
                      )}
                    </li>
                    <li>
                      <strong>Requestor</strong>
                      <div className='requestor'>
                        <div className='image'>
                          <img src={ApproveOrder.RequestorAvatar} alt='' />
                        </div>
                        {ApproveOrder && ApproveOrder.RequestorName && (
                          <div className='name'>
                            {ApproveOrder.RequestorName}
                          </div>
                        )}
                      </div>
                    </li>
                    <li>
                      <strong>Item</strong>
                      {ApproveOrder && ApproveOrder.Item && (
                        <p>{ApproveOrder.Item}</p>
                      )}
                    </li>
                    <li>
                      <strong>Creation On</strong>
                      {ApproveOrder && ApproveOrder.CreationOn && (
                        <p>{ApproveOrder.CreationOn}</p>
                      )}
                    </li>
                    <li>
                      <strong>Comment</strong>
                      {ApproveOrder && ApproveOrder.Comment && (
                        <p className='comment-text'>{ApproveOrder.Comment}</p>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 col-12 pr-md-5'>
                <div className='d-block order-overview'>
                  <h6>Vendor</h6>
                  <ul>
                    <li>
                      <strong>Vendor</strong>
                      {ApproveOrder && ApproveOrder.VendorName && (
                        <p>{ApproveOrder.VendorName}</p>
                      )}
                    </li>
                    <li>
                      <strong>Vendor Email</strong>
                      {ApproveOrder && ApproveOrder.VendorEmail && (
                        <p>{ApproveOrder.VendorEmail}</p>
                      )}
                    </li>
                    <li>
                      <strong>Nature if Business</strong>
                      {ApproveOrder && ApproveOrder.NatureOfBusiness && (
                        <p>{ApproveOrder.NatureOfBusiness}</p>
                      )}
                    </li>
                    <li>
                      <strong>Quotation</strong>
                      <p className='number'>
                        <a href='#'>Download file</a>
                      </p>
                    </li>
                  </ul>
                  <h5>P.O Generate by</h5>
                  <div className='generate-box'>
                    {ApproveOrder && ApproveOrder.VendorAvatar && (
                      <div className='image'>
                        <img src={ApproveOrder.VendorAvatar} alt='' />
                      </div>
                    )}
                    <div className='name'>
                      <strong>Peter Perrison</strong>
                      {ApproveOrder && ApproveOrder.VendorName && (
                        <p>{ApproveOrder.VendorName}</p>
                      )}
                    </div>
                  </div>
                  {ApproveOrder && ApproveOrder.Limit && (
                    <div className='limit-text'>
                      Limit: ${ApproveOrder.Limit}
                    </div>
                  )}
                  <div className='generated-btn'>
                    <Button
                      variant='contained'
                      className='primary-btn'
                      onClick={() =>
                        this.props.history.push(`/postlogin/generatepo`)
                      }>
                      Generated
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='purchase-order-buttons'>
            <Button
              variant='contained'
              className='approve-btn'
              onClick={() => this.handleApprove("approve")}>
              <CheckCircleIcon className='approve-icon' />
              Approve
            </Button>
            <br />
            <Button
              variant='contained'
              className='decline-btn'
              onClick={() => this.handleApprove("decline")}>
              <BlockIcon className='decline-icon' />
              Decline
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { search_approvepo_status, search_approvepo } =
    state.procurement;
  return {
    search_approvepo_status,
    search_approvepo,
  };
};

export default connect(mapStateToProps)(PurchaseOrder);
