import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'simplebar/dist/simplebar.min.css';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PrintIcon from '@material-ui/icons/Print';
import Logo from '../../assets/images/logo.png';
import HuntImg from '../../assets/images/hunt-img.png';
import SimpleBar from 'simplebar-react';
import { connect } from "react-redux";
import { invoiceAction } from "../../_actions/invoice.actions"
import { status } from "../../_constants";
import Loader from '../../_components/commonLoader'
class ViewInvoice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            approvedData: {}
        }
    }
    componentDidMount() {
        this.props.dispatch(invoiceAction.getInvoice('#INV-0001234'))
    }

    componentDidUpdate(prevProps, prevState) {
        let { approvedData } = this.state
        if (prevProps.get_invoice_status !== this.props.get_invoice_status && this.props.get_invoice_status === status.SUCCESS) {
            approvedData = this.props.getInvoice[0];
            this.setState({ approvedData })
        }
    }
    render() {
        const { approvedData } = this.state;
        return (
            <div className="groceries-content">
                <div className="head-top">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="head-left-content">
                                <IconButton className="head-icon">
                                    <KeyboardBackspaceIcon />
                                </IconButton>
                                <h4>Invoice</h4>
                                <p>{approvedData.RequisitionsNo}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="head-right-content">
                                <Button variant="contained" className="invoice-btn">
                                    <DoneAllIcon className="mr-2" />
                                    Invoice Sent
                                </Button>
                                <Button variant="contained" className="primary-btn download-btn">
                                    <SaveAltIcon className="mr-2" />
                                    Download
                                </Button>
                                <IconButton className="printer-icon p-2">
                                    <PrintIcon />
                                </IconButton>
                                <IconButton className="head-menu-icon p-2">
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="groceries-department">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="address">
                                <span>FROM</span>
                                <div className="image">
                                    <img src={Logo} alt="" />
                                </div>
                                <div className="address-text">
                                    <h5>SYNECTIKS Inc</h5>
                                    <p>Madhapur, Hyderabad <b>India</b></p>
                                    <ul>
                                        <li><a href="mailto: akbar.khan@synectiks.com">akbar.khan@synectiks.com</a></li>
                                        <li><a href="tel:(+91)88859991552">tel:(+91)88859991552</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="address">
                                <span>CLIENT</span>
                                <div className="image-box">
                                    <img src={HuntImg} alt="" />
                                </div>
                                <div className="address-text">
                                    <h5>Circle Hunt Inc.</h5>
                                    <p>Franklin Avenue Street New  York,ABC 5562 <b>United State</b></p>
                                    <ul>
                                        <li><a href={approvedData.Requestor}>{approvedData.Requestor}</a></li>
                                        <li><a href="tel:(+91)88859991552">tel:(+91)88859991552</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-name">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="project-left-content">
                                <span>PROJECT NAME</span>
                                <h5>Groceries for Department 1</h5>
                                <label>DUE DATE</label>
                                <p>{approvedData.RequestDate}</p>
                            </div>
                        </div>
                        {approvedData ? (<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="project-right-content">
                                <SimpleBar>
                                    <div className="item-detail">
                                        <table width="100%">
                                            <thead className="item-content">
                                                <tr>
                                                    <th>ITEAM DESCRIPTION </th>
                                                    <th>Qty</th>
                                                    <th>RATE</th>
                                                    <th className="text-right">AMOUNT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>{approvedData.RequestDepartment}</th>
                                                    <th>10</th>
                                                    <th>RATE</th>
                                                    <th className="text-right">{approvedData.RequisitionsTotal}</th>
                                                </tr>
                                                {/* {this.displayTableData()} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </SimpleBar>
                            </div>
                        </div>) : (<Loader />)}
                    </div>
                </div>
                <div className="total-iteam">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ml-auto">
                            <div className="total-iteam-content">
                                <ul>
                                    <li>
                                        <label>SUBTOTAL</label>
                                        <span>$17,883.00</span>
                                    </li>
                                    <li>
                                        <label>TAX</label>
                                        <span>2%</span>
                                    </li>
                                    <li>
                                        <label>TOTAL</label>
                                        <span><b>${approvedData.RequisitionsTotal}</b></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { get_invoice_status,
        getInvoice, } = state.invoice;
    return {
        get_invoice_status,
        getInvoice,
    }
}
export default connect(mapStateToProps)(ViewInvoice);