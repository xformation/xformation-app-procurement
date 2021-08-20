import React, { Component } from "react"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import { RangeDatePicker } from '@y0c/react-datepicker';
import "rc-calendar/assets/index.css";
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Table from '../../Table/Table';
import Card from '@material-ui/core/Card';
import Peter from '../../assets/images/Setup/peter.png';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import SendIcon from '@material-ui/icons/Send';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ReorderIcon from '@material-ui/icons/Reorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SearchIcon from '@material-ui/icons/Search';

import David from '../../assets/images/contact/david.png';
import Fanny from '../../assets/images/contact/fanny.png';
import Hawkins from '../../assets/images/contact/hawkins.png';
import Chyntia from '../../assets/images/contact/chyntia.png';
import Brian from '../../assets/images/contact/brian.png';
import Dennise from '../../assets/images/contact/dennise.png';
import Erbatow from '../../assets/images/contact/erbatow.png';
import Evan from '../../assets/images/contact/evan.png';
class RecievedRfp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeindex: 0,
            requiData: {
                status: "",
                reqno: "",
                depart: "",
                ViewDetail: false,
                selectBuyer: false,
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
                        label: 'Requisition Type',
                        key: 'RequestDepartment',
                        renderCallback: (value) => {
                            return <td><span className={'department-value'}>{value}</span><span className={'department-text'}></span></td>
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
                        label: 'Requisitions Total',
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
                        label: 'Details',
                        key: 'Details',
                        renderCallback: (value) => {
                            return <td><button className="btn details-btn" onClick={this.onClickShowViewDetails}>
                                {value}</button></td>
                        }
                    },

                ],
                data: [
                    {
                        SNo: '1.',
                        RequisitionsNo: '22324-01',
                        RequestDate: 'HR and Admin ',
                        RequestDepartment: 'Purchase',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '100000',
                        carrency: 'INR',
                        Details: 'View Details'
                    },
                    {
                        SNo: '2.',
                        RequisitionsNo: '22324-01',
                        RequestDate: 'HR and Admin ',
                        RequestDepartment: 'Purchase',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '100000',
                        carrency: 'INR',
                        Details: 'View Details'
                    },
                    {
                        SNo: '3.',
                        RequisitionsNo: '22324-01',
                        RequestDate: 'HR and Admin ',
                        RequestDepartment: 'Purchase',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '100000',
                        carrency: 'INR',
                        Details: 'View Details'
                    },
                    {
                        SNo: '4.',
                        RequisitionsNo: '22324-01',
                        RequestDate: 'HR and Admin ',
                        RequestDepartment: 'Purchase',
                        Requestor: '03/03/2021',
                        RequisitionsTotal: '100000',
                        carrency: 'INR',
                        Details: 'View Details'
                    },

                ]

            },
            recievedMemberList: [
                {
                    name: 'Angela Moss',
                    image: David,
                    shortName: 'Hs',
                    shortNameColor: '#5ed1a7',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Ahmad Zayn',
                    image: Fanny,
                    shortName: 'AV',
                    shortNameColor: '#256fc6',
                    position: 'Photographer at',
                    company: 'Audio video Teams',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Brian Connor',
                    image: Hawkins,
                    shortName: 'Cz',
                    shortNameColor: '#dc3472',
                    position: 'Designer at',
                    company: 'Crimzon Guards Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Courtney Hawkins',
                    image: David,
                    shortName: 'Hs',
                    shortNameColor: '#4b1643',
                    position: 'Programmer at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Chyntia Smilee',
                    image: Chyntia,
                    shortName: 'Hs',
                    shortNameColor: '#cb8fbc',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'David Here',
                    image: Brian,
                    shortName: 'Hs',
                    shortNameColor: '#a6e6e6',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Denise Lee',
                    image: Peter,
                    shortName: 'Hs',
                    shortNameColor: '#0b82ea',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Erbatov Axie',
                    image: Dennise,
                    shortName: 'Hs',
                    shortNameColor: '#07504f',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Fanny Humble',
                    image: Erbatow,
                    shortName: 'Hs',
                    shortNameColor: '#91d8d2',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Evan Khan',
                    image: Evan,
                    shortName: 'Hs',
                    shortNameColor: '#4194e6',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Frankli jr.',
                    image: Dennise,
                    shortName: 'Hs',
                    shortNameColor: '#eb6520',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Gandalf Hoos',
                    image: Peter,
                    shortName: 'Hs',
                    shortNameColor: '#0c3972',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Gabriella',
                    image: Brian,
                    shortName: 'Hs',
                    shortNameColor: '#45a13c',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Hanny Shella',
                    image: Fanny,
                    shortName: 'Hs',
                    shortNameColor: '#da2866',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Ivankov',
                    image: Hawkins,
                    shortName: 'Hs',
                    shortNameColor: '#9304f1',
                    position: 'Marketing Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Petel Morriss',
                    image: Peter,
                    shortName: 'Hs',
                    shortNameColor: '#4b1643',
                    position: 'HR at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
            ]
        }
    }

    displayRecievedMemberList = () => {
        const { recievedMemberList, activeindex } = this.state;
        let retData = [];
        for (let i = 0; i < recievedMemberList.length; i++) {
            let row = recievedMemberList[i];
            retData.push(
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={row.name}>
                    <div className="member-boxs">
                        <Card className={activeindex == i ? "members-box active" : "members-box"} onClick={() => this.setState({ activeindex: i })}>
                            <div className="user-img">
                                <div className="image">
                                    <img src={row.image} alt="" />
                                    <div className="member-position" style={{ backgroundColor: `${row.shortNameColor}` }}>{row.shortName}</div>
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
                                    <li><b>{row.name}</b></li>
                                    <li><span>{row.position}</span></li>
                                    <li><p>{row.company}</p></li>
                                </ul>
                            </div>
                            <div className="member-contact">
                                <ul>
                                    <li>
                                        <Button className="icon-btn"><CallIcon className="phone-icon" /></Button>
                                        <a href={`tel:${row.contNo}`}>{row.contNo}</a>
                                    </li>
                                    <li>
                                        <Button className="icon-btn"><MailIcon className="phone-icon" /></Button>
                                        <a href={`mailto: ${row.email}`}>{row.email}</a>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            )
        }
        return retData;
    }

    onClickShowViewDetails = () => {
        const { ViewDetail } = this.state;
        let detail = ViewDetail;
        this.setState({
            ViewDetail: !detail,
        })
    }
    onClickShowSelectBuyer = () => {
        const { selectBuyer } = this.state;
        let buyer = selectBuyer;
        this.setState({
            selectBuyer: !buyer,
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
        const { requiData, isSubmitted, ViewDetail, selectBuyer } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                {selectBuyer === true ?
                    <div className="recieved-select-buyers-content">
                        <div className="buyers-head">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                    <div className="heading">
                                        <h4>Select Buyers</h4>
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
                                                <li className="last"><Button variant="contained" className="add-bBuyres-btn"><PersonAddIcon className="user-icon" />Add Buyres</Button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="membar-list">
                            <div className="row">
                                {this.displayRecievedMemberList()}
                                {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="member-boxs">
                                        <Card className="members-box">
                                            <div className="user-img">
                                                <div className="image">
                                                    <img src={Peter} alt="" />
                                                    <div className="member-position" style={{ backgroundColor: '#5ed1a7' }}>SR</div>
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
                                                    <div className="member-position" style={{ backgroundColor: '#256fc6' }}>SR</div>
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
                                                    <div className="member-position" style={{ backgroundColor: '#dc3472' }}>SR</div>
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
                                                    <div className="member-position" style={{ backgroundColor: '#4b1644' }}>SR</div>
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
                                                    <div className="member-position" style={{ backgroundColor: '#cc8fbb' }}>SR</div>
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
                                                    <div className="member-position" style={{ backgroundColor: '#a6e6e6' }}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#0b82ea'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#074f4e'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#4b1644' }}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#276ec6'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#36c691'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#08504f'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#9305f1'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#0c3972'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#45a13c'}}>SR</div>
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
                                                    <div className="member-position" style={{backgroundColor: '#ea6520'}}>SR</div>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="recieved">
                        {ViewDetail === true ?
                            <div className="recieved-content">
                                <div className="recieved-heading">
                                    <h4>Recieved RFT</h4>
                                    <div className="heading-content">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <span>status</span>
                                                <Button variant="contained" className="pending-btn">pendding</Button>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="creation-box">
                                                    <span>Creation Date</span>
                                                    <span>03/02/2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recieved-body-content">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Requisitioner</label>
                                                <span>jameskerieen@mail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Requisition No.</label>
                                                <span>1816133</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>priority</label>
                                                <span>Normal</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Order Currency</label>
                                                <span>INR</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Item</label>
                                                <span>Servers</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Extra Budgetory</label>
                                                <span>NO</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Department</label>
                                                <span>IT Infrastucture</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Item</label>
                                                <span>Dell Leptop (sky blue)</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Purpose</label>
                                                <span>Lorem ipsum dolor sit amet,</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>CAAC Committee Report</label>
                                                <span>not Requiried</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Location</label>
                                                <span>Hyderabad</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                                            <div className="requisitioner-text">
                                                <label>Requisition Type</label>
                                                <span>purchase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recieved-bottom">
                                    <ul>
                                        <li>
                                            <label>Price</label>
                                            <span>30000</span>
                                        </li>
                                        <li>
                                            <label>Quantity</label>
                                            <span>1</span>
                                        </li>
                                        <li>
                                            <label>Sub-Total</label>
                                            <span>30000</span>
                                        </li>
                                    </ul>
                                    <div className="recieved-button">
                                        <Button variant="contained" className="new-item-btn" onClick={this.onClickShowSelectBuyer} >Select Buyers</Button>
                                    </div>
                                </div>
                                <div className="buyers-content">
                                    <div className="heading">
                                        <h4>Selected Buyers</h4>
                                    </div>
                                    <div className="member-boxs">
                                        <Card className="members-box">
                                            <div className="image">
                                                <img src={Peter} alt="" />
                                            </div>
                                            <div className="member-position" style={{ backgroundColor: '#5ed1a7' }}>SR</div>
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
                                        <div className="requisition">
                                            <Checkbox name="saveReq" color="primary" name="saveReq" />
                                            <p>Save</p>
                                        </div>
                                        <div className="committee-btn">
                                            <Button variant="contained" className="new-item-btn"><i class="fas fa-paper-plane"></i>Send</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <div className="heading">
                                    <h4>Recieved RFT</h4>
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
                                    </div>
                                    <div className="requisitions-button">
                                        <Button variant="contained" className="new-item-btn" disableElevation onClick={this.handleClickMethod}>
                                            Search
                                        </Button>
                                    </div>
                                </div>

                                <Table valueFromData={this.state.tableData} perPageLimit={6} visiblecheckboxStatus={false}
                                    tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                            </>
                        }
                    </div>
                }
            </div>
        )
    }

}


export default RecievedRfp;