import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import StarIcon from '@material-ui/icons/Star';
import { emailActions } from '../../_actions/email.actions';
import { connect } from 'react-redux';
import { status } from "../../_constants";

class EmailDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {},
        }
    }

    componentDidMount() {
        this.props.dispatch(emailActions.getEmailDetail({ 'id': this.props.emailid }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.get_email_detail_status !== prevProps.get_email_detail_status && this.props.get_email_detail_status === status.SUCCESS) {
            if (this.props.emaildetail_res) {
                this.setState({
                    email: this.props.emaildetail_res,
                })
            }
        }
        if (prevProps.delete_email_status !== this.props.delete_email_status && this.props.delete_email_status === status.SUCCESS) {
            this.props.closeDetailPage();
        }
    }

    onClickShowMailDetail = () => {
        this.props.closeDetailPage();
    }

    deleteEmail = () => {
        this.props.dispatch(emailActions.deleteEmail({ 'id': this.props.emailid }))
    }

    fileDownloadHandler = (fileurl, fileName) => {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = fileurl;
        a.download = fileName;
        a.target = "_blank";
        a.click();
        a.remove();
        window.URL.revokeObjectURL(fileurl);
    }

    render() {
        const { email } = this.state;
        let emailtime = '';
        if (email && email.time) {
            let time = email.time.split('T');
            emailtime = time[1].split('.');
        }
        return (
            <div className="compose-right">
                <div className="d-block mail-reply-head">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="d-flex align-items-center justify-content-start left">
                                <Button className="back-btn" onClick={this.onClickShowMailDetail}>
                                    <KeyboardBackspaceIcon />
                                </Button>
                                <Button className="user-btn">
                                    <StarIcon />
                                </Button>
                                {email && email.sender &&
                                    <>
                                        {email.sender.profilePic &&
                                            <div className="user-img"><img src={email.sender.profilePic} alt="" /></div>
                                        }
                                        <div className="d-block user-name-mail">
                                            {email.sender.name && <strong className="d-block">{email.sender.name}</strong>}
                                            {email.sender.email && <span className="d-block">{email.sender.email}</span>}
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="d-flex align-items-center justify-content-start justify-content-xl-end right">
                                <Button className="btn"><i className="fas fa-print text-info"></i></Button>
                                <Button className="btn"><i className="fas fa-reply text-success"></i></Button>
                                <Button className="btn" onClick={this.deleteEmail}><i className="fas fa-trash-alt text-danger"></i></Button>
                                <Button className="btn"><i className="fas fa-clock text-muted"></i></Button>
                                <Button className="btn"><i className="fas fa-ellipsis-v text-muted"></i></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block mail-reply-content">
                    {email.time && <div className="d-block date-time">{email.time.split('T')}</div>}
                    {email && email.subject && <div className="d-block name">{email.subject}</div>}
                    {email && email.tags &&
                        <div className="d-block btns">
                            {email.tags.map((val) => {
                                return (
                                    <Button className="primary">&#35;{val.name}</Button>
                                );
                            })
                            }
                        </div>
                    }

                    {email && email.body &&
                        <div className="d-block text-content">
                            <p>{email.body}</p>
                        </div>
                    }
                    {email && email.attechment &&
                        <div className="d-block attachmaent">
                            <div className="row justify-content-around align-items-center">
                                <div className="col-lg-6 col-6">
                                    <div className="d-block heading-text">
                                        <i className="fas fa-paperclip"></i>
                                        Attachmaent Files ({email.attechment.length})
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className="d-block text-right">
                                        <Button className="download-btn">
                                            <i className="fas fa-download"></i>
                                            Download All
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-start align-items-center mt-4">
                                {email.attechment.map((val) => {
                                    return (
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                            <div className="attach-box" onClick={() => this.fileDownloadHandler(val.url, val.name)}>
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-4">
                                                        {val.type == 'ppt' &&
                                                            <div className="icon file"><i className="fas fa-file"></i></div>
                                                        }
                                                        {val.type == 'audio' &&
                                                            <div className="icon music"><i className="fas fa-music"></i></div>
                                                        }
                                                        {val.type == 'mp4' &&
                                                            <div className="icon film"><i class="fas fa-film-alt"></i></div>
                                                        }
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-6 col-8 pl-ms-0">
                                                        <div className="text">
                                                            <strong>{val.fileName}</strong>
                                                            <span>{val.size} KB</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                                }
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="attach-box">
                                        <div className="row justify-content-start align-items-center">
                                            <div className="col-lg-4 col-md-4 col-4 col-sm-6">
                                                <div className="icon music"><i className="fas fa-music"></i></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-8 col-sm-6 pl-ms-0">
                                                <div className="text">
                                                    <strong>Voice_REC_00012.mp3</strong>
                                                    <span>163 MB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="attach-box">
                                        <div className="row justify-content-start align-items-center">
                                            <div className="col-lg-4 col-md-4 col-4 col-sm-6">
                                                <div className="icon film"><i class="fas fa-film-alt"></i></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-8 col-sm-6 pl-ms-0">
                                                <div className="text">
                                                    <strong>Video_00345.mp4</strong>
                                                    <span>531 MB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    }
                </div>
                <div className="d-block mail-reply-footer">
                    <Button className="reply-btn">
                        <i className="fas fa-reply"></i>
                        Reply this email
                    </Button>
                    <Button className="forward-btn">
                        <i className="fas fa-share"></i>
                        Forward
                    </Button>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { get_email_detail_status, emaildetail_res, delete_email_status } = state.procurement
    return { get_email_detail_status, emaildetail_res, delete_email_status }
}

export default connect(mapStateToProps)(EmailDetail);