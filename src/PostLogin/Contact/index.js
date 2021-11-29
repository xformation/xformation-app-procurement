import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "rc-calendar/assets/index.css";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ReorderIcon from "@material-ui/icons/Reorder";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SearchIcon from "@material-ui/icons/Search";
import "simplebar/dist/simplebar.min.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { connect } from "react-redux";
import { contactAction } from "../../_actions";
import { status } from "../../_constants";
import Checkbox from "@material-ui/core/Checkbox";
import Loader from '../../_components/commonLoader';
import { Dialog, DialogContent, DialogTitle, DialogActions, Tooltip } from '@material-ui/core';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiData: {
        status: "",
        reqno: "",
        depart: "",
        isSected: '',
      },
      deleteIndex:'',
      openDialog:false,
      newContact: false,
      activeindex: 0,
      contactMemberList: [],
      contactUserList: [],
      duplicateContactUserList:[],
      displayOption: false,
      searchContact: [],
      deletePopup: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(contactAction.fetchContactList());
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search_contact_status !== this.props.search_contact_status &&
      this.props.search_contact_status === status.SUCCESS
    ) {
      this.setState({
        searchContact: this.props.searchContact,
      });
    }
    if (
      prevProps.delete_contact_status !== this.props.delete_contact_status &&
      this.props.delete_contact_status === status.SUCCESS
    ) {
      this.props.dispatch(contactAction.fetchContactList());
    }
    if (
      prevProps.get_contact_status !== this.props.get_contact_status &&
      this.props.get_contact_status === status.SUCCESS
    ) {
      this.setState({
        contactUserList: this.props.getContact,
        duplicateContactUserList:this.props.getContact
      });
    }
  }
  onClickDelete = (id) => {
    const { openDialog } = this.state;
    let deleteItem = !openDialog;
    this.setState({
        openDialog: deleteItem,
        deleteIndex: id,
    })
};
  removeContact = (id , index) => {
    // console.log(id)
    let{openDialog}=this.state
    this.props.dispatch(contactAction.deleteContact({ id: this.state.deleteIndex }));
    openDialog= false;
    this.setState({openDialog})
  };

  toggleDisplayOptions = () => {
    this.setState({ displayOption: !this.state.displayOption });
  };

  editContact = (id) => {
    this.props.history.push(`/postlogin/newcontact/${id}`);
  };

  handleStateChange = (index, e) => {
    let { contactUserList } = this.state;
    const { checked } = e.target;
    contactUserList[index]["isSelected"] = checked
    this.setState({contactUserList})
  }
  onSearchChange=(e)=>{
const{value}=e.target;
let{duplicateContactUserList,contactUserList}=this.state;
let queryResult=[];
if(duplicateContactUserList && duplicateContactUserList.length>0){
  for(let i=0 ;i<duplicateContactUserList.length;i++){
    let approvedData= duplicateContactUserList[i]
    if(approvedData["email"].toLowerCase().indexOf(value.trim()) !==-1 || approvedData["email"].indexOf(value.trim())!==-1){
queryResult.push(approvedData);
    }
  }
  contactUserList = queryResult
}
else{
 contactUserList = duplicateContactUserList
}
this.setState({contactUserList})
  }
  displayContactUserList = () => {
    const { contactUserList, activeindex, displayOption } = this.state;
    let retData = [];
    let isloading = this.props.get_contact_status === status.IN_PROGRESS;
    if (!isloading) {
      for (let i = 0; i < contactUserList.length; i++) {
        let row = contactUserList[i];
        retData.push(
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
            key={row.name}
          >
            <div className="member-boxs">
              <Card
                className={
                  activeindex == i ? "members-box active" : "members-box"
                }
                onClick={() => this.setState({ activeindex: i })}
              >
                <div className="d-flex justify-content-center align-items-center user-img">
                  <div className="d-flex justify-content-center align-items-center image">
                    <img src={row.profile} alt="" />
                    <div
                      className="member-position"
                      style={{ backgroundColor: `${row.shortNameColor}` }}
                    >
                      {row.name.match(/\b(\w)/g)}
                    </div>
                  </div>
                </div>
                <div
                  className="d-inline-block menu-icon"
                  style={{ display: "flex" }}
                >
                  <IconButton aria-label="settings">
                    <MoreVertIcon
                      onClick={
                        i === activeindex ? this.toggleDisplayOptions : null
                      }
                    />
                  </IconButton>
                  <div className="settings-toggle">
                    {displayOption && i === activeindex ? (
                      <>
                        <span onClick={() => this.editContact(row.id)}>
                          <EditTwoToneIcon /> Edit
                        </span>
                        <span onClick={(id) =>  this.onClickDelete(row.id)}>
                          <HighlightOffIcon /> Delete
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="requisition">
                  <Checkbox
                    name="saveReq"
                    color="primary"
                    checked={row.isSelected}
                    onChange={(e) => this.handleStateChange(i, e)}
                  />
                </div>
                <div className="member-details">
                  <ul>
                    <li>
                      <b>{row.name}</b>
                    </li>
                    <li>
                      <span>{row.position}</span>
                    </li>
                    <li>
                      <p>{row.company}</p>
                    </li>
                  </ul>
                </div>
                <div className="member-contact">
                  <ul>
                    <li>
                      <Button className="icon-btn">
                        <CallIcon className="phone-icon" />
                      </Button>
                      <a href={`tel:${row.contNo}`}>{row.contNo}</a>
                    </li>
                    <li>
                      <Button className="icon-btn">
                        <MailIcon className="phone-icon" />
                      </Button>
                      <a href={`mailto: ${row.email}`}>{row.email}</a>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        );
      }
    }
    else {
      retData.push(<Loader />);
    }
    return retData;
  };
  render() {
  let {openDialog}=this.state
    return (
      <div className="main-content">
        <div className="contact-content">
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
                  <div className="head-right justify-content-lg-end align-items-center">
                    <div className="search-bar">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Search here"
                          onChange={this.onSearchChange}
                        />
                        <button>
                          <SearchIcon />
                        </button>
                      </div>
                    </div>
                    <div className="social-buttom">
                      <ul>
                        {/* <li>
                                                    <Button
                                                        variant="contained"
                                                        className="plus-btn list-icon"
                                                    >
                                                        <ReorderIcon />
                                                    </Button>
                                                </li>
                                                <li>
                                                    <Button variant="contained" className="plus-btn">
                                                        <ViewModuleIcon />
                                                    </Button>
                                                </li> */}
                        <li className="last">
                          <Link
                            to="/postlogin/newcontact"
                            variant="contained"
                            className="add-buyres-btn"
                            onClick={this.onClickShowNewContact}
                          >
                            <PersonAddIcon className="user-icon" />
                            New Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content">
              <div className="select-buyers-content">
                <div className="membar-list">
                  <div className="row">{this.displayContactUserList()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog open={openDialog} onClose={() => this.setState({ openDialog: false })} aria-labelledby="form-dialog-title" className="addNewItemDialog">
                    <DialogTitle id="form-dialog-title" className="dialogSmWidth addNewItemDialogTitle">
                        Delete Confirmation
                    </DialogTitle>
                    <DialogContent className="dialogSmWidth addNewItemDialogContent">
                        <p>Are you sure to delete record?</p>
                    </DialogContent>
                    <DialogActions className="dialogSmWidth addNewItemDialogActions">
                        <Button variant="contained" onClick={this.removeContact} className="primary-btn">
                            Yes
                        </Button>
                        <Button variant="contained" onClick={() => this.setState({ openDialog: false })} className="default-btn">
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    add_contact_status,
    addContact,
    delete_contact_status,
    deleteContact,
    get_contact_status,
    getContact,
    search_contact_status,
    searchContact,
    update_contact_status,
    updateContact,
  } = state.contact;
  return {
    add_contact_status,
    addContact,
    delete_contact_status,
    deleteContact,
    get_contact_status,
    getContact,
    search_contact_status,
    searchContact,
    update_contact_status,
    updateContact,
  };
}

const connectedContact = connect(mapStateToProps)(Contact);
export default connectedContact;
