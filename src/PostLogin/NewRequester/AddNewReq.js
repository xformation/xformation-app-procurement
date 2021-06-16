import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
class AddNewRequester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AddRequiData: {
                ReqNo: "",
                Requester: "",
                FinancialYear: "",
                Department: "",
                Location: "",
                RequisitionType: "",
                Currency: "",
                Priority: "",
                GeneralText: "",
                extraFile: "",
                saveReq: "",
                sendApproval: ""

            },
            tableData: [
                {
                    id: 1,
                    ReqNo: 31826,
                    RequItem: "HP Laptop 500gb",
                    Quantity: 2,
                    Rate: 100000,
                    Amount: 200000
                },
                {
                    id: 2,
                    ReqNo: 32827,
                    RequItem: "APPLE Laptop 500gb",
                    Quantity: 3,
                    Rate: 300000,
                    Amount: 300000
                },
                {
                    id: 3,
                    ReqNo: 33828,
                    RequItem: "Lenovo Laptop 500gb",
                    Quantity: 4,
                    Rate: 400000,
                    Amount: 400000
                }
            ]
        }
    }


    displayTableData = () => {
        const { tableData } = this.state;
        let retData = [];
        for (let i = 0; i < tableData.length; i++) {
            let data = tableData[i];
            retData.push(
                <tr>
                    <td>{data.id}</td>
                    <td>{data.ReqNo}</td>
                    <td>{data.RequItem}</td>
                    <td>{data.Quantity}</td>
                    <td>{data.Rate}</td>
                    <td>{data.Amount}</td>
                </tr>
            )
        }
        return retData;
    }

    handleGstStateChange = (e) => {
        const { name, value, checked } = e.target;
        const { AddRequiData } = this.state;
        if (e.target.type === 'checkbox') {
            AddRequiData[name] = checked;
        } else {
            AddRequiData[name] = value;
        }
        this.setState({
            AddRequiData
        });
    };


    handleAddRequiDataClick = (event) => {
        const { AddRequiData } = this.state;
        event.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (errorData.isValid) {
            const sendData = {
                ReqNo: AddRequiData.ReqNo,
                Requester: AddRequiData.Requester,
                FinancialYear: AddRequiData.FinancialYear,
                Department: AddRequiData.Department,
                Location: AddRequiData.Location,
                RequisitionType: AddRequiData.RequisitionType,
                Currency: AddRequiData.Currency,
                Priority: AddRequiData.Priority,
                GeneralText: AddRequiData.GeneralText,
                extraFile: AddRequiData.extraFile,
                saveReq: AddRequiData.saveReq,
                sendApproval: AddRequiData.sendApproval,
            }
            console.log(sendData);
        }
    }


    validate = (isSubmitted) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        let isValid = true;
        const retData = {
            ReqNo: validObj,
            Requester: validObj,
            FinancialYear: validObj,
            Department: validObj,
            Location: validObj,
            RequisitionType: validObj,
            Currency: validObj,
            Priority: validObj,
            GeneralText: validObj,
            extraFile: validObj,
            saveReq: validObj,
            sendApproval: validObj,
            isValid
        };
        if (isSubmitted) {
            const { AddRequiData } = this.state;
            if (!AddRequiData.ReqNo) {
                retData.ReqNo = {
                    isValid: false,
                    message: "Requisition No is required"
                };
                isValid = false;
            }
            if (!AddRequiData.Requester) {
                retData.Requester = {
                    isValid: false,
                    message: "Requester is required"
                };
                isValid = false;
            }
            if (!AddRequiData.FinancialYear) {
                retData.FinancialYear = {
                    isValid: false,
                    message: "FinancialYear is required"
                };
                isValid = false;
            }
            if (AddRequiData.FinancialYear.length > 4) {
                retData.FinancialYear = {
                    isValid: false,
                    message: "FinancialYear Must Be 4 Digit"
                };
                isValid = false;
            }

            if (!AddRequiData.Department) {
                retData.Department = {
                    isValid: false,
                    message: "Department  is required"
                };
                isValid = false;
            }
            if (!AddRequiData.Location) {
                retData.Location = {
                    isValid: false,
                    message: "Location  is required"
                };
                isValid = false;
            }
            if (!AddRequiData.RequisitionType) {
                retData.RequisitionType = {
                    isValid: false,
                    message: " RequisitionType is required"
                };
                isValid = false;
            }
            if (!AddRequiData.Currency) {
                retData.Currency = {
                    isValid: false,
                    message: "Currency  is required"
                };
                isValid = false;
            }
            if (!AddRequiData.Priority) {
                retData.Priority = {
                    isValid: false,
                    message: "Priority  is required"
                };
                isValid = false;
            }
            if (!AddRequiData.GeneralText) {
                retData.GeneralText = {
                    isValid: false,
                    message: "GeneralText is required"
                };
                isValid = false;
            }
            if (!AddRequiData.extraFile) {
                retData.extraFile = {
                    isValid: false,
                    message: "extraFile is required"
                };
                isValid = false;
            }
            if (!AddRequiData.saveReq) {
                retData.saveReq = {
                    isValid: false,
                    message: "saveReq is required"
                };
                isValid = false;
            }
            if (!AddRequiData.sendApproval) {
                retData.sendApproval = {
                    isValid: false,
                    message: "sendApproval is required"
                };
                isValid = false;
            }
        }
        retData.isValid = isValid;
        return retData;
    };


    render() {
        const { AddRequiData, isSubmitted } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="new-req-section">
                    <div className="d-block heading">
                        <h5>Add New Requisition</h5>
                        <div className="heading-buttons">
                            <Button variant="outlined" className="draft-btn"><span><SaveIcon /></span>Save to Draft</Button>
                            <Button variant="outlined" className="edit-btn"><CreateIcon />Edit</Button>
                        </div>
                    </div>
                    <div className="requisition-form">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                                <div className="requisition-form-left">
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Requisition No.</label>
                                            <input type="number" name="ReqNo" value={AddRequiData.ReqNo} placeholder="106738-1"
                                                onChange={this.handleGstStateChange}
                                                isvalid={errorData.ReqNo.isValid} />
                                        </div>
                                        <span className="text-danger">{errorData.ReqNo.message}</span>
                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Requester</label>
                                            <input type="text" name="Requester" value={AddRequiData.Requester}
                                                onChange={this.handleGstStateChange}
                                                placeholder="Admin/Director" isvalid={errorData.Requester.isValid} />
                                        </div>
                                        <span className="text-danger">{errorData.Requester.message}</span>
                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Financial year</label>
                                            <input type="number" maxlength="4" name="FinancialYear" isvalid={errorData.FinancialYear.isValid} value={AddRequiData.FinancialYear}
                                                onChange={this.handleGstStateChange}
                                                placeholder="2021" />
                                        </div>
                                        <span className="text-danger">{errorData.FinancialYear.message}</span>

                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Department</label>
                                            <FormControl className="select-department">
                                                <NativeSelect name="Department" value={AddRequiData.Department} isvalid={errorData.Department.isValid}
                                                    onChange={this.handleGstStateChange}>
                                                    <option value="">-Select-</option>
                                                    <option value={10}>abc</option>
                                                    <option value={20}>def</option>
                                                    <option value={30}>abc</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </div>
                                        <span className="text-danger">{errorData.Department.message}</span>

                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Location</label>
                                            <input type="text" name="Location" onChange={this.handleGstStateChange}
                                                value={AddRequiData.Location} isvalid={errorData.Location.isValid} />
                                        </div>
                                        <span className="text-danger">{errorData.Location.message}</span>

                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Requisition Type</label>
                                            <FormControl className="select-department">
                                                <NativeSelect name="RequisitionType"
                                                    isvalid={errorData.RequisitionType.isValid} onChange={this.handleGstStateChange} value={AddRequiData.RequisitionType}>
                                                    <option value={10}>Purchase</option>
                                                    <option value={20}>Shell</option>
                                                    <option value={30}>Rent</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </div>
                                        <span className="text-danger">{errorData.RequisitionType.message}</span>

                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Currency</label>
                                            <FormControl className="select-department">
                                                <NativeSelect name="Currency" onChange={this.handleGstStateChange}
                                                    isvalid={errorData.Currency.isValid}
                                                    value={AddRequiData.Currency}>
                                                    <option>100</option>
                                                    <option>200</option>
                                                    <option>300</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </div>
                                        <span className="text-danger">{errorData.Currency.message}</span>

                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <label>Priority</label>
                                            <FormControl className="select-department">
                                                <NativeSelect name="Priority" isvalid={errorData.Priority.isValid} onChange={this.handleGstStateChange} value={AddRequiData.Priority}>
                                                    <option>Normal</option>
                                                    <option>High</option>
                                                    <option>Low</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </div>
                                        <span className="text-danger">{errorData.Priority.message}</span>

                                    </div>
                                    <div className="requester">
                                        <div className="form-group">
                                            <p className="requisition-text">General Purpose for Requisition</p>
                                            <TextareaAutosize className="text-box"
                                                aria-label="maximum height"
                                                placeholder=""
                                                defaultValue=""
                                                name="GeneralText"
                                                value={AddRequiData.GeneralText}
                                                isvalid={errorData.GeneralText.isValid}
                                                onChange={this.handleGstStateChange}
                                            />
                                        </div>
                                        <span className="text-danger">{errorData.GeneralText.message}</span>

                                    </div>
                                    <div className="requester">
                                        <label>Extra Budgetory</label>
                                    </div>
                                    <div className="requester ">
                                        <label>Attach Files</label>
                                        <div className="attach">
                                            <input type="file" placeholder="Upload files (PDF,DOC,PPT,JPG,PNG)" name="extraFile" onChange={this.handleGstStateChange} value={AddRequiData.extraFile} isvalid={errorData.extraFile.isValid} />
                                            <CloudUploadIcon className="icon" />
                                            <div className="file-content">
                                                <p>Upload file</p>
                                                <span>PDF, DOC, PPT, JPG, PNG</span>
                                            </div>
                                        </div>

                                    </div>
                                    <span className="text-danger">{errorData.extraFile.message}</span>

                                    <div className="requester action">
                                        <div className="form-group">
                                            <p className="requisition-text">Action</p>
                                            <div className="requisition-approval">
                                                <div className="requisition">
                                                    <Checkbox checked={AddRequiData.saveReq} name="saveReq" isvalid={errorData.saveReq.isValid} onChange={this.handleGstStateChange} color="primary" name="saveReq" />
                                                    <p>Save Requisition</p>
                                                </div>
                                                <span className="text-danger">{errorData.saveReq.message}</span>

                                                <div className="approval">
                                                    <Checkbox name="sendApproval" checked={AddRequiData.sendApproval} onChange={this.handleGstStateChange} isvalid={errorData.sendApproval.isValid} color="primary" name="sendApproval" value={AddRequiData.sendApproval} />
                                                    <p>Send For Approval</p>
                                                </div>
                                                <span className="text-danger">{errorData.sendApproval.message}</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                                <div className="requisition-form-right">
                                    <Button variant="contained" className="new-item-btn" disableElevation>Add New Item</Button>
                                    <div className="item-heading">
                                        Requisition Items
                                    </div>
                                    <SimpleBar>
                                        <div className="item-detail">
                                            <table width="100%">
                                                <thead className="item-content">
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Rq No</th>
                                                        <th>Requisition Item</th>
                                                        <th>Quantity</th>
                                                        <th>Rate</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.displayTableData()}
                                                </tbody>
                                            </table>
                                        </div>
                                    </SimpleBar>
                                    <div className="requisition-file">
                                        <input type="file" name="file" placeholder="Upload files (PDF,DOC,PPT,JPG,PNG)" />
                                        <CloudUploadIcon className="icon" />
                                        <div className="file-content">
                                            <p>Upload file</p>
                                            <span>PDF, DOC, PPT, JPG, PNG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requisition-submit-button">
                        <Button variant="contained" className="new-item-btn" onClick={this.handleAddRequiDataClick} disableElevation>Send</Button>
                    </div>
                </div>
            </div>
        );

    }
}

export default AddNewRequester;