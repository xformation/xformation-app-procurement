import React, { Component } from "react"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import { RangeDatePicker } from '@y0c/react-datepicker';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Table from '../../Table/Table';
class RequisitionTracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: ""
            },
            tableData: {
                columns: [
                    {
                        label: 'S No',
                        key: 'SNo',
                        renderCallback: (value) => {
                            return <td><span className={'s-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Requisitions No',
                        key: 'RequisitionsNo',
                        renderCallback: (value) => {
                            return <td><span className={'requisitions-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Request Date',
                        key: 'RequestDate',
                        renderCallback: (value) => {
                            return <td><span className={'date'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Request Department',
                        key: 'RequestDepartment',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span><span className={'department-text'}>{'Department'}</span></td>
                        }
                    },
                    {
                        label: 'Requestor',
                        key: 'Requestor',
                        renderCallback: (value) => {
                            return <td><span className={'requestor'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Requisitions Total',
                        key: 'RequisitionsTotal',
                        renderCallback: (value) => {
                            return <td><span className="price">{value}</span></td>
                        }
                    },
                    {
                        label: 'Status',
                        key: 'Status',
                        renderCallback: (value) => {
                            return <td><span className="status">{value}</span> <IconButton><MoreVertIcon /></IconButton></td>
                        }
                    },

                ],
                data: [
                    {
                        SNo: '1.',
                        RequisitionsNo: '#INV-0001234',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'HR and Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 650,036.34',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '2.',
                        RequisitionsNo: '#INV-0001235',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 650,036.34',
                        Status: 'Caac Committee'
                    },
                    {
                        SNo: '3.',
                        RequisitionsNo: '#INV-0001236',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 2,456,221.55',
                        Status: 'Vendor Selected'
                    },
                    {
                        SNo: '5.',
                        RequisitionsNo: '#INV-0001236',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 1,672.45',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '6.',
                        RequisitionsNo: '#INV-0001237',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 800,561.00',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '7.',
                        RequisitionsNo: '#INV-0001238',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 245,662.32',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '8.',
                        RequisitionsNo: '#INV-0001239',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 998.45',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '9.',
                        RequisitionsNo: '#INV-0001234',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 700.00',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '7.',
                        RequisitionsNo: '#INV-0001238',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 245,662.32',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '8.',
                        RequisitionsNo: '#INV-0001239',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 998.45',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '9.',
                        RequisitionsNo: '#INV-0001234',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 700.00',
                        Status: 'LPO Generated'
                    },
                    {
                        SNo: '2.',
                        RequisitionsNo: '#INV-0001235',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 650,036.34',
                        Status: 'Caac Committee'
                    },
                    {
                        SNo: '3.',
                        RequisitionsNo: '#INV-0001236',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 2,456,221.55',
                        Status: 'Vendor Selected'
                    },
                    {
                        SNo: '5.',
                        RequisitionsNo: '#INV-0001236',
                        RequestDate: 'June 1, 2020, 08:22 AM',
                        RequestDepartment: 'PSDS Admin',
                        Requestor: 'james kerneal',
                        RequisitionsTotal: '$ 1,672.45',
                        Status: 'LPO Generated'
                    },
                ]

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
        const { requiData, isSubmitted } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="requisitions-tracker">
                    <div className="heading">
                        <h4>Requisitions Tracker</h4>
                    </div>
                    <div className="requisitions-filter">
                        <div className="form-row">
                            <div className="col-5">
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
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Requisitions no</label>
                                    <input placeholder="2021/21/12" name="reqno" value={requiData.reqno}
                                        onChange={this.handleStateChange} isvalid={errorData.reqno.isValid} />
                                    <span className="text-danger">{errorData.reqno.message}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Date Range</label>
                            <RangeDatePicker startPlaceholder="2021-06-01" endPlaceholder="2021-06-10" />
                            <CalendarTodayTwoToneIcon className="calendar-icon" />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <FormControl className="select-department filter-status">
                                <NativeSelect name="depart" isvalid={errorData.depart.isValid} value={requiData.depart} onChange={this.handleStateChange}>
                                    <option value="">-Select-</option>
                                    <option value={10}>abc</option>
                                    <option value={20}>def</option>
                                    <option value={30}>abc</option>
                                </NativeSelect>
                            </FormControl>
                            <span className="text-danger">{errorData.depart.message}</span>
                        </div>
                        <div className="requisitions-button">
                            <Button variant="contained" className="new-item-btn" disableElevation onClick={this.handleClickMethod}>
                                Search
                            </Button>
                        </div>
                    </div>
                    <Table valueFromData={this.state.tableData} perPageLimit={6} visiblecheckboxStatus={false}
                        tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                </div>
            </div>
        )
    }

}
export default RequisitionTracker;