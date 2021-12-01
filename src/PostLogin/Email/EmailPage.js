import React, { Component } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
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
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway';
import { Multiselect } from 'multiselect-react-dropdown';
import { IconButton } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { emailActions } from '../../_actions/email.actions'
import { connect } from 'react-redux'
import { status } from "../../_constants";
import { commonFunctions } from '../../_utilities';
import { isThisWeek } from 'date-fns';
import EmailDetail from './emailDetail';
import CancelIcon from "@material-ui/icons/Cancel";
import Tooltip from "@material-ui/core/Tooltip";
class EmailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      composEmail: false,
      detailEmail: false,
      activeindex: 0,
      isSelectAll: false,
      perPageLimit: 5,
      noOfRecordPerPage: 5,
      totalPages: '',
      currentPage: 0,
      emailData: [],
      isSubmitted: false,
      searchemail: 'important',
      sendEmailData: {
        subject: '',
        emaildetail: '',
        to: [],
        bcc: [],
        senderId: '2',
        attechment: [],
      },
      selectedValue: [
        //     { name: 'evanernest', email: 'evanernest@mail.com', id: 1 },
        //     { name: 'evanernest2', email: 'evanernest2@mail.com', id: 2 },
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

  onClickShowMailDetail = () => {
    const { detailEmail } = this.state;
    let detail = detailEmail;
    this.setState({
      detailEmail: !detail,
    })
  }

  componentDidMount() {
    let { sendEmailData, preselectValue } = this.state;
    this.props.dispatch(emailActions.recentcommunication());
    this.props.dispatch(emailActions.searchallemails({ 'search': this.state.searchemail }));
    sendEmailData.to = preselectValue;
    this.setState({ sendEmailData })

  }

  componentDidUpdate(prevProps, prevState) {
    const { perPageLimit } = this.state;
    if (this.props.search_email_status !== prevProps.search_email_status && this.props.search_email_status === status.SUCCESS) {
      if (this.props.searchemail && this.props.searchemail.length > 0) {
        this.setState({
          emails: this.props.searchemail
        })
      }
    }
    if (this.props.search_all_email_status !== prevProps.search_all_email_status && this.props.search_all_email_status === status.SUCCESS) {
      if (this.props.searchallemail && this.props.searchallemail.length > 0) {
        let data = this.props.searchallemail;
        if (data && data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            data[i].isChecked = false;
            data[i].isRead = false;
            data[i].showIcon = false;
          }
          let indexOfLastData = Math.ceil(data.length / perPageLimit);
          this.setState({
            emailData: data,
            totalPages: indexOfLastData,
          });
        }
      }
    }
    if (prevProps.send_email_status !== this.props.send_email_status && this.send_email_status === status.SUCCESS) {
      this.setState({
        composEmail: false,
        sendEmailData: {}
      })
    }
  }

  displayEmailList = () => {
    const { emailData, activeindex, currentPage, perPageLimit } = this.state;
    let retData = [];
    if (emailData && emailData.length > 0) {
      for (let i = 0; i < emailData.length; i++) {
        if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
          let row = emailData[i];
          let time = row.time.split('T');
          time = time[1].split('.');
          retData.push(
            <li className={activeindex == i ? "active" : ""} onClick={() => this.setState({ activeindex: i })}>
              <div className="user-id">
                <div className="check-box">
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" color="primary" checked={row.isChecked} onChange={(e) => this.setSelectedMail(e, i)} />
                    }
                  />
                </div>
                <div className={`user-box ${row.isStar == "true" ? "active" : ""}`}><StarIcon /></div>
                <div className="user-img"><img src={row.sender.profilePic} alt="" height="50px" width="50px" /></div>
              </div>
              <div className="user-content">
                <div className="d-flex">
                  <div className="col-9" onClick={this.onClickShowMailDetail} key={row.body}>
                    <span>{row.sender.email} {time[0]}</span>
                    <h5>{row.subject}</h5>
                    <p>{row.body}</p>
                  </div>
                  <div className="col-3 pr-0">
                    {!row.showIcon && <div className="list-icon">
                      <IconButton onClick={() => this.showIcon(i)} className="menu-icon"><MoreVertIcon /></IconButton></div>}
                    {row.showIcon && <ButtonGroup variant="text" aria-label="text primary button group">
                      {row.isRead == "true" && <IconButton><DirectionsRailwayIcon /></IconButton>}
                      {row.isSnooze == "true" && <IconButton><WatchLaterIcon /></IconButton>}
                      {row.attechment && row.attechment.length > 0 && <IconButton><AttachFileIcon /></IconButton>}
                    </ButtonGroup>}
                  </div>
                </div>
              </div>
            </li>
          );
        }
      }
    }
    return retData;
  }

  setSelectedMail = (e, index) => {
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
    } else {
      isSelectAll = false;
    }
    this.setState({
      emailData,
      isSelectAll
    })
  }

  setSelectAllEmail = (e) => {
    let { emailData } = this.state;
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
    const { currentPage, totalPages, emailData } = this.state;
    let rows = [];
    if (emailData.length > 0) {
      for (let i = 0; i < totalPages; i++) {
        rows.push(<li key={i}><a className={currentPage === i ? 'active' : ''} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
      }
      return (
        <ul className="d-block" key={rows}>
          <div>
            {rows}
          </div>
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

  displayEmail = () => {
    const { emails } = this.state;
    let retData = []
    if (emails && emails.length > 0) {
      for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        retData.push((
          <li>
            <div className="recent-image">
              <img src={email.profile} height="50px" width="50px" alt="" />
              <div className="enabled"></div>
            </div>
            <div className="recent-name">
              <span>{email.name}</span>
            </div>
          </li>
        ))
      }
    }
    return retData
  }

  countryToFlag = (isoCode) => {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }

  setEmailType = (type) => {
    this.setState({
      searchemail: type,
    });
    this.props.dispatch(emailActions.searchallemails({ 'search': type }));
  }

  handleStateChange = (e) => {
    let { sendEmailData } = this.state;
    const { name, value } = e.target;
    sendEmailData[name] = value;
    this.setState({
      sendEmailData,
    })
  }

  setSelectedEmailUser = (val, type) => {
    let { sendEmailData } = this.state;
    sendEmailData[type] = val;
    this.setState({
      sendEmailData,
    })
  }

  handleFile = (e) => {
    const { files } = e.target;
    let { sendEmailData } = this.state;
    if (files && files.length === 1) {
      sendEmailData.attechment.push(files[0])
      this.setState({ sendEmailData });
    }
    else {
      for (let i = 0; i < files.length; i++) {
        sendEmailData.attechment.push(files[i])
        // console.log(files[i].name)
      }
      this.setState({ sendEmailData });
    }
  }

  handleRemoveFile = (indx) => {
    let { sendEmailData } = this.state
    sendEmailData.attechment.splice(indx, 1);
    this.setState({ sendEmailData })
  }
  validate = (isSubmitted) => {
    const validObj = {
      isValid: true,
      message: "",
    };
    let isValid = true;
    const retData = {
      emaildetail: validObj,
      to: validObj,
      isValid,
    };
    if (isSubmitted) {
      const { sendEmailData } = this.state;
      if (!sendEmailData.emaildetail) {
        retData.emaildetail = {
          isValid: false,
          message: "Email details is required",
        };
        isValid = false;
      }
      if (sendEmailData.to && sendEmailData.to.length == 0) {
        retData.to = {
          isValid: false,
          message: "TO is Required",
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };

  sendEmail = () => {
    const { sendEmailData } = this.state;
    this.setState({ isSubmitted: true })
    const errorData = this.validate(true);
    let sendData = {
      subject: sendEmailData.subject,
      emaildetail: sendEmailData.emaildetail,
      to: sendEmailData.to,
      bcc: sendEmailData.bcc,
      senderId: '2',
    }
    if (errorData.isValid) {
      this.props.dispatch(emailActions.sendEmail({ 'obj': sendData, 'attechment': sendEmailData.attechment }));
    }
  }

  render() {
    const { composEmail, isSelectAll, isSubmitted, currentPage, options, contacts, selectedValue, preselectValue, detailEmail, emailData, perPageLimit, searchemail, sendEmailData } = this.state;
    const errorData = this.validate(isSubmitted);
    let startIndex = perPageLimit * currentPage + 1;
    let endIndex = perPageLimit * (currentPage + 1);
    if (emailData && emailData.length) {
      if (endIndex > emailData.length) {
        endIndex = emailData.length;
      }
    }
    return (
      <div className="main-content">
        <div className="compose-email-section">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
              <div className="compose-left">
                <div className="compose-btn">
                  <Button type="button" onClick={this.onClickShowCompos} className="compose active">
                    <CreateIcon />
                    Compos Email
                  </Button>
                </div>
                <div className="compose-tabs">
                  <div className="heading">
                    folders
                    <span className="last"><ChevronRightIcon /></span>
                    <span><ChevronRightIcon /></span>
                  </div>
                  <ul>
                    <li className="active"><button className="btn"><span><MoveToInboxIcon /></span>Inbox</button></li>
                    <li><button className="btn"><span><i class="fas fa-paper-plane"></i></span>Sent</button></li>
                    <li><button className="btn"><span><DraftsIcon /></span>Draft</button></li>
                    <li><button className="btn"><span><ArchiveIcon /></span>Archived</button></li>
                    <li><button className="btn"><span><StarIcon /></span>Favourites</button></li>
                    <li><button className="btn"><span><CreateNewFolderIcon /></span>Spam</button></li>
                  </ul>
                </div>
                <div className="recent-content">
                  <div className="heading">Recent communication</div>
                  <ul>
                    {this.displayEmail()}
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
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
              {composEmail === true ?
                <div className="compose-right">
                  <div className="head-top progress-form">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5 col-12">
                        <div className="heading"><span onClick={this.onClickShowCompos}><KeyboardBackspaceIcon /></span>
                          <h4>Compose Email</h4>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7 col-12">
                        <div className="progress-draft-btn">
                          <Button variant="outlined" className="draft-btn">
                            <span><SaveIcon className="btn-icon" /></span>
                            Save to Draft
                          </Button>
                          <Button variant="outlined" className="delete-btn">
                            <span><DeleteForeverIcon className="btn-icon" /></span>
                            Delete
                          </Button>
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
                        displayValue="email"
                        placeholder=''
                        onSelect={(val) => this.setSelectedEmailUser(val, 'to')}
                        onRemove={(value) => this.setSelectedEmailUser(value, 'to')}
                      />
                      <span className="text-danger">
                        {errorData.to.message}
                      </span>
                    </div>
                    <div className="email-bcc">
                      <div className="d-inline-block heading">bcc</div>
                      <Multiselect
                        options={contacts}
                        selectedValues={selectedValue}
                        displayValue="email"
                        placeholder=''
                        onSelect={(val) => this.setSelectedEmailUser(val, 'bcc')}
                      />
                    </div>
                    <div className="email-subject">
                      <div className="d-inline-block heading">subject</div>
                      <div className="content">
                        {/* <span>Follow Up Progress From Order &#35;0001241251</span> */}
                        <input type="text" name="subject" onChange={this.handleStateChange} value={sendEmailData.subject} />
                      </div>
                    </div>
                    <div className="email-massage">
                      <div className="d-inline-block heading">massage</div>
                      <div className="content">
                        <textarea placeholder="Hello guys Lorem ipsum dolor sit amet ,consectetur adipiscing elit, sed do eiusmod temod tempor incidiunt ut labore et dolore magna aliqua." name="emaildetail" value={sendEmailData.emaildetail} onChange={this.handleStateChange} >
                        </textarea>
                        <span className="text-danger">
                          {errorData.emaildetail.message}
                        </span>
                      </div>
                      <div className="col-2 pr-0">
                        {
                          sendEmailData.attechment.map((file, indx) =>
                          (<span>
                             <a href={URL.createObjectURL(file)} target="_blank" rel="noreferrer">
                            <div className="file-name" aria-label={file.name} > {file.name}</div></a>
                            <IconButton className="CancelIcon" onClick={() => this.handleRemoveFile(indx, file)}>
                              <CancelIcon />
                            </IconButton>
                          </span>
                          )
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <div className="footer-section-inner">
                      <Button variant="contained" className="send-email-btn" onClick={this.sendEmail}><i class="fas fa-paper-plane"></i>send email</Button>
                      <IconButton className="attache-icon" ><input type="file" id="attechment" name="attechment" accept="image/png, image/jpeg" multiple onChange={this.handleFile} /><AttachFileIcon /></IconButton>
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
                <>
                  {detailEmail === true ?
                    <EmailDetail closeDetailPage={this.onClickShowMailDetail} />
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
                                <li onClick={() => this.setEmailType('important')}><a className={searchemail == 'important' ? "active" : ""}><span><MailIcon /></span>Important</a></li>
                                <li onClick={() => this.setEmailType('social')}><a className={searchemail == 'social' ? "active" : ""}><span><SupervisorAccountIcon /></span>Socials</a></li>
                                <li onClick={() => this.setEmailType('promotion')}><a className={searchemail == 'promotion' ? "active" : ""}><span><ConfirmationNumberIcon /></span>Promotion</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-5 col-lg-2 col-md-2 col-sm-2 col-2">
                            <div className="social-icons">
                              <ul>
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
                      {emailData.length > perPageLimit &&
                        <div className="footer-bottom">
                          <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-5 col-sm-5 col-12">
                              <div className="pagination-text">Showing <strong>{startIndex}&#8722;{endIndex}</strong> From <strong> {emailData.length} </strong> data </div>
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
                      }
                    </div>
                  }
                </>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { search_email_status, searchemail, search_all_email_status, searchallemail, send_email_status } = state.email
  return { search_email_status, searchemail, search_all_email_status, searchallemail, send_email_status }
}

export default connect(mapStateToProps)(EmailPage);