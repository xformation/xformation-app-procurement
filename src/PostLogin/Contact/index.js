import React, { Component } from "react"
import Button from '@material-ui/core/Button';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Card from '@material-ui/core/Card';
import Peter from '../../assets/images/Setup/peter.png';
import Angela from '../../assets/images/contact/angela.png';
import AhmadZayn from '../../assets/images/contact/ahmad-zayn.png';
import BrianConnor from '../../assets/images/contact/brian-connor.png';
import ProfilePicture from '../../assets/images/contact/profile-picture.png';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import ReorderIcon from '@material-ui/icons/Reorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@material-ui/lab/Pagination';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SaveIcon from '@material-ui/icons/Save';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: "",
                NewContact: false,
            },
        }
    }



    onClickShowNewContact = () => {
        const { NewContact } = this.state;
        let Contact = NewContact;
        this.setState({
            NewContact: !Contact,
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
        const { requiData, isSubmitted, NewContact } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="contact-content">
                    {NewContact === true ?
                        <>
                            <div className="general-contect">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-4 col-12">
                                        <div className="contact-left">
                                            <div className="heading">
                                                <h5>Contact</h5>
                                                <span>Lorem ipsum dolor sit amet</span>
                                            </div>
                                            <SimpleBar>
                                                <div className="user-list">
                                                    <ul>
                                                        <li>
                                                            <Card className="members-box">
                                                                <div className="user-img">
                                                                    <div className="image">
                                                                        <img src={Angela} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block menu-icon">
                                                                    <IconButton aria-label="settings">
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                </div>
                                                                <div className="member-details">
                                                                    <ul>
                                                                        <li><b>Petel Morriss</b></li>
                                                                        <li><span>HR at</span></li>
                                                                        <li><p>Highspeed Studios</p></li>
                                                                    </ul>
                                                                    <div className="member-position">SR</div>
                                                                </div>
                                                            </Card>
                                                        </li>

                                                        <li>
                                                            <Card className="members-box">
                                                                <div className="user-img">
                                                                    <div className="image">
                                                                        <img src={AhmadZayn} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block menu-icon">
                                                                    <IconButton aria-label="settings">
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                </div>
                                                                <div className="member-details">
                                                                    <ul>
                                                                        <li><b>Petel Morriss</b></li>
                                                                        <li><span>HR at</span></li>
                                                                        <li><p>Highspeed Studios</p></li>
                                                                    </ul>
                                                                    <div className="member-position">SR</div>
                                                                </div>
                                                            </Card>
                                                        </li>
                                                        <li>
                                                            <Card className="members-box">
                                                                <div className="user-img">
                                                                    <div className="image">
                                                                        <img src={BrianConnor} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block menu-icon">
                                                                    <IconButton aria-label="settings">
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                </div>
                                                                <div className="member-details">
                                                                    <ul>
                                                                        <li><b>Petel Morriss</b></li>
                                                                        <li><span>HR at</span></li>
                                                                        <li><p>Highspeed Studios</p></li>
                                                                    </ul>
                                                                    <div className="member-position">SR</div>
                                                                </div>
                                                            </Card>
                                                        </li>
                                                        <li>
                                                            <Card className="members-box">
                                                                <div className="user-img">
                                                                    <div className="image">
                                                                        <img src={Angela} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block menu-icon">
                                                                    <IconButton aria-label="settings">
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                </div>
                                                                <div className="member-details">
                                                                    <ul>
                                                                        <li><b>Petel Morriss</b></li>
                                                                        <li><span>HR at</span></li>
                                                                        <li><p>Highspeed Studios</p></li>
                                                                    </ul>
                                                                    <div className="member-position">SR</div>
                                                                </div>
                                                            </Card>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-8 col-12">
                                        <div className="contact-right">
                                            <Card className="user-information">
                                                <div className="heading">
                                                    <IconButton className="head-icon">
                                                        <KeyboardBackspaceIcon />
                                                    </IconButton>
                                                    <h5>Add New Contact</h5>
                                                    <IconButton className="head-menu-icon">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                </div>
                                                <div className="general-information">
                                                    <div className="row">
                                                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="user-content">
                                                                <span className="d-block add-contcat-heading">General Info</span>
                                                                <div className="d-inline-block requester">
                                                                    <div className="form-group">
                                                                        <label className="d-block">First Name</label>
                                                                        <input type="text" name="Requester" placeholder="Sumuel" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block requester">
                                                                    <div className="form-group">
                                                                        <label className="d-block">Last Name</label>
                                                                        <input type="text" name="Requester" placeholder="Chen" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block requester">
                                                                    <div className="form-group">
                                                                        <label className="d-block">Title</label>
                                                                        <input type="text" name="Requester" placeholder="Graphic Designer" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block requester">
                                                                    <div className="form-group">
                                                                        <label className="d-block">Company</label>
                                                                        <input type="text" name="Requester" className="control-form" placeholder="HighSpeed Studios" />
                                                                    </div>
                                                                </div>
                                                                <span className="d-block add-contcat-heading">Contacts</span>
                                                                <div className="d-inline-block requester">
                                                                    <div className="form-group">
                                                                        <label className="d-block">Email Address</label>
                                                                        <input type="text" name="Requester" placeholder="sumuelchen002@mail.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-inline-block requester">
                                                                    <div className="form-group">
                                                                        <label className="d-block">Phone Number</label>
                                                                        <input type="text" name="Requester" placeholder="+0123456789" />
                                                                    </div>
                                                                </div>
                                                                <Button variant="contained" className="add-bBuyres-btn" >
                                                                    <SaveIcon className="save-icon" />New Contact</Button>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="requester profile">
                                                                <div className="form-group">
                                                                    <label className="d-block">Phone Number</label>
                                                                    <div className="user-profile">
                                                                        <div className="image">
                                                                            <img src={ProfilePicture} alt="" />
                                                                        </div>
                                                                        <Button className="user-profile-uplod">
                                                                            <CameraAltIcon className="camera-icon"/>
                                                                            <input accept="image/*" id="contained-button-file" multiple type="file" />
                                                                            <span>changes photos</span>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="user-contact-list">
                                <div className="buyers-head">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                            <div className="heading">
                                                <h4>Contacts</h4>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 ">
                                            <div className="head-right justify-content-center align-items-center">
                                                <div className="search-bar">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search here" />
                                                        <button><SearchIcon /></button>
                                                    </div>
                                                </div>
                                                <div className="social-buttom">
                                                    <ul>
                                                        <li><Button variant="contained" className="plus-btn list-icon"><ReorderIcon /></Button></li>
                                                        <li><Button variant="contained" className="plus-btn"><ViewModuleIcon /></Button></li>
                                                        <li className="last"><Button variant="contained" className="add-bBuyres-btn" onClick={this.onClickShowNewContact}>
                                                            <PersonAddIcon className="user-icon" />New Contact</Button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="membar-list">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>

                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>
                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>

                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>

                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>

                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>

                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="member-boxs">
                                                <Card className="members-box">
                                                    <div className="user-img">
                                                        <div className="image">
                                                            <img src={Peter} alt="" />
                                                            <div className="member-position">SR</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-inline-block menu-icon">
                                                        <IconButton aria-label="settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="requisition">
                                                        <Checkbox name="saveReq" color="primary" name="saveReq" />
                                                    </div>

                                                    <div className="member-details">
                                                        <ul>
                                                            <li><b>Petel Morriss</b></li>
                                                            <li><span>HR at</span></li>
                                                            <li><p>Highspeed Studios</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="member-contact">
                                                        <ul>
                                                            <li>
                                                                <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                                                <a href="tel:+1234567890">+1234567890</a>
                                                            </li>
                                                            <li>
                                                                <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                                                <a href="mailto:petermorriss@gmail.com">petermorriss@gmail.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                    <Pagination count={4} variant="outlined" className="float-right mb-5" shape="rounded" />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }

}


export default Contact;