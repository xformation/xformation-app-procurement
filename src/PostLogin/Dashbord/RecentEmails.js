import React, { Component } from 'react';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EmailIcon from '@material-ui/icons/Email';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import StarIcon from '@material-ui/icons/Star';
import Kevin from '../../assets/images/dashbord/kevin.png';
import Joannah from '../../assets/images/dashbord/joannah.png';
import Machel from '../../assets/images/dashbord/machel.png';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class RecentEmails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMailData: [],
            recentEmailData: [
                {
                    recentEmail: "kevinhard@mail.com 24 min ago",
                    recentTitle: "Quotation for the requested products",
                    recentImg: Kevin,
                    type: 'important',
                    recentDes: "Ipsmum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "joanhsitepu@mail.com yesterday,at 11:24,AM",
                    recentTitle: "Need 10 Smart Phones for our team",
                    recentImg: Joannah,
                    type: 'important',
                    recentDes: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "machelgreen@mail.com October 25th,2020 08:55PM",
                    recentTitle: "Order confirmed",
                    recentImg: Machel,
                    type: "important",
                    recentDes: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "kevinhard@mail.com 24 min ago",
                    recentTitle: "Quotation for the requested products",
                    recentImg: Kevin,
                    type: 'social',
                    recentDes: "Ipsmum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "joanhsitepu@mail.com yesterday,at 11:24,AM",
                    recentTitle: "Need 10 Smart Phones for our team",
                    recentImg: Joannah,
                    type: 'social',
                    recentDes: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "machelgreen@mail.com October 25th,2020 08:55PM",
                    recentTitle: "Order confirmed",
                    recentImg: Machel,
                    type: "social",
                    recentDes: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "kevinhard@mail.com 24 min ago",
                    recentTitle: "Quotation for the requested products",
                    recentImg: Kevin,
                    type: 'promotion',
                    recentDes: "Ipsmum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "joanhsitepu@mail.com yesterday,at 11:24,AM",
                    recentTitle: "Need 10 Smart Phones for our team",
                    recentImg: Joannah,
                    type: 'promotion',
                    recentDes: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    recentEmail: "machelgreen@mail.com October 25th,2020 08:55PM",
                    recentTitle: "Order confirme",
                    recentImg: Machel,
                    type: "promotion",
                    recentDes: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ],
            selectedType: 'important',
            buttonIndex: 0,
            important: true,
            socials: false,
            promotion: false,

        }
    }

    componentDidMount() {
        this.setState({ selectedMailData: this.state.recentEmailData.filter(x => x.type === this.state.selectedType) })
    }

    filterMail = (type) => {
        this.setState({
            selectedType: type,
            selectedMailData: this.state.recentEmailData.filter(x => x.type === type)
        })
    }

    displyRecentEmails = () => {
        const { selectedMailData } = this.state;
        let retData = [];
        for (let i = 0; i < selectedMailData.length; i++) {
            let data = selectedMailData[i];
            retData.push(
                <div className="recent-content">
                    <ul>
                        <li>
                            <div className="user-id">
                                <IconButton className="user-box">
                                    <StarIcon />
                                </IconButton>
                                <div className="user-img"><img src={data.recentImg} alt="" /></div>
                            </div>
                            <div className="user-content">
                                <div className="d-flex">
                                    <div className="col-9">
                                        <span>{data.recentEmail}</span>
                                        <h5>{data.recentTitle}</h5>
                                        <p>{data.recentDes}</p>
                                    </div>
                                    <div className="col-3">
                                        <IconButton className="social-icon">
                                            <MoreVertIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        }
        return retData;
    }

    render() {
        const { selectedType } = this.state;
        return (
            <div className="recent-email-right">
                <div className="heading-top">
                    <div className="row">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                            <div className="recent-heading">
                                <h4>Recent Emails</h4>
                                <span>Lorem ipsum dolor sit amet</span>
                            </div>
                        </div>
                        <div className=" col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="social-button">
                                <ul>
                                    <li className={selectedType === 'important' ? "active" : ""}>
                                        <button type="button" class="btn btn-link" onClick={() => this.filterMail('important')}>
                                            <EmailIcon /> Important
                                        </button>
                                    </li>
                                    <li className={selectedType === 'social' ? "active" : ""}>
                                        <button type="button" class="btn btn-link" onClick={() => this.filterMail('social')}>
                                            <SupervisorAccountIcon /> Socials
                                        </button>
                                    </li>
                                    <li className={selectedType === 'promotion' ? "active last" : "last"}>
                                        <button type="button" class="btn btn-link" onClick={() => this.filterMail('promotion')}>
                                            <ConfirmationNumberIcon /> Promotion
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SimpleBar className="recent-list">
                    {this.displyRecentEmails()}
                </SimpleBar>
            </div>
        )
    }
}

export default RecentEmails;