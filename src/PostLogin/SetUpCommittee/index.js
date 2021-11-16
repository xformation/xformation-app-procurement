import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { committeeAction } from '../../_actions';
import { status } from '../../_constants';
import { alert } from '../../_utilities';

const options = [
    'Delete'
];

class SetUpCommittee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: ""
            },
            activeindex: null,
            committeeMember: [],
            deletePopup: null,
        }
    };

    componentDidMount() {
        this.props.dispatch(committeeAction.addCommittee());
        this.props.dispatch(committeeAction.searchCommittee());
        // this.props.dispatch(committeeAction.deleteCommittee(""));
        // //this.props.dispatch(committeeAction.getCommittee(""));
        //this.props.dispatch(committeeAction.updateCommittee(""));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.search_committee_status !== this.props.search_committee_status && this.props.search_committee_status === status.SUCCESS) {
            this.setState({
                committeeMember: this.props.searchCommittee,
            });
        }
        if (prevProps.delete_committee_status !== this.props.delete_committee_status && this.props.delete_committee_status === status.SUCCESS) {
            const { deleteCommittee } = this.props;
            const { committeeMember } = this.state;
            const length = committeeMember.length;
            let index = -1;
            for (let i = 0; i < length; i++) {
                if (committeeMember[i]._id === deleteCommittee.id) {
                    index = i;
                    break;
                }
            }
            committeeMember.splice(index, 1);
            this.setState({
                committeeMember,
                deletePopup: null
            });
            alert.success("Committee deleted successfully");
        }
    };

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
        }
    };

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
                    message: "Filter By Status is required"
                };
                isValid = false;
            }
        }
        retData.isValid = isValid;
        return retData;
    };

    onClickShowDeletePopup = event => {
        this.setState({ deletePopup: event.currentTarget });
    };

    onClickCommitteeItemDelete = (deleteCommitee) => {
        this.setState({ deletePopup: null });
        if (deleteCommitee) {
            this.props.dispatch(committeeAction.deleteCommittee(deleteCommitee.id));
        }
    };

    displayCommiteeLists = (committee) => {
        let retData = [];
        const { activeindex, deletePopup } = this.state;
        const { delete_committee_status } = this.props;
        const open = Boolean(deletePopup);
        for (let i = 0; i < committee.length; i++) {
            let row = committee[i];
            retData.push(
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={row.id}>
                    <Card className={activeindex == i ? "member-box active" : "member-box"} onClick={() => this.setState({ activeindex: i })}>
                        <div className="d-inline-block menu-icon">
                            <IconButton
                                aria-label="More"
                                aria-owns={open ? 'long-menu' : null}
                                aria-haspopup="true"
                                aria-controls="fade-menu"
                                onClick={this.onClickShowDeletePopup}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={deletePopup}
                                open={open}
                                TransitionComponent={Fade}
                                onClose={this.onClickCommitteeItemDelete}
                                PaperProps={{
                                    style: {
                                        width: 120,
                                    },
                                }}
                            >
                                {options.map(option => (
                                    <MenuItem
                                        key={option}
                                        selected={option === 'Delete'}
                                        onClick={() => this.onClickCommitteeItemDelete(row)}
                                        disabled={delete_committee_status === status.IN_PROGRESS}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <div className="image">
                            <img src={row.image} alt="" />
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

    displayCommitee = () => {
        const { committeeMember } = this.state;
    }

    render() {
        const { requiData, isSubmitted, committeeMember } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="setup-committee-section">
                    <div className="heading">
                        <h4>SetUp Committee</h4>
                    </div>
                    <div className="setup-committee-content">
                        <div className="add-members">
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-form-label">Select Committee Type</label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-form-field">
                                    <FormControl className="select-menu">
                                        <NativeSelect name="status" value={requiData.status}
                                            onChange={this.handleStateChange} isvalid={errorData.status.isValid}>
                                            <option value="">-Select-</option>
                                            {this.displayCommitee()}
                                            {/* <option value={10}>abc</option>
                                            <option value={20}>def</option>
                                            <option value={30}>abc</option> */}
                                        </NativeSelect>
                                    </FormControl>
                                    <span className="d-block w-100 text-danger">{errorData.status.message}</span>
                                </div>
                            </div>
                            <div className="form-group row col-form-group">
                                <label className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-form-label">Add Committee Members</label>
                                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-form-field">
                                    <Button variant="contained" className="primary-btn" disableElevation onClick={this.handleClickMethod}>
                                        <AddCircleIcon className="plus-icon" />
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="select-members">
                            <div className="heading">
                                <h5>Selected Committee Members</h5>
                            </div>
                            <div className="members-boxs">
                                <div className="row">
                                    {this.displayCommiteeLists(committeeMember)}
                                    <div className="committee-btn">
                                        <Button variant="contained" className="primary-btn">
                                            <i className="fas fa-paper-plane"></i>
                                            Save &#38; Send invites
                                        </Button>
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

function mapStateToProps(state) {
    const { addCommittee, add_committee_status, delete_committee_status, deleteCommittee, getCommittee, get_committee_status, search_committee_status, searchCommittee, update_committee_status, updateCommittee } = state.committee;
    return {
        add_committee_status,
        addCommittee,
        delete_committee_status,
        deleteCommittee,
        get_committee_status,
        getCommittee,
        search_committee_status,
        searchCommittee,
        update_committee_status,
        updateCommittee,
    };
}

const connectedSetUpCommittee = connect(mapStateToProps)(SetUpCommittee);
export default (connectedSetUpCommittee);
