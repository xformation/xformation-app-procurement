import React, { Component } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ArchiveIcon from '@material-ui/icons/Archive';
import StarIcon from '@material-ui/icons/Star';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MailIcon from '@material-ui/icons/Mail';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SaveIcon from '@material-ui/icons/Save';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ReplyIcon from '@material-ui/icons/Reply';
import Kevin from '../../assets/images/dashbord/kevin.png'
import Approval2 from '../../assets/images/dashbord/approval2.png'
import Machel from '../../assets/images/dashbord/machel.png'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway';
import { Multiselect } from 'multiselect-react-dropdown';
import { IconButton } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { emailData } from './emaildata';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class EmailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            composEmail: false,
            activeindex: 0,
            isSelectAll: false,
            perPageLimit: 3,
            noOfRecordPerPage: 3,
            totalPages: '',
            currentPage: 0,
            emailData,
            selectedValue: [
                { name: 'evanernest', email: 'evanernest@mail.com', id: 1 },
                { name: 'evanernest2', email: 'evanernest2@mail.com', id: 2 },
            ],
            preselectValue: [
                { name: 'Olivia Johnson', email: 'oliviaJohnson@mail.com', id: 1 },
                { name: 'Marteens', email: 'marteen404@mail.com', id: 2 },
            ],
            options: [
                { name: 'Olivia Johnson', email: 'oliviaJohnson@mail.com', id: 1 },
                { name: 'Marteens', email: 'marteen404@mail.com', id: 2 },
                { name: 'evanernest', email: 'evanernest@mail.com', id: 3 },
                { name: 'ddd', email: 'ddd@a.com', id: 4 },
                { name: 'efg', email: 'efg@a.com', id: 5 },
            ],
            contacts: [
                { name: 'evanernest', email: 'evanernest@mail.com', id: 1 },
                { name: 'evanernest2', email: 'evanernest2@mail.com', id: 2 },
                { name: 'evanernest3', email: 'evanernest3@mail.com', id: 3 },
                { name: 'ddd', email: 'ddd@a.com', id: 4 },
                { name: 'efg', email: 'efg@a.com', id: 5 },
            ]
        }
    }


    onClickShowCompos = () => {
        const { composEmail } = this.state;
        let compos = composEmail;
        this.setState({
            composEmail: !compos,
        })
    }

    componentDidMount() {
        const { emailData, perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(emailData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    }

    displayEmailList = () => {
        const { emailData, activeindex, currentPage, perPageLimit } = this.state;
        let retData = [];
        for (let i = 0; i < emailData.length; i++) {
            if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                let row = emailData[i];
                retData.push(
                    <li className={activeindex == i ? "active" : ""} onClick={() => this.setState({ activeindex: i })}>
                        <div className="user-id">
                            <div className="check-box">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="checkedB" color="primary" checked={row.isChecked} onChange={(e) => this.setSilectedMail(e, i)} />
                                    }
                                />
                            </div>
                            <div className={`user-box ${row.isStar ? "active" : ""}`}><StarIcon /></div>
                            <div className="user-img"><img src={row.recentImg} alt="" /></div>
                        </div>
                        <div className="user-content">
                            <div className="row">
                                <div className="col-9">
                                    <span>{row.recentEmail} {row.time}</span>
                                    <h5>{row.recentTitle}</h5>
                                    <p>{row.recentDes}</p>
                                </div>
                                <div className="col-3">
                                    {!row.showIcon && <div className="list-icon">
                                        <IconButton onClick={() => this.showIcon(i)} className="menu-icon"><MoreVertIcon /></IconButton></div>}
                                    {row.showIcon && <ButtonGroup variant="text" aria-label="text primary button group">
                                        {row.isRead && <IconButton><DirectionsRailwayIcon /></IconButton>}
                                        {row.isSnooze && <IconButton><WatchLaterIcon /></IconButton>}
                                        {row.attechment && <IconButton><AttachFileIcon /></IconButton>}
                                    </ButtonGroup>}
                                </div>
                            </div>
                        </div>
                    </li>
                );
            }
        }
        return retData;
    }

    setSilectedMail = (e, index) => {
        let { emailData, isSelectAll } = this.state;
        let count = 0;
        emailData[index].isChecked = e.target.checked;
        for (let i = 0; i < emailData.length; i++) {
            if (emailData[i].isChecked) {
                count++;
            } else {
                count--;
            }
        }
        if (count == emailData.length) {
            isSelectAll = true;
        }
        else {
            isSelectAll = false;
        }
        this.setState({
            emailData,
            isSelectAll
        })
    }

    setSelectAllEmail = (e) => {
        let { emailData, isSelectAll } = this.state;
        const { checked } = e.target;
        for (let i = 0; i < emailData.length; i++) {
            emailData[i].isChecked = checked;
        }
        this.setState({
            emailData,
            isSelectAll: checked,
        })
    }

    showIcon = (index) => {
        let { emailData } = this.state;
        emailData[index].showIcon = true;
        this.setState({
            emailData
        })
    }

    peginationOfTable() {
        const { currentPage, totalPages, emailData, perPageLimit } = this.state;
        let rows = [];
        if (emailData.length > 0) {
            for (let i = 0; i < totalPages; i++) {
                rows.push(<li key={i}><a className={currentPage === i ? 'active' : ''} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
            }
            return (
                <ul className="d-block">
                    {/* <li className="page-item previous">
                        <a className={currentPage === 0 ? 'page-link desable' : 'page-link enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                    </li> */}
                    <div>
                        {rows}
                    </div>
                    {/* <li className="page-item next">
                        <a className={currentPage === this.state.totalPages - 1 ? 'page-link desable' : 'page-link enable'} href="#" onClick={(e) => this.navigatePage('next', e, '')}>Next</a>
                    </li> */}
                </ul>
            );
        }
    }

    navigatePage(target, e, i) {
        let { totalPages, currentPage } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    currentPage = currentPage - 1;
                }
                break;
            case 'next':
                if (currentPage !== totalPages - 1) {
                    currentPage = currentPage + 1;
                }
                break;
            case 'btn-click':
                currentPage = i;
                break;
        }
        this.setState({
            currentPage
        });
    }

    countryToFlag = (isoCode) => {
        return typeof String.fromCodePoint !== 'undefined'
            ? isoCode
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
            : isoCode;
    }

    onSelect = () => {


    }

    onRemove = () => {

    }

    render() {
        const { composEmail, isSelectAll, currentPage, options, contacts, selectedValue, preselectValue } = this.state;
        return (
            <div className="main-content">
                <div className="compose-email-section">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <div className="compose-left">
                                <div class="compose-btn">
                                    <Button type="button" onClick={this.onClickShowCompos} class="compose active"><CreateIcon /> Compos Email</Button>
                                </div>
                                <div className="compose-tabs">
                                    <div className="heading">
                                        folders
                                        <span className="last"><ChevronRightIcon /></span><span ><ChevronRightIcon /></span>
                                    </div>
                                    <ul>
                                        <li className="active"><a href="#"><span><MoveToInboxIcon /></span>Inbox</a></li>
                                        <li><a href="#"><span><SendIcon /></span>Sent</a></li>
                                        <li><a href="#"><span><DraftsIcon /></span>Draft</a></li>
                                        <li><a href="#"><span><ArchiveIcon /></span>Archived</a></li>
                                        <li><a href="#"><span><StarIcon /></span>Favourites</a></li>
                                        <li><a href="#"><span><CreateNewFolderIcon /></span>Spam</a></li>
                                    </ul>
                                </div>
                                <div className="recent-content">
                                    <div className="heading">Recent communication</div>
                                    <ul>
                                        <li>
                                            <div className="recent-image">
                                                <img src={Kevin} alt="" />
                                                <div className="enabled"></div>
                                            </div>
                                            <div className="recent-name">
                                                <span>Benny Kenn</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-image">
                                                <img src={Approval2} alt="" />
                                                <div className="disable"></div>
                                            </div>
                                            <div className="recent-name">
                                                <span>David Nothere</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-image">
                                                <img src={Machel} alt="" />
                                                <div className="enabled"></div>
                                            </div>
                                            <div className="recent-name">
                                                <span>Vrancissca</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tag-btn">
                                    <div className="heading">Tags</div>
                                    <Button variant="contained" className="primary" >&#35;Waitingfor approval</Button>
                                    <Button variant="contained" className="secondary">&#35;pending</Button>
                                    <Button variant="contained" className="danger">confirm</Button>
                                    <Button variant="contained" className="info">&#35;weeklymeetings</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                            {composEmail === true ?
                                <div className="compose-right">
                                    <div className="head-top progress-form">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5 col-12">
                                                <div className="heading"><span><KeyboardBackspaceIcon /></span>
                                                    <h4>Compose Email</h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7 col-12">
                                                <div className="progress-draft-btn">
                                                    <Button variant="outlined" className="draft-btn"><span><SaveIcon  className="btn-icon"/></span>Save to Draft</Button>
                                                    <Button variant="outlined" className="delete-btn"><span><DeleteForeverIcon className="btn-icon" /></span>Delete</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-content">
                                        <div className="email-section">
                                            <div className="d-inline-block heading">to</div>
                                            <Multiselect
                                                options={options}
                                                selectedValues={preselectValue}
                                                onSelect={this.onSelect}
                                                onRemove={this.onRemove}
                                                displayValue="email"
                                                placeholder=''
                                            />
                                        </div>
                                        {/* <div className="email-section">
                                            <div className="d-inline-block heading">to</div>
                                            <div className="email-section-inner">
                                                <div className="d-inline-block image"><img src={Johnson} alt="" /></div>
                                                <div className="content">
                                                    <span>Olivia johnson</span>
                                                    <p>oliviajohnson@mail.com</p>
                                                </div>
                                                <div className="close-icon"><ClearTwoToneIcon /></div>
                                            </div>
                                            <div className="email-section-inner">
                                                <div className="d-inline-block image"><img src={Marteens} alt="" /></div>
                                                <div className="content">
                                                    <span>Olivia johnson</span>
                                                    <p>oliviajohnson@mail.com</p>
                                                </div>
                                                <div className="close-icon"><ClearTwoToneIcon /></div>
                                            </div>
                                        </div> */}
                                        <div className="email-bcc">
                                            <div className="d-inline-block heading">bcc</div>
                                            <Multiselect
                                                options={contacts}
                                                selectedValues={selectedValue}
                                                onSelect={this.onSelect}
                                                onRemove={this.onRemove}
                                                displayValue="email"
                                                placeholder=''

                                            />
                                            {/* <div className="email-bcc-inner">
                                                <div className="content">
                                                    <p>evanernest@mail.com</p>
                                                </div>
                                                <div className="close-icon"><ClearTwoToneIcon /></div>
                                            </div>
                                            <div className="email-bcc-inner">
                                                <div className="content">
                                                    <p>evanernest@mail.com</p>
                                                </div>
                                                <div className="close-icon"><ClearTwoToneIcon /></div>
                                            </div>
                                            <div className="email-bcc-inner last">
                                                <div className="content">
                                                    <p>evanernest@mail.com</p>
                                                </div>
                                                <div className="close-icon"><ClearTwoToneIcon /></div>
                                            </div> */}
                                        </div>
                                        <div className="email-subject">
                                            <div className="d-inline-block heading">subject</div>
                                            <div className="content">
                                                <span>Follow Up Progress From Order &#35;0001241251</span>
                                            </div>
                                        </div>
                                        <div className="email-massage">
                                            <div className="d-inline-block heading">massage</div>
                                            <div className="content">
                                                <textarea>
                                                    Hello guys


                                                    Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod temod tempor incidiunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore in reprehenderit in
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                    mollit anim id est ?
                                          </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-bottom">
                                        <div className="footer-section-inner">
                                            <Button variant="contained" className="send-email-btn"><SendIcon />send email</Button>
                                            <IconButton className="attache-icon"><AttachFileIcon /></IconButton>
                                            <IconButton className="reply-icon"><ReplyIcon /></IconButton>
                                            <IconButton className="symbols-icon">T</IconButton>
                                            <div className="opensens-dropdown">
                                                <FormControl className="opensens-content">
                                                    <NativeSelect >
                                                        <option value="">Open sens</option>
                                                        <option value={10}>Ten</option>
                                                        <option value={20}>Twenty</option>
                                                        <option value={30}>Thirty</option>
                                                    </NativeSelect>
                                                </FormControl>
                                            </div>
                                            <div className="symbols">
                                                <ul>
                                                    <li><IconButton className="symbols-icon">B</IconButton></li>
                                                    <li><IconButton className="symbols-icon">I</IconButton></li>
                                                    <li><IconButton className="symbols-icon">U</IconButton></li>
                                                    <li ><IconButton className="symbols-icon"><TagFacesIcon /></IconButton></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="compose-right">
                                    <div className="head-top">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-xl-7 col-lg-10 col-md-10 col-sm-10 col-10">
                                                <div className="social-button">
                                                    <div className="check-box">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="checkedB"
                                                                    color="primary"
                                                                    checked={isSelectAll}
                                                                    onChange={this.setSelectAllEmail}
                                                                />
                                                            }
                                                        />
                                                    </div>
                                                    <ul>
                                                        <li ><a href="#" className="active"><span><MailIcon /></span>Important</a></li>
                                                        <li><a href="#"><span><SupervisorAccountIcon /></span>Socials</a></li>
                                                        <li><a href="#"><span><ConfirmationNumberIcon /></span>Promotion</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-2 col-md-2 col-sm-2 col-2">
                                                <div className="social-icons">
                                                    <ul>
                                                        {/* <li>
                                                            <IconButton className="icon">
                                                                <DirectionsBusIcon />
                                                            </IconButton>
                                                        </li>
                                                        <li>
                                                            <IconButton className="icon">
                                                                <AccessTimeIcon />
                                                            </IconButton>
                                                        </li>
                                                        <li>
                                                            <IconButton className="icon">
                                                                <DeleteForeverIcon />
                                                            </IconButton>
                                                        </li>
                                                        <li>
                                                            <IconButton className="icon">
                                                                <SettingsIcon />
                                                            </IconButton>
                                                        </li> */}
                                                        <li>
                                                            <IconButton className="icon">
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-content">
                                        <SimpleBar>
                                            <ul>
                                                {this.displayEmailList()}
                                            </ul>
                                        </SimpleBar>
                                    </div>
                                    <div className="footer-bottom">
                                        <div className="row  justify-content-center align-items-center">
                                            <div className="col-xl-6 col-lg-6 col-md-5 col-sm-5 col-12">
                                                <div className="pagination-text">Showing <strong>1&#8722;10</strong> From <strong> 46 </strong> data </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-7 col-12 text-right">
                                                <div className="pagination-section">
                                                    <div className={currentPage === 0 ? "d-inline-block btn-left desable" : "d-inline-block btn-left enable"} onClick={(e) => this.navigatePage('pre', e, '')}>
                                                        <Button><span><ArrowBackIosIcon /></span></Button>
                                                    </div>
                                                    <div className="d-inline-block pagination-icon">
                                                        {this.peginationOfTable()}
                                                    </div>
                                                    <div className={currentPage === this.state.totalPages - 1 ? "d-inline-block btn-right" : "d-inline-block btn-right"} onClick={(e) => this.navigatePage('next', e, '')}>
                                                        <Button><span><ArrowForwardIosIcon /></span></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EmailPage;