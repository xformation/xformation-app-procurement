import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Peter from '../../assets/images/Setup/peter.png';
import Ahmad from '../../assets/images/Setup/ahmad.png';
import Brian from '../../assets/images/Setup/brian.png';
import David from '../../assets/images/Setup/david.png';
import Dennise from '../../assets/images/Setup/dennise.png';
import Erbatow from '../../assets/images/Setup/erbatow.png';
import Evan from '../../assets/images/Setup/evan.png';
import Fanny from '../../assets/images/Setup/fanny.png';
import Hawkins from '../../assets/images/Setup/hawkins.png';

class SetUpCommittee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
            },
            activeindex: 0,
            commiteMemList: [
                {
                    name: 'Petel Morriss',
                    image: Peter,
                    position: 'HR at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'petermorriss@gmail.com'
                },
                {
                    name: 'Ahmad Zayn',
                    image: Ahmad,
                    position: 'Director of',
                    company: 'Plucom Technology',
                    contNo: '+1234567890',
                    email: 'ahmadzayn@mail.com'
                },
                {
                    name: 'Brian Connor',
                    image: Brian,
                    position: 'regional Manager at',
                    company: 'Crimzon Guards Studios',
                    contNo: '+1234567890',
                    email: 'brianconnor@gmail.com'
                },
                {
                    name: 'David Here',
                    image: David,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'davidhere@gmail.com'
                },
                {
                    name: 'Dennise Lee',
                    image: Dennise,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'denniselee@mail.com'
                },
                {
                    name: 'Erbatov Axie',
                    image: Erbatow,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'erbatovaxie@mail.com'
                },
                {
                    name: 'Evan Khan',
                    image: Evan,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'evankhan@mail.com'
                },
                {
                    name: 'Fanny Humble',
                    image: Fanny,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'fannyhumble@mail.com'
                },
                {
                    name: 'Franklin Ir.',
                    image: Hawkins,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'franklinir@mail.com'
                },
                {
                    name: 'Gandalf Hoos',
                    image: Erbatow,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'gandalfhoos@mail.com'
                },
                {
                    name: 'Gabriella',
                    image: Peter,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'gabriella@mail.com'
                },
                {
                    name: 'Hanny Shella',
                    image: Ahmad,
                    position: 'Markting Manager at',
                    company: 'Highspeed Studios',
                    contNo: '+1234567890',
                    email: 'hannyshella@mail.com'
                }
            ],
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
        }
        retData.isValid = isValid;
        return retData;
    };

    displayCommiteeMemberList = () => {
        const { commiteMemList, activeindex } = this.state;
        let retData = [];
        for (let i = 0; i < commiteMemList.length; i++) {
            let row = commiteMemList[i];
            retData.push(
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={row.name}>
                    <Card className={activeindex == i ? "member-box active" : "member-box"} onClick={() => this.setState({ activeindex: i })}>
                        <div className="image">
                            <img src={row.image} alt="" />
                        </div>
                        <div className="d-inline-block menu-icon">
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
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
            );
        }
        return retData;
    }
    

    render() {
        const { requiData, isSubmitted, } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="setup-committee-section">
                    <div className="heading">
                        <h4>SetUp Committee</h4>
                    </div>
                    <div className="setup-committee-content">
                        <div className="add-members">
                            <ul>
                                <li>
                                    <div className="form-group">
                                        <label>Select Committee Type</label>
                                        <FormControl className="select-Committee">
                                            <NativeSelect name="status" value={requiData.status}
                                                    onChange={this.handleStateChange} isvalid={errorData.status.isValid} >
                                                <option value="">-Select-</option>
                                                <option value={10}>abc</option>
                                                <option value={20}>def</option>
                                                <option value={30}>abc</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <span className="text-danger">{errorData.status.message}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label>Add Committee Members</label>
                                        <Button variant="contained" className="new-item-btn" disableElevation onClick={this.handleClickMethod}>
                                            <AddCircleIcon className="plus-icon" />
                                            Send
                                        </Button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="select-members">
                            <div className="heading">
                                <h5>Selected Committee Members</h5>
                            </div>
                            <div className="members-boxs">
                                <div className="row">
                                    {this.displayCommiteeMemberList()}
                                    <div className="committee-btn">
                                        <Button variant="contained" className="new-item-btn"><i class="fas fa-paper-plane"></i> Save &#38; Send invites</Button>
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


export default SetUpCommittee;
