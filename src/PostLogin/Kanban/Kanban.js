import React, { Component } from "react";
import Joannah from '../../assets/images/dashbord/joannah.png';
import Johnson from '../../assets/images/dashbord/johnson.png';
import Marteens from '../../assets/images/dashbord/marteens.png';
import Machel from '../../assets/images/dashbord/machel.png';
import Kevin from '../../assets/images/dashbord/kevin.png';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import { ReactSortable } from "react-sortablejs";
import IconButton from '@material-ui/core/IconButton';

class Kanban extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quatationList: [
                {
                    title: 'Get Quotation for Department 1',
                    time: '4 days',
                    progressPer: 80,
                    progressPerColor: '#ffab2e',
                    type: 'Important',
                    color: 'ffab2e',
                },
                {
                    title: 'Contact Suppliers for Products',
                    time: '5 days',
                    progressPer: 50,
                    type: 'Supplier',
                    color: '5fcfff',
                },
                {
                    title: 'Received Products for Department',
                    time: '3 days',
                    progressPer: 40,
                    type: 'Products',
                    color: 'ff4955',
                },
                {
                    title: 'Create Invoice for Supplier 003',
                    time: '7 days',
                    progressPer: 30,
                    type: 'Invoice',
                    color: 'e328af',
                },
                {
                    title: 'Get Approval from Accounts Dept',
                    time: '6 days',
                    progressPer: 70,
                    type: 'Accounts',
                    color: '38e25c',
                },
                {
                    title: 'Products Received',
                    time: '2 days',
                    progressPer: 100,
                    type: 'Received',
                    color: '000000',
                },
                {
                    title: 'Follow up with Supplier for',
                    time: '4 days',
                    progressPer: 60,
                    type: 'Follow up',
                    color: 'ffab2e',
                },
                {
                    title: 'Received Quotation form Supplier',
                    time: '5 days',
                    progressPer: 25,
                    type: 'Quotation',
                    color: 'ff4955',
                },
                {
                    title: 'Get Quotation for Department 1',
                    time: '3 days',
                    progressPer: 75,
                    type: 'Important',
                    color: '38e25c',
                }
            ],
            onProgressCount: 0,
            completedCount: 0,
        }
    }

    componentDidMount() {
        let { quatationList, onProgressCount, completedCount } = this.state;
        for (let i = 0; i < quatationList.length; i++) {
            let data = quatationList[i];
            if (data.progressPer == 100) {
                completedCount++;
            } else {
                onProgressCount++;
            }
        }
        this.setState({
            completedCount,
            onProgressCount
        })
    }

    

    displayQuatation = () => {
        const { quatationList } = this.state;
        let retData = [];
        for (let i = 0; i < quatationList.length; i++) {
            let row = quatationList[i];
            retData.push(
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="suppliers-list">
                        <div className="suppliers-content">
                            <div className={`heading ${row.color}`} style={{ color: `#${row.color}` }}>
                                <span className="icon" style={{ backgroundColor: `#${row.color}` }}></span>
                                {row.type}
                                <IconButton className="float-right right-icon"><MoreHorizIcon /></IconButton>
                            </div>
                            <div className="department">{row.title}</div>
                            <div className="get-proses">
                                <LinearProgress variant="determinate" value={row.progressPer} bar={row.progressPerColor} style={{ backgroundColor: '#dadada' }} />
                            </div>
                            <div className="user-text">
                                <div className="user-images">
                                    <AvatarGroup max={4} >
                                        <Avatar alt="Remy Sharp" src={Johnson} />
                                        <Avatar alt="Travis Howard" src={Marteens} />
                                        <Avatar alt="Cindy Baker" src={Johnson} />
                                    </AvatarGroup>
                                </div>
                                <span>Due in {row.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return retData;
    }

    render() {
        const { quatationList, onProgressCount, completedCount } = this.state;
        // const BorderLinearProgress = withStyles((theme) =>
        //     createStyles({
        //         root: {
        //             height: 10,
        //             borderRadius: 5,
        //         },
        //         colorPrimary: {
        //             backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        //         },
        //         bar: {
        //             borderRadius: 5,
        //             backgroundColor: '#ffab2e',
        //         },
        //     }),

        // )(LinearProgress);
        return (
            <div className="main-content">
                <div className="kanban-head">
                    <div className="head-top">
                        <IconButton className="head-icon">
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <div className="head-content">
                            <h4>Quotations by Suppliers</h4>
                            <p>Created by Liolya Chan on June31,200</p>
                        </div>
                        <IconButton className="head-menu-icon">
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                    <div className="head-bottom">
                        <div className="row  justify-content-center align-items-center">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                <div className="head-left">
                                    <div className="group-imags">
                                        <AvatarGroup max={4}>
                                            <Avatar alt="Remy Sharp" src={Joannah} />
                                            <Avatar alt="Travis Howard" src={Machel} />
                                            <Avatar alt="Cindy Baker" src={Kevin} />
                                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                        </AvatarGroup>
                                    </div>
                                    <div className="head-btn">
                                        <Button variant="contained" className="invite-btn"><PersonAddIcon className="btn-icon" />Invite People</Button>
                                        <Button variant="outlined" className="private-btn">Private</Button>
                                        <Button variant="contained" className="edit-btn">Edit</Button>
                                        <Button variant="outlined" className="comments-btn"><ChatIcon className="btn-icon" />45 Comments</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className="head-right">
                                    <p>Total Progress 60%</p>
                                    <span><LinearProgress variant="determinate" value={40} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="suppliers-section">
                    <di className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="heading d-block">
                                To&#8722;Do List &#40;24&#41;
                                     <div className="count-btn">
                                    <Button variant="contained" className="plus-btn active"><AddIcon /></Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="heading d-block">
                                On Progress &#40;{onProgressCount}&#41;
                                     <div className="count-btn">
                                    <Button variant="contained" className="plus-btn"><AddIcon /></Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="heading d-block">
                                Completed &#40;{completedCount}&#41;
                                     <div className="count-btn">
                                    <Button variant="contained" className="plus-btn"><AddIcon /></Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="heading d-block">
                                Revised &#40;0&#41;
                                     <div className="count-btn">
                                    <Button variant="contained" className="plus-btn"><AddIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </di>
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <ReactSortable
                                list={quatationList}
                                setList={(newState) => this.setState({ quatationList: newState })}
                                className="row"
                            >
                                {this.displayQuatation()}

                            </ReactSortable>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="suppliers-list">
                                <div className="suppliers-content important">
                                    <div className="dragdrop-file">
                                        <span>Move card hare</span>
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


export default Kanban;