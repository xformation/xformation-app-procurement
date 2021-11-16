import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "rc-calendar/assets/index.css";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import "simplebar/dist/simplebar.min.css";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import ReorderIcon from "@material-ui/icons/Reorder";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { requistionAction } from "../../_actions";
import { status } from "../../_constants";
import { alert } from "../../_utilities";
import Loader from "../../_components/commonLoader";

class SelectBuyers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchval: "",
      approvedMemberList: [
        // {
        //     name: 'Angela Moss',
        //     image: David,
        //     shortName: 'Hs',
        //     shortNameColor: '#5ed1a7',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Ahmad Zayn',
        //     image: Fanny,
        //     shortName: 'AV',
        //     shortNameColor: '#256fc6',
        //     position: 'Photographer at',
        //     company: 'Audio video Teams',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Brian Connor',
        //     image: 'Hawkins',
        //     shortName: 'Cz',
        //     shortNameColor: '#dc3472',
        //     position: 'Designer at',
        //     company: 'Crimzon Guards Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Courtney Hawkins',
        //     image: 'David',
        //     shortName: 'Hs',
        //     shortNameColor: '#4b1643',
        //     position: 'Programmer at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Chyntia Smilee',
        //     image: 'Chyntia',
        //     shortName: 'Hs',
        //     shortNameColor: '#cb8fbc',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'David Here',
        //     image: 'Brian',
        //     shortName: 'Hs',
        //     shortNameColor: '#a6e6e6',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Denise Lee',
        //     image: 'Peter',
        //     shortName: 'Hs',
        //     shortNameColor: '#0b82ea',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Erbatov Axie',
        //     image: 'Dennise',
        //     shortName: 'Hs',
        //     shortNameColor: '#07504f',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Fanny Humble',
        //     image: 'Erbatow',
        //     shortName: 'Hs',
        //     shortNameColor: '#91d8d2',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Evan Khan',
        //     image: 'Evan',
        //     shortName: 'Hs',
        //     shortNameColor: '#4194e6',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Frankli jr.',
        //     image: 'Dennise',
        //     shortName: 'Hs',
        //     shortNameColor: '#eb6520',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Gandalf Hoos',
        //     image: 'Peter',
        //     shortName: 'Hs',
        //     shortNameColor: '#0c3972',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Gabriella',
        //     image: 'Brian',
        //     shortName: 'Hs',
        //     shortNameColor: '#45a13c',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Hanny Shella',
        //     image: 'Fanny',
        //     shortName: 'Hs',
        //     shortNameColor: '#da2866',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Ivankov',
        //     image: 'Hawkins',
        //     shortName: 'Hs',
        //     shortNameColor: '#9304f1',
        //     position: 'Marketing Manager at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
        // {
        //     name: 'Petel Morriss',
        //     image: "Peter",
        //     shortName: 'Hs',
        //     shortNameColor: '#4b1643',
        //     position: 'HR at',
        //     company: 'Highspeed Studios',
        //     contNo: '+1234567890',
        //     email: 'petermorriss@gmail.com'
        // },
      ],
      duplicateData: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(requistionAction.getbuyerList());
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.get_buyer_status !== this.props.get_buyer_status &&
      this.props.get_buyer_status === status.SUCCESS
    ) {
      if (
        this.props.selected_buyer_list &&
        this.props.selected_buyer_list.approvedMemberList &&
        this.props.selected_buyer_list.approvedMemberList.length > 0
      ) {
        if (this.props.selected_buyer_list.id == this.props.match.params.id) {
          this.setState({
            approvedMemberList: this.props.selected_buyer_list
              .approvedMemberList,
            duplicateData: this.props.selected_buyer_list.approvedMemberList,
            isLoading: false,
          });
        } else {
          this.setState({
            approvedMemberList: this.props.get_buyer_list,
            duplicateData: this.props.get_buyer_list,
            isLoading: false,
          });
        }
      } else {
        this.setState({
          approvedMemberList: this.props.get_buyer_list,
          duplicateData: this.props.get_buyer_list,
          isLoading: false,
        });
      }
    }
    if (
      prevProps.selected_buyer_list !== this.props.selected_buyer_list &&
      this.props.selected_buyer_status === status.SUCCESS
    ) {
      this.props.history.push(
        `/postlogin/viewdetails/${this.props.match.params.id}`
      );
    }
  }

  displayApprovedMemberList = () => {
    const { approvedMemberList, activeindex } = this.state;
    let retData = [];
    for (let i = 0; i < approvedMemberList.length; i++) {
      let row = approvedMemberList[i];
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
              <div className="d-inline-block menu-icon">
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </div>
              <div className="requisition">
                <Checkbox
                  name="saveReq"
                  color="primary"
                  name="saveReq"
                  checked={row.isSected}
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
    return retData;
  };

  handleStateChange = (index, e) => {
    const { checked } = e.target;
    const { approvedMemberList } = this.state;
    approvedMemberList[index].isSected = checked;
    this.setState({
      approvedMemberList,
    });
  };

  setSelectedBuyer = () => {
    const { approvedMemberList } = this.state;
    let count = 0;
    for (let i = 0; i < approvedMemberList.length; i++) {
      if (approvedMemberList[i].isSected) {
        count++;
      }
    }
    if (count > 0) {
      let sendData = {
        approvedMemberList,
        id: this.props.match.params.id,
      };
      this.props.dispatch(requistionAction.changeAddBuyerState(sendData));
    } else {
      alert.error("Please Select Buyers");
    }
  };

  searchbuyer = (e) => {
    const { value, name } = e.target;
    const { duplicateData } = this.state;
    this.setState({
      searchval: value,
    });
    var queryResult = [];
    if (duplicateData && duplicateData.length > 0) {
      if (value.trim()) {
        for (let i = 0; i < duplicateData.length; i++) {
          let row = duplicateData[i];
          if (
            row["name"].toLowerCase().indexOf(value) !== -1 ||
            row["name"].indexOf(value) !== -1
          ) {
            queryResult.push(duplicateData[i]);
            // break;
          }
        }
      } else {
        queryResult = duplicateData;
      }
      this.setState({
        approvedMemberList: queryResult,
      });
    }
  };

  render() {
    const { isLoading, searchval } = this.state;
    return (
      <>
        {!isLoading && (
          <div className="main-content">
            <div className="select-buyers-content">
              <div className="buyers-head">
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 ">
                    <div className="heading">
                      <h4>Select Buyers</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
                    <div className="head-right justify-content-end align-items-center">
                      <div className="search-bar">
                        <div className="form-group">
                          <input
                            type="text"
                            value={searchval}
                            name="searchval"
                            onChange={this.searchbuyer}
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Search here"
                          />
                          <button>
                            <SearchIcon />
                          </button>
                        </div>
                      </div>
                      <div className="social-buttom">
                        <ul>
                          {/* <li><Button variant="contained" className="plus-btn list-icon"><ReorderIcon /></Button></li> */}
                          {/* <li><Button variant="contained" className="plus-btn"><ViewModuleIcon /></Button></li> */}
                          <li className="last">
                            <Button
                              variant="contained"
                              onClick={this.setSelectedBuyer}
                              className="add-buyres-btn"
                            >
                              <PersonAddIcon className="user-icon" />
                              Add Buyres
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="membar-list">
                <div className="row">{this.displayApprovedMemberList()}</div>
              </div>
            </div>
          </div>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    get_buyer_status,
    get_buyer_list,
    selected_buyer_list,
    selected_buyer_status,
  } = state.requisition;
  return {
    get_buyer_status,
    get_buyer_list,
    selected_buyer_list,
    selected_buyer_status,
  };
}

const connectedSelectBuyers = connect(mapStateToProps)(SelectBuyers);
export default connectedSelectBuyers;
