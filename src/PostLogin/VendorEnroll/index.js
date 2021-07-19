import React, { Component } from "react"
import Button from '@material-ui/core/Button';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'simplebar/dist/simplebar.min.css';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { DatePicker } from '@y0c/react-datepicker';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import LoopIcon from '@material-ui/icons/Loop';
import IconButton from '@material-ui/core/IconButton';

class VendorEnroll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: "",
            },
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
                <div className="vendor-content">
                    <div className="heading">
                        <h4 className="d-block">Online Enrollment of Vendor</h4>
                        <span className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                    </div>
                    <div className="vendor-enrollment">
                        <div className="form-row">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="user-detail">
                                    <span className="d-block add-contcat-heading">Parsonal Details</span>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">First Name</label>
                                            <input type="text" name="Requester" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">Last Name</label>
                                            <input type="text" name="Requester" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">Gender</label>
                                            <FormControl className="requester-select">
                                                <NativeSelect name="status" >
                                                    <option value="">-Select-</option>
                                                    <option value={10}>Male</option>
                                                    <option value={20}>female</option>
                                                    <option value={30}>Other</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">Father' s Name</label>
                                            <input type="text" name="Requester" className="control-form" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">D. O. B</label>
                                            <DatePicker placeholder="DD/MM/YYYY" />
                                        </div>
                                    </div>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">Phone Number</label>
                                            <input type="text" name="Requester" placeholder="+91" />
                                        </div>
                                    </div>
                                    <div className="d-inline-block requester">
                                        <div className="form-group">
                                            <label className="d-block">Designation</label>
                                            <input type="text" name="Requester" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="company-detail">
                                        <span className="d-block add-contcat-heading">Company Details</span>
                                        <div className="d-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Company Name</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Registration No</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Named of the Partner / Director</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label>Registered Address</label>
                                                <TextareaAutosize className="address-street" placeholder="Street No: 436/13" />
                                            </div>
                                        </div>
                                        <div className="d-block requester">
                                            <div className="form-group">
                                                <label>Bidder Type</label>
                                                <RadioGroup aria-label="quiz" name="quiz" className="bidder-box">
                                                    <FormControlLabel value="best" control={<Radio />} label="Indian" />
                                                    <FormControlLabel value="worst" control={<Radio />} label="Foreign" />
                                                </RadioGroup>
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">City</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Establishment Year</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">State </label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Nature of Business</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Postal Code </label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Legal Status</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">PAN/TAN Number</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester">
                                            <div className="form-group">
                                                <label className="d-block">Company Category</label>
                                                <input type="text" name="Requester" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="d-inline-block requester captcha">
                                            <div className="form-group">
                                                <label className="d-block">Enter Captcha</label>
                                                <input type="text" name="Requester" placeholder="" />
                                                <h3 className="d-inline-block">8 T 83 TY</h3>
                                                <div className="submit-content">
                                                    <IconButton className="search-bar">
                                                        <LoopIcon />
                                                    </IconButton>
                                                    <span>Refresh</span>
                                                </div>
                                                <div className="vendor-btn">
                                                    <Button variant="contained" className=" back-btn" >Back</Button>
                                                    <Button variant="contained" className="submit-btn" >Submit</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default VendorEnroll;