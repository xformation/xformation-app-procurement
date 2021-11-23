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
import { connect } from 'react-redux';
import { invoiceServices } from '../../_services/invoice.services';
import { invoiceAction } from '../../_actions/invoice.actions';
import { status } from "../../_constants";
import { commonFunctions} from '../../_utilities';


class Invoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: "",
                CompletedButton: false,
                searchValue: '',
                approvedData: [],
                duplicateApprovedData: []

            },
            approvedVendoreTableData: {
                columns: [
                    {
                        label: 'ID invoices',
                        key: 'RequisitionsNo',
                        renderCallback: (value) => {
                            return <td><span className={'s-no'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Due Date',
                        key: 'RequestDate',
                        renderCallback: (value) => {
                            return <td><span className={'RequestDate'}> <div className="graphic"></div>{commonFunctions.convertDateToString(new Date(value))}</span></td>
                        }
                    },
                    {
                        label: 'Department',
                        key: 'RequestDepartment',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}><Button className="mailicon-btn"><MailIcon /></Button>{value}</span></td>
                        }
                    },
                    {
                        label: 'Contact',
                        key: 'Requestor',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Amount',
                        key: 'RequisitionsTotal',
                        renderCallback: (value) => {
                            return <td><span className={'btn details-btn'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Status',
                        key: 'status',
                        renderCallback: (value, row) => {
                            return <td>
                                {value === 'Completed' &&
                                    <Button variant="contained" className="invoices-list-btn completed-btn" onClick={() => this.onClickShowCompletedButton(row.RequisitionsNo)}>
                                        <CheckIcon className="mr-2 bold" />{value}
                                    </Button>
                                }
                                {value === 'Invoices' &&
                                    <Button variant="contained" className="invoices-list-btn invoices-btn" onClick={(id) => this.onClickShowCompletedButton(row.RequisitionsNo)}>
                                        <DoneAllIcon className="mr-2" />{value}
                                    </Button>
                                }
                                {value === 'Pendding' &&
                                    <Button variant="contained" className="invoices-list-btn pendding-btn" onClick={(id) => this.onClickShowCompletedButton(row.RequisitionsNo)}>
                                        <WatchLaterIcon className="mr-2" />{value}
                                    </Button>
                                }
                                {value === 'Invoices Sent' &&
                                    <Button variant="contained" className="invoices-list-btn invoices-btn" onClick={(id) => this.onClickShowCompletedButton(row.RequisitionsNo)}>
                                        <DoneAllIcon className="mr-2" />{value}
                                    </Button>
                                }
                                <IconButton className="ml-4 p-2"><MoreVertIcon /></IconButton>
                            </td>
                        }
                    },
                ],
                data: []
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

    componentDidMount() {
        this.props.dispatch(invoiceAction.searchInvoice())
    }

    componentDidUpdate(prevProps, prevState) {
        const { approvedVendoreTableData } = this.state;
        if (prevProps.search_invoice_status !== this.props.search_invoice_status && this.props.search_invoice_status === status.SUCCESS) {
            if (this.props.searchInvoice && this.props.searchInvoice.length > 0) {
                approvedVendoreTableData.data = this.props.searchInvoice;
            }
            this.setState({
                approvedVendoreTableData,
                duplicateApprovedData: this.props.searchInvoice,

            })
        }
    }

    onSearchChange = (e) => {
        // debugger/
        let { value } = e.target
        const { duplicateApprovedData, approvedVendoreTableData } = this.state
        let queryResult = []
        if (duplicateApprovedData && duplicateApprovedData.length > 0) {
            if (value.trim()) {
                for (let i = 0; i < duplicateApprovedData.length; i++) {
                    let approvedData = duplicateApprovedData[i]
                    if (approvedData["RequestDepartment"].toLowerCase().indexOf(value) !== -1 ||
                        approvedData["RequestDepartment"].indexOf(value) !== -1) {
                        queryResult.push(approvedData)
                    }
                }
                approvedVendoreTableData.data = queryResult;
            } else {
                approvedVendoreTableData.data = duplicateApprovedData;
            }
        }
        this.setState({
            approvedVendoreTableData
        })
    }

    onClickShowCompletedButton = (id) => {
        this.props.history.push(`/postlogin/viewinvoice/3`)

    }

    handleStateChange = (e) => {
        const { name, value } = e.target;
        const { requiData } = this.state;
        requiData[name] = value;
        this.setState({
            requiData,
        });
    }

    render() {
        const { approvedVendoreTableData } = this.state;
        return (
            <div className="main-content">
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
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search here" onChange={this.onSearchChange} />
                                        <button><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoices-tabale">
                        <Table valueFromData={{ columns: approvedVendoreTableData.columns, data: approvedVendoreTableData.data }} searchValue={this.state.searchValue} perPageLimit={6} visiblecheckboxStatus={true}
                            isLoading={this.props.search_invoice_status == status.IN_PROGRESS}
                            tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="RequestDepartment" showingLine="Showing %start% to %end% of %total% Tickets" />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { update_invoice_status,
        updateInvoice,
        searchInvoice,
        search_invoice_status,
        get_invoice_status,
        getInvoice,
        delete_invoice_status,
        deleteInvoice,
        add_invoice_status,
        addInvoice } = state.invoice
    return {
        update_invoice_status,
        updateInvoice,
        searchInvoice,
        search_invoice_status,
        get_invoice_status,
        getInvoice,
        delete_invoice_status,
        deleteInvoice,
        add_invoice_status,
        addInvoice

    }
}
export default connect(mapStateToProps)(Invoices);