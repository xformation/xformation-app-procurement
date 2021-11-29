import React, { Component } from "react"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import { RangeDatePicker, DatePicker } from '@y0c/react-datepicker';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Table from '../../Table/Table';
import 'simplebar/dist/simplebar.min.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { connect } from 'react-redux';
import { purchaseOrderAction } from "../../_actions/purchaseOrder.action";
import { status } from "../../_constants";
import { commonFunctions } from '../../_utilities';
class ViewPurchaseOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                startDate: '',
                deliveryDate: '',
                payment: '',
                otherTerms: '',
            },
            purchaseOrder: {},
        }
    }
    componentDidMount() {
        this.props.dispatch(purchaseOrderAction.getPurchaseOrder());

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.get_purchase_status !== prevProps.get_purchase_status && this.props.get_purchase_status === status.SUCCESS) {
            if (this.props.getpurchaseorder) {
                this.setState({
                    purchaseOrder: this.props.getpurchaseorder,
                })
            }
        }
    }
    handleStateChange = (e) => {
        const { name, value } = e.target;
        const { requiData } = this.state;
        requiData[name] = value;
        this.setState({
            requiData,
        });

    };

    handleDate = (date, type) => {
        let { requiData } = this.state;
        if (type === "start") {
            requiData.startDate = commonFunctions.convertDateToString(new Date(date))
        }
        if (type === "deliver") {
            requiData.deliveryDate = commonFunctions.convertDateToString(new Date(date))
        }
        this.setState({ requiData })
    }

    handleClickMethod = (event) => {
        const { requiData, } = this.state;
        event.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (errorData.isValid) {
            const sendReqData = {
                status: requiData.status,
                startDate: requiData.startDate,
                deliveryDate: requiData.deliveryDate,
                payment: requiData.payment,
                conditionText: requiData.conditionText
            }
            this.props.dispatch(purchaseOrderAction.addPurchaseOrder(sendReqData));
        }
    }


    validate = (isSubmitted) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        let isValid = true;
        const retData = {
            startDate: validObj,
            deliveryDate: validObj,
            conditionText: validObj,
            payment: validObj,
            isValid
        };
        if (isSubmitted) {
            const { requiData } = this.state;
            if (!requiData.startDate) {
                retData.startDate = {
                    isValid: false,
                    message: "Start date is required"
                };
                isValid = false;
            }
            if (!requiData.deliveryDate) {
                retData.deliveryDate = {
                    isValid: false,
                    message: "Delivery date is required"
                };
                isValid = false;
            }
            if (!requiData.payment) {
                retData.payment = {
                    isValid: false,
                    message: "Payment terms is required "
                };
                isValid = false;
            }
            if (!requiData.conditionText) {
                retData.conditionText = {
                    isValid: false,
                    message: " Other terms and Condition is required"
                };
                isValid = false;
            }
            if (new Date(requiData.startDate)>=new Date(requiData.deliveryDate) ){
                retData.startDate = {
                    isValid: false,
                    message: " enter a valid date "
                };
                isValid = false;
            }
        }
        retData.isValid = isValid;
        return retData;

    };

    displayTableData = () => {
        const { purchaseOrder } = this.state;
        let retData = [];
        if (purchaseOrder && purchaseOrder.requistionItem && purchaseOrder.requistionItem.length > 0) {
            for (let i = 0; i < purchaseOrder.requistionItem.length; i++) {
                let data = purchaseOrder.requistionItem[i];
                retData.push(
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{data.itemDescription}</td>
                        <td>{data.orderQuantity}</td>
                        <td>{data.ratePerItem}</td>
                        <td>{data.price}</td>
                    </tr>
                );
            }
        }
        return retData;
    }

    render() {
        const { requiData, isSubmitted, purchaseOrder, startDate, deliveryDate } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="generate-content">
                    <div className="generate-order">
                        <div className="heading">
                            <h4>Generate Purchase Order</h4>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="generate-list">
                                    <ul>
                                        <li>
                                            <label>Requisition No. </label>
                                            {purchaseOrder.id && <span>{purchaseOrder.id}</span>}
                                        </li>
                                        <li>
                                            <label>Requestor</label>
                                            {purchaseOrder.createdBy && <span>{purchaseOrder.createdBy}</span>}
                                        </li>
                                        <li>
                                            <label>Department</label>
                                            {purchaseOrder.department && <span>{purchaseOrder.department.name}</span>}
                                        </li>
                                        <li>
                                            <label>Requisition Type</label>
                                            {purchaseOrder.requisitionType && <span>{purchaseOrder.requisitionType}</span>}
                                        </li>
                                        <li>
                                            <label>Priority</label>
                                            <span>Normal</span>
                                        </li>
                                        <li>
                                            <label>Requisition Purpose</label>
                                            <span>IT maintenance and Upgrading</span>
                                        </li>
                                        <li>
                                            <label>Requisition Total</label>
                                            {purchaseOrder.totalPrice && <span> {purchaseOrder.currency.code} {purchaseOrder.totalPrice}</span>}
                                        </li>
                                        <li>
                                            <label>Oversight Committee Report</label>
                                            <span>Not Required</span>
                                        </li>
                                        <li>
                                            <label>Approved Vendor</label>
                                            <span>Viocom tech Limited</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="generate-list">
                                    <ul>
                                        <li>
                                            <label>Date Created </label>
                                            {purchaseOrder.createdOn && <span>{commonFunctions.convertDateToString(new Date(purchaseOrder.createdOn))}</span>}
                                        </li>
                                        <li>
                                            <label>Time Span</label>
                                            <span>28 day ago</span>
                                        </li>
                                        <li>
                                            <label>Status</label>
                                            <span>Vendor Selected</span>
                                        </li>
                                        <li>
                                            <label>Extra Budgetory</label>
                                            <span>No</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="viocom-tech">
                            <div className="viocom-heading">
                                <h5>Viocom Tech Limited</h5>
                                <span>Intial Quotation <b>0</b></span>
                                <span>Final Quotation <b>1</b></span>
                                <p>View Documents</p>
                            </div>
                            <SimpleBar>
                                <div className="item-detail">
                                    <table width="100%">
                                        <thead className="item-content">
                                            <tr>
                                                <th>ID</th>
                                                <th>Item Description</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="item-content">
                                            {this.displayTableData()}
                                        </tbody>
                                    </table>
                                </div>
                            </SimpleBar>
                            <div className="viocom-heading">
                                <h5>P.O Parameters</h5>
                            </div>
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-form-label">
                                    Start Date
                                </label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 col-form-field">
                                    <DatePicker startText="Start" placeholder="10/28/2021" onChange={(date) => this.handleDate(date, 'start')} />
                                    <CalendarTodayTwoToneIcon className="calendar-icon" />
                                    <span className="d-block w-100 text-danger">{errorData.startDate.message}</span>
                                </div>
                            </div>
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-form-label">
                                    Delivery Date
                                </label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 col-form-field">
                                    <DatePicker placeholder="10/28/2021" startText="End" onChange={(date) => this.handleDate(date, 'deliver')} />
                                    <CalendarTodayTwoToneIcon className="calendar-icon" />
                                    <span className="d-block w-100 text-danger">{errorData.deliveryDate.message}</span>
                                </div>
                            </div>
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-form-label">
                                    Payment Terms
                                </label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 col-form-field">
                                    <TextareaAutosize name="payment" className="payment-text" value={requiData.payment}
                                        onChange={this.handleStateChange} isvalid={errorData.payment.isValid} placeholder="Payment of total contract sum will be made to you after delivery" />
                                    <span className="d-block w-100 text-danger">{errorData.payment.message}</span>
                                </div>
                            </div>
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-form-label">
                                    Other terms and Condition
                                </label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 col-form-field">
                                    <TextareaAutosize name="conditionText" className="other-condition-text" value={requiData.conditionText}
                                        onChange={this.handleStateChange} isvalid={errorData.conditionText.isValid} placeholder="" />
                                    <span className="d-block w-100 text-danger">{errorData.conditionText.message}</span>
                                </div>
                            </div>
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-form-label">
                                </label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 col-form-button">
                                    <Button variant="contained" className="primary-btn generate-btn" disableElevation onClick={this.handleClickMethod}>
                                        Generate
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { get_purchase_status, getpurchaseorder } = state.generatePurchaseOrder;
    return { get_purchase_status, getpurchaseorder }
}

export default connect(mapStateToProps)(ViewPurchaseOrder);