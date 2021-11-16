import React, { Component } from "react"
import Button from '@material-ui/core/Button';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Table from '../../Table/Table';
import 'simplebar/dist/simplebar.min.css';
import MailIcon from '@material-ui/icons/Mail';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PrintIcon from '@material-ui/icons/Print';
import Logo from '../../assets/images/logo.png';
import HuntImg from '../../assets/images/hunt-img.png';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckIcon from '@material-ui/icons/Check';
class Invoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: "",
                CompletedButton: false,

            },
            approvedVendoreTableData: {
                columns: [
                    {
                        label: 'ID invoices',
                        key: 'SNo',
                        renderCallback: (value) => {
                            return <td><span className={'s-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Due Date',
                        key: 'RequisitionsNo',
                        renderCallback: (value) => {
                            return <td><span className={'requisitions-no'}> <div className="graphic"></div>{value}</span></td>
                        }
                    },
                    {
                        label: 'Client',
                        key: 'RequestDate',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}><Button className="mailicon-btn"><MailIcon /></Button>{value}</span></td>
                        }
                    },
                    {
                        label: 'Contact',
                        key: 'RequestDepartment',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Amount',
                        key: 'Requestor',
                        renderCallback: (value) => {
                            return <td><span className={'btn details-btn'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Status',
                        key: 'RequisitionsTotal',
                        renderCallback: (value) => {
                            return <td>
                                {value === 'Completed' &&
                                    <Button variant="contained" className="invoices-list-btn completed-btn" onClick={this.onClickShowCompletedButton}>
                                        <CheckIcon className="mr-2 bold" />{value}
                                    </Button>
                                }
                                {value === 'Invoices' &&
                                    <Button variant="contained" className="invoices-list-btn invoices-btn" onClick={this.onClickShowCompletedButton}>
                                        <DoneAllIcon className="mr-2" />{value}
                                    </Button>
                                }
                                {value === 'Pendding' &&
                                    <Button variant="contained" className="invoices-list-btn pendding-btn" onClick={this.onClickShowCompletedButton}>
                                        <WatchLaterIcon className="mr-2" />{value}
                                    </Button>
                                }
                                {value === 'Invoices Sent' &&
                                    <Button variant="contained" className="invoices-list-btn invoices-btn" onClick={this.onClickShowCompletedButton}>
                                        <DoneAllIcon className="mr-2" />{value}
                                    </Button>
                                }
                                <IconButton className="ml-4 p-2"><MoreVertIcon /></IconButton>
                            </td>
                        }
                    },
                ],
                data: [
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Completed',
                        colorCode: '#000',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Invoices',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Pendding',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Completed',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Pendding',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Invoices Sent',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Pendding',
                    },
                    {
                        SNo: '#INV-0001234',
                        RequisitionsNo: 'June 1,2020, 08:22 AM',
                        RequestDepartment: 'Higspeed Studios',
                        RequestDate: ' higspeed@mail.com ',
                        Requestor: '$650,036.34',
                        RequisitionsTotal: 'Invoices',
                    },
                ]
            },
            tableData: [
                {
                    IteamDescription: "Iteam 1",
                    Qty: 6,
                    Rate: "60.00",
                    Amount: "$ 360.00"
                },
                {
                    IteamDescription: "Iteam 2",
                    Qty: 40,
                    Rate: "35.00",
                    Amount: "$ 15,435.00"
                },
                {
                    IteamDescription: "Iteam 3",
                    Qty: 10,
                    Rate: "75.00",
                    Amount: "$ 900.00"
                },
                {
                    IteamDescription: "Iteam 4",
                    Qty: 18,
                    Rate: "22.00",
                    Amount: "$ 1,188.00"
                },
            ]
        }
    }
    displayTableData = () => {
        const { tableData } = this.state;
        let retData = [];
        for (let i = 0; i < tableData.length; i++) {
            let data = tableData[i];
            retData.push(
                <tr key={data.id}>
                    <td>{data.IteamDescription}</td>
                    <td>{data.Qty}</td>
                    <td>{data.Rate}</td>
                    <td className="text-right">{data.Amount}</td>
                </tr>
            )
        }
        return retData;
    }

    onClickShowCompletedButton = () => {
        const { CompletedButton } = this.state;
        let Button = CompletedButton;
        this.setState({
            CompletedButton: !Button,
        })
    }

    handleStateChange = (e) => {
        const { name, value } = e.target;
        const { requiData } = this.state;
        requiData[name] = value;
        this.setState({
            requiData,
        });
    };



    validate = (isSubmitted) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        let isValid = true;
        const retData = {
            status: validObj,
            reqno: validObj,
            depart: validObj,
            isValid
        };
        if (isSubmitted) {
            const { requiData } = this.state;
            if (!requiData.status) {
                retData.status = {
                    isValid: false,
                    message: "Filter By Status  is required"
                };
                isValid = false;
            }
            if (!requiData.reqno) {
                retData.reqno = {
                    isValid: false,
                    message: "Requisitions no is required"
                };
                isValid = false;
            }
            if (!requiData.depart) {
                retData.depart = {
                    isValid: false,
                    message: "Department is required"
                };
                isValid = false;
            }


        }
        retData.isValid = isValid;
        return retData;
    };

    render() {
        const { requiData, isSubmitted, CompletedButton } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                {CompletedButton === true ?
                    <>
                        <div className="groceries-content">
                            <div className="head-top">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                                        <div className="head-left-content">
                                            <IconButton className="head-icon">
                                                <KeyboardBackspaceIcon />
                                            </IconButton>
                                            <h4>Invoice</h4>
                                            <p>#INV-00012456</p>
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
                                                    <li><a href="mailto: akbar.khan@synectiks.com">akbar.khan@synectiks.com</a></li>
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
                                            <p>Sturday October 24th, 2020</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
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
                                                            {this.displayTableData()}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </SimpleBar>
                                        </div>
                                    </div>
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
                                                    <span><b>$17,883.00</b></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="invoices-content">
                            <div className="invoices-head-section">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="heading">
                                            <h3>Invoices List</h3>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="search-bar">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search here" />
                                                <button><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="invoices-tabale">
                                <Table valueFromData={this.state.approvedVendoreTableData} perPageLimit={6} visiblecheckboxStatus={true}
                                    isLoading={false}
                                    tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                            </div>
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default Invoices;