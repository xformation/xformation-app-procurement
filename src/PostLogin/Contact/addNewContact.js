import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "rc-calendar/assets/index.css";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import SaveIcon from "@material-ui/icons/Save";
import ProfilePicture from "../../assets/images/contact/profile-picture.png";
import IconButton from "@material-ui/core/IconButton";
import "simplebar/dist/simplebar.min.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { connect } from 'react-redux';
import { contactAction } from '../../_actions';
import { status } from '../../_constants';
import { commonFunctions } from '../../_utilities/commonFunctions';

class addNewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      firstName: "",
      lastName: "",
      title: "",
      company: "",
      email: "",
      contactNo: "",
      profile: "",
      sendData: {},
      errors: {},
      isSubmitted: false,
      profileUrl: ""

    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      // this.props.dispatch(contactAction.getEditContactData({ 'id': this.props.match.params.id }));
      this.props.dispatch(contactAction.getEditContactData({ 'id': 1 }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.get_edit_contact_status !== this.props.get_edit_contact_status && this.props.get_edit_contact_status === status.SUCCESS) {
      if (this.props.contactData) {
        const { contactData } = this.props;
        this.setState({
          isEdit: true,
          firstName: contactData.firstName,
          lastName: contactData.lastName,
          title: contactData.title,
          company: contactData.company,
          email: contactData.email,
          contactNo: contactData.contactNo,
          profile: contactData.profile,
        })
      }
    }
    if (prevProps.add_contact_status !== this.props.add_contact_status && this.props.add_contact_status === status.SUCCESS) {
      this.props.history.push('/postlogin/contact');
    }
    if (prevProps.update_contact_status !== this.props.update_contact_status && this.props.update_contact_status === status.SUCCESS) {
      this.props.history.push('/postlogin/contact');
    }
  }

  validate = (isSubmitted) => {
    const validObj = {
      isValid: true,
      message: ""
    };
    let isValid = true;
    const retData = {
      email: validObj,
      password: validObj,
      contactNo: validObj,
      firstName: validObj,
      lastName: validObj,
      title: validObj,
      company: validObj,
      isValid
    };

    if (isSubmitted) {
      const { email, contactNo, firstName, lastName, title, company } = this.state;
      if (!firstName) {
        retData.firstName = {
          isValid: false,
          message: 'FirstName is required'
        }
        isValid = false;
      }
      if (!lastName) {
        retData.lastName = {
          isValid: false,
          message: 'LastName is required'
        }
        isValid = false;
      }
      if (!title) {
        retData.title = {
          isValid: false,
          message: 'Title is required'
        }
        isValid = false;
      }
      if (!company) {
        retData.company = {
          isValid: false,
          message: 'Company name is required'
        }
        isValid = false;
      }

      if (!email) {
        retData.email = {
          isValid: false,
          message: "Email is required"
        };
        isValid = false;
      } else if (email && !commonFunctions.validateEmail(email)) {
        retData.email = {
          isValid: false,
          message: "Enter valid email"
        };
        isValid = false;
      }

      if (!contactNo) {
        retData.contactNo = {
          isValid: false,
          message: 'Contact is required'
        }
        isValid = false;
      } else if (contactNo && !commonFunctions.validateNumeric(contactNo)) {
        retData.contactNo = {
          isValid: false,
          message: 'Vaid only digits'
        }
        isValid = false;
      }
      else if(contactNo.length>12 || contactNo.length < 10){
        retData.contactNo = {
          isValid: false,
          message: "Contact Number is not valid"
        }
        isValid = false;
      }

    }

    retData.isValid = isValid;
    return retData;
  };

  addNewContact = (prevProps) => {
    const { firstName, lastName, title, company, email, contactNo, profile, isEdit } = this.state;
    this.setState({ isSubmitted: true })
    let sentdata = {
      'firstName': firstName,
      'lastName': lastName,
      'title': title,
      'company': company,
      'email': email,
      'contactNo': contactNo,
      'profile': profile
    }

    const errorData = this.validate(true);
    if (errorData.isValid) {
      if (isEdit === true) {
        this.props.dispatch(contactAction.updateContact(sentdata))
      } else {
        this.props.dispatch(contactAction.addContact(sentdata));
      }
    }

  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    let { profile, profileUrl } = this.state
    if (name === 'profile') {
      profile = files[0];
      profileUrl = URL.createObjectURL(files[0])
      this.setState({
        profile,
        profileUrl
      });

    } else {
      this.setState({
        [name]: value
      });
    }

  }
  render() {
    const {
      firstName,
      lastName,
      title,
      company,
      email,
      contactNo,
      profileUrl,
      isSubmitted
    } = this.state;
    let errrorMessage = this.validate(isSubmitted);
    console.log(errrorMessage)
    return (
      <div className="main-content">
        <div className="contact-content">
          <div className="general-contect">
            <div className="heading">
              <h5>
                <IconButton className="head-icon">
                  <KeyboardBackspaceIcon />
                </IconButton>
                Add New Contact
              </h5>
            </div>
            <div className="general-information">
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                  <div className="user-content">
                    <span className="d-block add-contcat-heading">
                      General Info
                    </span>
                    <div className="d-inline-block requester">
                      <div className="form-group">
                        <label className="d-block">First Name</label>
                        <input
                          type="text"
                          value={firstName}
                          name="firstName"
                          placeholder="Sumuel"
                          onChange={this.handleChange}
                        />
                        <span>{errrorMessage.firstName.message}</span>
                      </div>
                    </div>
                    <div className="d-inline-block requester">
                      <div className="form-group">
                        <label className="d-block">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={lastName}
                          placeholder="Chen"
                          onChange={this.handleChange}
                        />
                        <span>{errrorMessage.lastName.message}</span>
                      </div>
                    </div>
                    <div className="d-inline-block requester">
                      <div className="form-group">
                        <label className="d-block">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={title}
                          placeholder="Graphic Designer"
                          onChange={this.handleChange}
                        />
                        <span>{errrorMessage.title.message}</span>
                      </div>
                    </div>
                    <div className="d-inline-block requester">
                      <div className="form-group">
                        <label className="d-block">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={company}
                          className="control-form"
                          placeholder="HighSpeed Studios"
                          onChange={this.handleChange}
                        />
                        <span>{errrorMessage.company.message}</span>
                      </div>
                    </div>
                    <span className="d-block add-contcat-heading">
                      Contacts
                    </span>
                    <div className="d-inline-block requester">
                      <div className="form-group">
                        <label className="d-block">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          placeholder="sumuelchen002@mail.com"
                          onChange={this.handleChange}
                        />
                        <span>{errrorMessage.email.message}</span>
                      </div>
                    </div>
                    <div className="d-inline-block requester">
                      <div className="form-group">
                        <label className="d-block">Phone Number</label>
                        <input
                          type="number"
                          max='12'
                          min='10'
                          name="contactNo"
                          value={contactNo}
                          placeholder="+0123456789"
                          onChange={this.handleChange}
                        />
                        <span>{errrorMessage.contactNo.message}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="requester profile">
                    <div className="form-group">
                      <label className="d-block">Profile Picture</label>
                      <div className="user-profile">
                        <div className="image">
                          <img src={profileUrl} alt="" />
                        </div>
                        <Button className="user-profile-uplod">
                          <CameraAltIcon className="camera-icon" />
                          <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            name='profile' onChange={(e) => this.handleChange(e)}
                          />
                          <span>changes photos</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <Button
                    variant="contained"
                    className="add-buyres-btn"
                    onClick={this.addNewContact}
                  >
                    <SaveIcon className="save-icon" />
                    Save Contacts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { get_edit_contact_status, contactData, add_contact_status,
    update_contact_status } = state.contact;
  return {
    get_edit_contact_status,
    contactData,
    add_contact_status,
    update_contact_status
  };
}

const connectedNewContact = connect(mapStateToProps)(addNewContact);
export default (connectedNewContact);