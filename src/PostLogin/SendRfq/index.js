import React, { Component } from "react"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import { RangeDatePicker, DatePicker } from '@y0c/react-datepicker';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Table from '../../Table/Table';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class sendRfq extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: "",
                ViewDetail: false,
            },
            vendoreTableData: {
                columns: [
                    {
                        label: 'S No',
                        key: 'SNo',
                        renderCallback: (value) => {
                            return <td><span className={'s-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Requisition No',
                        key: 'RequisitionsNo',
                        renderCallback: (value) => {
                            return <td><span className={'requisitions-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Request Dept',
                        key: 'RequestDate',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Requisition Title',
                        key: 'RequestDepartment',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Request Date',
                        key: 'Requestor',
                        renderCallback: (value) => {
                            return <td><span className={'requestor'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Requisition Total',
                        key: 'RequisitionsTotal',
                        renderCallback: (value) => {
                            return <td><span className="department-value">{value}</span></td>
                        }
                    },
                    {
                        label: 'Carrency',
                        key: 'carrency',
                        renderCallback: (value) => {
                            return <td><span className="department-value">{value}</span></td>
                        }
                    },
                    {
                        label: 'Status',
                        key: 'Status',
                        renderCallback: (value) => {
                            return <td><span className="department-value">{value}</span></td>
                        }
                    },
                    {
                        label: 'Details',
                        key: 'Details',
                        renderCallback: (value) => {
                            return <td><button className="btn details-btn" onClick={this.onClickShowViewDetails}  >{value}</button></td>
                        }
                    },
                    {
                        label: 'RFQ',
                        key: 'RFQ',
                        renderCallback: (value) => {
                            return <td><Button className="rfq-btn">{value}</Button></td>
                        }
                    },


                ],
                data: [
                    {
                        SNo: '1.',
                        RequisitionsNo: '9681-25',
                        RequestDepartment: 'Office Management',
                        RequestDate: ' IT Infrastructure ',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '200000',
                        carrency: 'INR',
                        Details: 'View Details',
                        Status: 'Approved',
                        RFQ: 'Send RFQ'
                    },
                    {
                        SNo: '2.',
                        RequisitionsNo: '9681-25',
                        RequestDepartment: 'Office Management',
                        RequestDate: ' IT Infrastructure ',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '200000',
                        carrency: 'INR',
                        Details: 'View Details',
                        Status: 'Approved',
                        RFQ: 'Send RFQ'
                    },
                    {
                        SNo: '3.',
                        RequisitionsNo: '9681-25',
                        RequestDepartment: 'Office Management',
                        RequestDate: ' IT Infrastructure ',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '200000',
                        carrency: 'INR',
                        Details: 'View Details',
                        Status: 'Approved',
                        RFQ: 'Send RFQ'
                    },
                ]
            },
            approvedVendoreTableData: {
                columns: [
                    {
                        label: 'S No',
                        key: 'SNo',
                        renderCallback: (value) => {
                            return <td><span className={'s-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Vendor No',
                        key: 'RequisitionsNo',
                        renderCallback: (value) => {
                            return <td><span className={'requisitions-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Company Name',
                        key: 'RequestDate',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Bussiness Type',
                        key: 'RequestDepartment',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Detail of Service',
                        key: 'Requestor',
                        renderCallback: (value) => {
                            return <td><span className={'requestor'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Email Address',
                        key: 'RequisitionsTotal',
                        renderCallback: (value) => {
                            return <td><span className="btn details-btn">{value}</span></td>
                        }
                    },
                    {
                        label: 'Telephone',
                        key: 'carrency',
                        renderCallback: (value) => {
                            return <td><span className="department-value">{value} <IconButton><MoreVertIcon /></IconButton></span></td>
                        }
                    },
                ],
                data: [
                    {
                        SNo: '1.',
                        RequisitionsNo: 'Vn06496',
                        RequestDepartment: 'CP Limited',
                        RequestDate: ' Construction ',
                        Requestor: 'All IT Solution',
                        RequisitionsTotal: 'cplimited@gmail.com',
                        carrency: '040-25861763',
                    },
                    {
                        SNo: '2.',
                        RequisitionsNo: 'Vn05682',
                        RequestDepartment: 'GoldBerg Limited',
                        RequestDate: ' ISP ',
                        Requestor: 'Internet',
                        RequisitionsTotal: 'Goldberglimited@gmail.com',
                        carrency: '040-2516183',
                    },
                    {
                        SNo: '3.',
                        RequisitionsNo: 'Vn05682',
                        RequestDepartment: 'Plucom Technology',
                        RequestDate: 'Cloud Services',
                        Requestor: 'Internet',
                        RequisitionsTotal: 'Plucom@mail.com',
                        carrency: '040-2516183',
                    },
                    {
                        SNo: '4.',
                        RequisitionsNo: 'Vn05682',
                        RequestDepartment: 'GoldBerg Limited',
                        RequestDate: ' Software Consults  ',
                        Requestor: 'Internet',
                        RequisitionsTotal: 'Goldberglimited@gmail.com',
                        carrency: '040-2516183',
                    },
                    {
                        SNo: '5.',
                        RequisitionsNo: 'Vn05682',
                        RequestDepartment: 'GoldBerg Limited',
                        RequestDate: ' ISP ',
                        Requestor: 'Internet',
                        RequisitionsTotal: 'Goldberglimited@gmail.com',
                        carrency: '040-2516183',
                    },
                ]
            }
        }
    }

    onClickShowViewDetails = () => {
        const { ViewDetail } = this.state;
        let detail = ViewDetail;
        this.setState({
            ViewDetail: !detail,
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

    handleClickMethod = (event) => {
        const { requiData } = this.state;
        event.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (errorData.isValid) {
            const sendReqData = {
                status: requiData.status,
                reqno: requiData.reqno,
                depart: requiData.depart

            }
            console.log(sendReqData);
        }
    }

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
        const { requiData, isSubmitted, ViewDetail } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="Sendrfq-content">
                    {ViewDetail === true ?
                        <>
                            <div className="heading">
                                <h4>Send RFQ to Vendors</h4>
                            </div>
                            <div className="requisitions-filter vendors">
                                <div className="form-row">
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Requisiton No.</label>
                                            <DatePicker placeholder="02/03/2021" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Date Created</label>
                                            <DatePicker placeholder="02/03/2021 10:45:35 PM" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Requestor</label>
                                            <input placeholder="Franklin" name="reqno" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Time Span</label>
                                            <input placeholder="28 Days Ago" name="reqno" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form">
                                            <div className="form-group">
                                                <label>Department</label>
                                                <FormControl className="select-department">
                                                    <NativeSelect name="status" >
                                                        <option value="">IT Infrastructure</option>
                                                        <option value={10}>abc</option>
                                                        <option value={20}>def</option>
                                                        <option value={30}>abc</option>
                                                    </NativeSelect>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <input placeholder="Approved" name="reqno" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Heard</label>
                                            <input placeholder="Director/ PSDS Admin" name="reqno" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Last Updated</label>
                                            <input placeholder="" name="reqno" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="requisiton-items">
                                <h4 className="mb-3">Requisiton Items</h4>
                                <div className="form-row">
                                    <div className="col-10">
                                        <SimpleBar>
                                            <div className="item-detail">
                                                <table width="100%">
                                                    <thead className="item-content texr-center">
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Items Description</th>
                                                            <th>Quantity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="texr-center">
                                                        <tr>
                                                            <td>021</td>
                                                            <td>Hp Server For IT Team</td>
                                                            <td>2</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </SimpleBar>
                                    </div>
                                </div>
                            </div>
                            <div className="approved-vendor">
                                <h4>Select From Approved vendor</h4>
                                <div className="form-row">
                                    <div className="col-10">
                                        <div className="form">
                                            <div className="form-group">
                                                <label>Filter Vendors</label>
                                                <FormControl className="select-department">
                                                    <NativeSelect name="status" >
                                                        <option value="">-Select-</option>
                                                        <option value={10}>abc</option>
                                                        <option value={20}>def</option>
                                                        <option value={30}>abc</option>
                                                    </NativeSelect>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Table valueFromData={this.state.approvedVendoreTableData} perPageLimit={6} visiblecheckboxStatus={true}
                                tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                                 <div className="select-vendor-button">
                                        <Button variant="contained" className="new-item-btn" disableElevation onClick={this.handleClickMethod}>
                                            Send QRF to Selected Vendors 
                                        </Button>
                                    </div>
                        </>
                        :
                        <>
                            <div className="heading">
                                <h4>Send RFQ to Vendors</h4>
                            </div>
                            <div className="requisitions-filter">
                                <div className="form">
                                    <div className="form-group">
                                        <label>Filter By Status</label>
                                        <FormControl className="select-department">
                                            <NativeSelect name="status" value={requiData.status}
                                                onChange={this.handleStateChange} isvalid={errorData.status.isValid}>
                                                <option value="">-Select-</option>
                                                <option value={10}>abc</option>
                                                <option value={20}>def</option>
                                                <option value={30}>abc</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <span className="text-danger">{errorData.status.message}</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Date Range</label>
                                    <RangeDatePicker startPlaceholder="2021-06-01" endPlaceholder="2021-06-10" />
                                    <CalendarTodayTwoToneIcon className="calendar-icon" />
                                    <div className="requisitions-button">
                                        <Button variant="contained" className="new-item-btn" disableElevation onClick={this.handleClickMethod}>
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Table valueFromData={this.state.vendoreTableData} perPageLimit={6} visiblecheckboxStatus={false}
                                tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                        </>
                    }
                </div>

            </div>
        )
    }

}


export default sendRfq;