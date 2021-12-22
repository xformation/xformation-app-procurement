import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CreateIcon from '@material-ui/icons/Create';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from "@material-ui/core/Button";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import bigWindIcon from '../../assets/images/big-wind-icon.png';
import { connect } from 'react-redux';
import { invoiceAction } from '../../_actions'
import { status } from "../../_constants";
import { commonFunctions } from '../../_utilities';
class AddInvoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            invoiceData: {},
            invoiceFile: {},
            amount: '',
            description:''

        }
    }

    componentDidMount() { this.props.dispatch(invoiceAction.getNewInvoice()) }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.get_new_invoice_status !== prevProps.get_new_invoice_status && this.props.get_new_invoice_status === status.SUCCESS) {
            console.log(this.props.get_new_invoice_status)
            if (this.props.newInvoiceData) {
                this.setState({ invoiceData: this.props.newInvoiceData })
            }
        }
    }

    handleItemDescription = (invoiceData) => {
        let table = [];
        if (invoiceData && invoiceData.length > 0) {
            let items;
            let total;
            for (let i = 0; i < invoiceData.length; i++) {
                items = invoiceData[i]
                total = items.Quantity * Math.floor(items.Price);
                table.push(
                    <tr>
                        <td>{items.ItemDescription}</td>
                        <td>{items.Quantity}</td>
                        <td>{Math.floor(items.Price)}</td>
                        <td>${total}</td>
                    </tr>
                )
            }
        }
        return table
    }
    handleFileChange = (e) => {
        const { files } = e.target
        this.setState({ invoiceFile: files })
    }
    handleFileRemove = () => {
        let { invoiceFile } = this.state;
        this.setState({
            invoiceFile: {}
        })
        console.log(invoiceFile)
    }
    handleChange = (e) => {
        let{description , amount}=this.state;
        const { value , name } = e.target;
        if (name === "description"){
            description = value 
        }
        else{ amount = value }
        this.setState({description, amount})
    }
    render() {
        const { invoiceData, invoiceFile } = this.state
        if (invoiceFile.length>0){
        }
        return (
            <div className="main-content">
                <div className="d-block add-invoices-content">
                    <div className="d-block heading">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="d-inline-block mr-3">
                                        <IconButton>
                                            <ArrowBackIcon />
                                        </IconButton>
                                    </div>
                                    <h4 className="d-inline-block mb-0">New Invoices</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-block px-3 py-4">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="d-flex w-100 flex-wrap select-client">
                                    <div className="d-block w-100 heading">
                                        <h5>Select Client</h5>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center w-100 big-wind-box">
                                        <div className="d-flex justify-content-center align-items-center icon">
                                            <img src={bigWindIcon} alt='' />
                                        </div>
                                        <div className="d-flex flex-wrap text">
                                            {invoiceData && invoiceData.ComapanyName && <strong>{invoiceData.ComapanyName}</strong>}
                                            <p>Online Shop</p>
                                        </div>
                                        <div className="d-flex buttons">
                                            <IconButton className="CreateIcon">
                                                <CreateIcon />
                                            </IconButton>
                                            <IconButton className="ExpandMoreIcon">
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center flex-wrap w-100 client-contant">
                                        <div className="d-flex justify-content-start align-items-start w-100 contant">
                                            <div className="d-flex justify-content-center align-items-center icon">
                                                <RoomIcon />
                                            </div>
                                            <div className="d-flex flex-wrap text">
                                                <strong>Address</strong>
                                                {invoiceData && invoiceData.Address && <p>{invoiceData.Address}</p>}
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-start w-100 contant">
                                            <div className="d-flex justify-content-center align-items-center icon">
                                                <EmailIcon />
                                            </div>
                                            <div className="d-flex flex-wrap text">
                                                <strong>Email</strong>
                                                {invoiceData && invoiceData.Email && <p>{invoiceData.Email}</p>}
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-start w-100 contant">
                                            <div className="d-flex justify-content-center align-items-center icon">
                                                <CallIcon />
                                            </div>
                                            <div className="d-flex flex-wrap text">
                                                <strong>Telephone</strong>
                                                {invoiceData && invoiceData.ContactNumber && <p>{invoiceData.ContactNumber}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center flex-wrap w-100 due-date">
                                        <div className="d-flex icon">
                                            <InsertInvitationIcon className="InsertInvitationIcon" />
                                        </div>
                                        <div className="d-flex flex-wrap text">
                                            <strong>Due Date</strong>
                                            <p>October 31th 2020</p>
                                        </div>
                                        <div className="d-flex buttons">
                                            <IconButton className="ExpandMoreIcon">
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="d-block w-100 pl-5">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="d-flex flex-wrap invoiceno-box">
                                                <div className="d-flex w-100 heading">
                                                    <h5>Invoice No</h5>
                                                </div>
                                                <div className="d-flex w-100 invoiceno-control">
                                                    <input type="text" className="form-control" value="#INV-0001234" disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex flex-wrap invoiceno-box">
                                                <div className="d-flex w-100 heading">
                                                    <h5>Amount (USD)</h5>
                                                </div>
                                                <div className="d-flex w-100 invoiceno-control">
                                                    <input type="number" className="form-control" name="amount" placeholder="5,000.0" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block w-100 pl-5 pt-4 item-desription">
                                    <div className="d-block w-100 heading">
                                        Item desription
                                    </div>
                                    <div className="d-block w-100 table">
                                        <table className="w-100">
                                            <thead>
                                                <tr>
                                                    <th>Item desription</th>
                                                    <th>Quantity</th>
                                                    <th>Rate</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.handleItemDescription(invoiceData.ItemDesription)}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-block w-100 type-desription">
                                        <textarea placeholder="Type desription hare..." name ="description"onChange={this.handleChange}>
                                            
                                        </textarea>
                                    </div>
                                </div>
                                <div className="d-block w-100 pl-5 pt-4 attach-file">
                                    <div className="d-block w-100 heading">
                                        Attach File
                                    </div>
                                    <div className="d-block w-100">
                                        <div className="d-inline-block attach">
                                            <input
                                                type="file"
                                                placeholder="Upload files (PDF,DOC,PPT,JPG,PNG)"
                                                accept=" .pdf , .doc , .ppt , .jpg , .png"
                                                name="requisitionFile"
                                                onChange={this.handleFileChange}
                                            />
                                            <CloudUploadIcon className="icon" />
                                            <div className="file-content">
                                                <p>Upload file</p>
                                                <span>PDF, DOC, PPT, JPG, PNG</span>
                                            </div>
                                        </div>
                                        <div className="d-inline-block attach-files">
                                        { invoiceFile.length>0 &&<ul>
                                                <li>
                                                    <div className="icon">
                                                        <InsertDriveFileIcon />
                                                    </div>
                                                    <div className="attach-name-size">
                                                   <p>{invoiceFile[0].name}</p>
                                                        <span>{invoiceFile[0].size}</span>
                                                    </div>
                                                    <div className="CancelIcon">
                                                        <CancelIcon onClick={() => this.handleFileRemove()} />
                                                    </div>
                                                </li>
                                            </ul>}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block w-100 pl-5 pt-5 invoice-buttons">
                                    <Button
                                        variant="contained"
                                        className="primary-btn"
                                    >
                                        <AllInboxIcon /> Send Invoice
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className="default-btn"
                                    >
                                        Save to later
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
    const { get_new_invoice_status, newInvoiceData } = state.invoice;
    return { get_new_invoice_status, newInvoiceData }
}
export default connect(mapStateToProps)(AddInvoices);