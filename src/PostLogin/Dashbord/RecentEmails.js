import React, { Component } from 'react';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EmailIcon from '@material-ui/icons/Email';
import StarIcon from '@material-ui/icons/Star';
import Kevin from '../../assets/images/dashbord/kevin.png';
import Joannah from '../../assets/images/dashbord/joannah.png';
import Machel from '../../assets/images/dashbord/machel.png';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { emailActions } from '../../_actions/email.actions'
import { connect } from 'react-redux'
import { status } from "../../_constants";
import { commonFunctions } from '../../_utilities/commonFunctions'
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ButtonGroup from '@material-ui/core/ButtonGroup';
class RecentEmails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMailData: [],
      recentEmailData: [],
      selectedType: 'important',
      buttonIndex: 0,
      important: true,
      socials: false,
      promotion: false,

    }
  }

  componentDidMount() {
    this.setState({ selectedMailData: this.state.recentEmailData.filter(x => x.type === this.state.selectedType) })
    this.props.dispatch(emailActions.searchallemails({ 'search': this.state.selectedType }));

  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.search_all_email_status !== prevProps.search_all_email_status) &&
      this.props.search_all_email_status === status.SUCCESS) {
      if (this.props.searchallemail && this.props.searchallemail.length > 0) {
        let data = this.props.searchallemail;
        if (data && data.length > 0) {
          this.props.dispatch(emailActions.searchallinboxemails(data))
          for (let i = 0; i < data.length; i++) {
            data[i].isChecked = false;
            data[i].showIcon = false;
          }
          this.setState({
            recentEmailData: data,
          });
        }
      }
    }
  }

  filterMail = (type) => {
    this.setState({
      selectedType: type,
    });
    this.props.dispatch(emailActions.searchallemails({ 'search': type }));
  }

  showIcon = (index) => {
    let { recentEmailData } = this.state;
    recentEmailData[index].showIcon = !recentEmailData[index].showIcon;
    this.setState({
      recentEmailData
    })
  }

  displyRecentEmails = () => {
    const { recentEmailData } = this.state;
    let retData = [];
    if (recentEmailData) {
      for (let i = 0; i < recentEmailData.length; i++) {
        let data = recentEmailData[i];
        let time;
        if (data.time) {
          time = data.time.split('T');
          time = time[1].split('.');
        }
        retData.push(
          <div className="recent-content" key={i}>
            <ul>
              <li>
                <div className="user-id">
                  <div className={`user-box ${data.isStar == "true" ? "active" : ""}`}><StarIcon /></div>
                  <div className="user-img"><img src={data.sender.profilePic} alt="" height="50px" width="50px" /></div>
                </div>
                <div className="user-content">
                  <div className="d-flex">
                    <div className="col-9" key={data.body}>
                      <span>{data.sender.email} {time[0]}</span>
                      <h5>{data.subject}</h5>
                      <p>{data.body}</p>
                    </div>
                    <div className="col-3 pr-0">
                      {!data.showIcon &&
                        <div className="list-icon">
                          <IconButton onClick={() => this.showIcon(i)} className="menu-icon"><MoreVertIcon /></IconButton>
                        </div>
                      }
                      {data.showIcon && <ButtonGroup variant="text" aria-label="text primary button group">
                        {data.isRead == "true" && <IconButton><DirectionsRailwayIcon /></IconButton>}
                        {data.isSnooze == "true" && <IconButton><WatchLaterIcon /></IconButton>}
                        {data.attechment && data.attechment.length > 0 && <IconButton><AttachFileIcon /></IconButton>}
                        <IconButton onClick={() => this.showIcon(i)} className="menu-icon"><MoreVertIcon /></IconButton>
                      </ButtonGroup>}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )
      }
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
                    <button type="button" className="btn btn-link" onClick={() => this.filterMail('important')}>
                      <EmailIcon /> Important
                    </button>
                  </li>
                  <li className={selectedType === 'social' ? "active" : ""}>
                    <button type="button" className="btn btn-link" onClick={() => this.filterMail('social')}>
                      <SupervisorAccountIcon /> Socials
                    </button>
                  </li>
                  <li className={selectedType === 'promotion' ? "active last" : "last"}>
                    <button type="button" className="btn btn-link" onClick={() => this.filterMail('promotion')}>
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

const mapStateToProps = (state) => {
  const { search_all_email_status, searchallemail, } = state.email
  return { search_all_email_status, searchallemail, }
}
export default connect(mapStateToProps)(RecentEmails);
