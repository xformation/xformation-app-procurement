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
            requiData: {},
            ViewDetail: false,
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
                            return <td><span className="department-value">{value} <IconButton className="ml-4 p-2"><MoreVertIcon /></IconButton></span></td>
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
                requisitonNo: requiData.requisitonNo,
                dateCreated: requiData.dateCreated,
                requestor: requiData.requestor,
                timeSpan: requiData.timeSpan,
                department: requiData.department,
                status: requiData.status,
                heard: requiData.heard,
                lastUpdate: requiData.lastUpdate,
                selectVendor: requiData.selectVendor

            }
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
            requisitonNo: validObj,
            dateCreated: validObj,
            requestor: validObj,
            timeSpan: validObj,
            department: validObj,
            status: validObj,
            heard: validObj,
            lastUpdate: validObj,
            selectVendor: validObj,
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
            if (!requiData.requisitonNo) {
                retData.requisitonNo = {
                    isValid: false,
                    message: "Requisitions no is required"
                };
                isValid = false;
            }
            if (!requiData.dateCreated) {
                retData.dateCreated = {
                    isValid: false,
                    message: "Date created is required"
                };
                isValid = false;
            }
            if (!requiData.requestor) {
                retData.requestor = {
                    isValid: false,
                    message: "Requestor is required"
                };
                isValid = false;
            }
            if (!requiData.timeSpan) {
                retData.timeSpan = {
                    isValid: false,
                    message: "Time Span is required"
                };
                isValid = false;
            }
            if (!requiData.department) {
                retData.department = {
                    isValid: false,
                    message: "Department is required"
                };
                isValid = false;
            }
            if (!requiData.status) {
                retData.status = {
                    isValid: false,
                    message: "Status is required"
                };
                isValid = false;
            }
            if (!requiData.heard) {
                retData.heard = {
                    isValid: false,
                    message: "Heard is required"
                };
                isValid = false;
            }
            if (!requiData.lastUpdate) {
                retData.lastUpdate = {
                    isValid: false,
                    message: "Last Update is required"
                };
                isValid = false;
            }
            if (!requiData.selectVendor) {
                retData.selectVendor = {
                    isValid: false,
                    message: "Filter Vendore is required"
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
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Requisiton No.</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <div className="d-flex align-items-center">
                                                    <DatePicker name="requisitonNo" value={requiData.requisitonNo}
                                                        onChange={this.handleStateChange} isvalid={errorData.requisitonNo.isValid} placeholder="02/03/2021" />
                                                </div>
                                                <span className="d-block w-100 text-danger">{errorData.requisitonNo.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Date Created</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <div className="d-flex align-items-center">
                                                    <DatePicker name="dateCreated" value={requiData.dateCreated}
                                                        onChange={this.handleStateChange} isvalid={errorData.dateCreated.isValid} placeholder="02/03/2021 10:45:35 PM" />
                                                </div>
                                                <span className="d-block w-100 text-danger">{errorData.dateCreated.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Requestor</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <input type="text" name="requestor" value={requiData.requestor}
                                                    onChange={this.handleStateChange} isvalid={errorData.requestor.isValid} placeholder="Franklin" />
                                                <span className="d-block w-100 text-danger">{errorData.dateCreated.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Time Span</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <input type="text" name="timeSpan" value={requiData.timeSpan} onChange={this.handleStateChange}
                                                    isvalid={errorData.timeSpan.isValid} placeholder="28 Days Ago" />
                                                <span className="d-block w-100 text-danger">{errorData.timeSpan.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Department</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <FormControl className="select-menu">
                                                    <NativeSelect name="department" value={requiData.department} onChange={this.handleStateChange}
                                                        isvalid={errorData.department.isValid}  >
                                                        <option value="">IT Infrastructure</option>
                                                        <option value={10}>abc</option>
                                                        <option value={20}>def</option>
                                                        <option value={30}>abc</option>
                                                    </NativeSelect>
                                                </FormControl>
                                                <span className="d-block w-100 text-danger">{errorData.department.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Status</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <input name="status" value={requiData.status} onChange={this.handleStateChange}
                                                    isvalid={errorData.status.isValid} placeholder="Approved" />
                                                <span className="d-block w-100 text-danger">{errorData.status.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Heard</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <input name="heard" value={requiData.heard} onChange={this.handleStateChange}
                                                    isvalid={errorData.heard.isValid} placeholder="Director/ PSDS Admin" />
                                                <span className="d-block w-100 text-danger">{errorData.heard.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group row col-form-group">
                                            <label className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-form-label">Last Updated</label>
                                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-form-field">
                                                <input name="lastUpdate" value={requiData.lastUpdate} onChange={this.handleStateChange}
                                                    isvalid={errorData.lastUpdate.isValid} placeholder="" />
                                                <span className="d-block w-100 text-danger">{errorData.lastUpdate.message}</span>
                                            </div>
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
                                <div className="form-group row col-form-group">
                                    <label className="col-sm-12 col-md-4 col-lg-2 col-xl-2 col-form-label">Filter Vendors</label>
                                    <div className="col-sm-12 col-md-8 col-lg-10 col-xl-10 col-form-field">
                                        <FormControl className="select-menu">
                                            <NativeSelect name="selectVendor" value={requiData.selectVendor}
                                                onChange={this.handleStateChange} isvalid={errorData.selectVendor.isValid} >
                                                <option value="">-Select-</option>
                                                <option value={10}>abc</option>
                                                <option value={20}>def</option>
                                                <option value={30}>abc</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <span className="d-block w-100 text-danger">{errorData.selectVendor.message}</span>
                                    </div>
                                </div>
                            </div>
                            <Table valueFromData={this.state.approvedVendoreTableData} perPageLimit={6} visiblecheckboxStatus={true}
                                isLoading={false}
                                tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                            <div className="select-vendor-button">
                                <Button variant="contained" className="primary-btn" disableElevation onClick={this.handleClickMethod}>
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
                                <div className="form-group row col-form-group">
                                    <label className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-form-label">Filter By Status</label>
                                    <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-form-field">
                                        <FormControl className="select-menu">
                                            <NativeSelect name="status" value={requiData.status}
                                                onChange={this.handleStateChange} isvalid={errorData.status.isValid}>
                                                <option value="">-Select-</option>
                                                <option value={10}>abc</option>
                                                <option value={20}>def</option>
                                                <option value={30}>abc</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <span className="d-block w-100 text-danger">{errorData.status.message}</span>
                                    </div>
                                </div>
                                <div className="form-group row col-form-group">
                                    <label className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-form-label">Date Range</label>
                                    <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-form-field">
                                        <div className="d-flex align-items-center">
                                            <RangeDatePicker startPlaceholder="2021-06-01" endPlaceholder="2021-06-10" />
                                            <CalendarTodayTwoToneIcon className="calendar-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row col-form-group">
                                    <label className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-form-label"></label>
                                    <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-form-button">
                                        <Button variant="contained" className="primary-btn" disableElevation onClick={this.handleClickMethod}>
                                            Search
                                        </Button>
                                        <Button variant="contained" className="default-btn ml-2">
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Table
                                valueFromData={this.state.vendoreTableData}
                                perPageLimit={6}
                                visiblecheckboxStatus={false}
                                isLoading = {false}
                                tableClasses={{
                                    table: "ticket-tabel",
                                    tableParent: "tickets-tabel",
                                    parentClass: "all-support-ticket-tabel"
                                }}
                                searchKey="subject"
                                showingLine="Showing %start% to %end% of %total% Tickets"
                            />
                        </>
                    }
                </div>

            </div>
        )
    }

}


export default sendRfq;