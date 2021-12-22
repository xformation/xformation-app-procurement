import React, { Component } from 'react';
import DateFormat from './../Dashbord/DateFormat';
import Button from "@material-ui/core/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

class BudgetOverview extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="main-content">
                <div className="budget-section">
                    <div className="budget-head-section">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="heading">
                                    <h3>Budget Overview</h3>
                                    <span>Synectiks Budget FY 2021</span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="calender">
                                    <DateFormat className="d-block" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="budget-content-section">
                        <div className="d-flex justify-content-end align-items-center">
                            <Button
                                variant="contained"
                                className="primary-btn allocate-btn">
                                Budget Allocate
                            </Button>
                        </div>
                        <div className="allocate-box">
                            <div className="d-block allocate-heading">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-9">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <h4>PSDS Admin</h4>
                                            <div className="d-flex justify-content-center align-items-center graph-circle">
                                                <CircularProgressbar
                                                    value={49}
                                                    text={`${49}%`}
                                                    strokeWidth={15}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        trailColor: "#f0f0f0",
                                                        pathColor: "#6418c3",
                                                        textColor: "#202020",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex justify-content-end align-items-center">
                                            <a href="#" className="primary-link">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block allocate-progress">
                                <div className="d-block impacted">$ 200000 Impacted on $ 4,50,000</div>
                                <div class="progress">
                                    <div class="progress-bar used" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div class="progress-bar commited" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="75" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center allocate-progress-prices">
                                <div className="price used">
                                    <h5>Used</h5>
                                    <p>$2,00,000</p>
                                </div>
                                <div className="price commited">
                                    <h5>Commited</h5>
                                    <p>$2,00,000</p>
                                </div>
                                <div className="price avaliable">
                                    <h5>Avaliable</h5>
                                    <p>$2,00,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="allocate-box">
                            <div className="d-block allocate-heading">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-9">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <h4>PSDS Admin</h4>
                                            <div className="d-flex justify-content-center align-items-center graph-circle">
                                                <CircularProgressbar
                                                    value={49}
                                                    text={`${49}%`}
                                                    strokeWidth={15}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        trailColor: "#f0f0f0",
                                                        pathColor: "#6418c3",
                                                        textColor: "#202020",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex justify-content-end align-items-center">
                                            <a href="#" className="primary-link">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block allocate-progress">
                                <div className="d-block impacted">$ 200000 Impacted on $ 4,50,000</div>
                                <div class="progress">
                                    <div class="progress-bar used" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div class="progress-bar commited" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="75" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center allocate-progress-prices">
                                <div className="price used">
                                    <h5>Used</h5>
                                    <p>$2,00,000</p>
                                </div>
                                <div className="price commited">
                                    <h5>Commited</h5>
                                    <p>$2,00,000</p>
                                </div>
                                <div className="price avaliable">
                                    <h5>Avaliable</h5>
                                    <p>$2,00,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="allocate-box">
                            <div className="d-block allocate-heading">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-9">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <h4>PSDS Admin</h4>
                                            <div className="d-flex justify-content-center align-items-center graph-circle">
                                                <CircularProgressbar
                                                    value={49}
                                                    text={`${49}%`}
                                                    strokeWidth={15}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        trailColor: "#f0f0f0",
                                                        pathColor: "#6418c3",
                                                        textColor: "#202020",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex justify-content-end align-items-center">
                                            <a href="#" className="primary-link">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block allocate-progress">
                                <div className="d-block impacted">$ 200000 Impacted on $ 4,50,000</div>
                                <div class="progress">
                                    <div class="progress-bar used" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div class="progress-bar commited" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="75" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center allocate-progress-prices">
                                <div className="price used">
                                    <h5>Used</h5>
                                    <p>$2,00,000</p>
                                </div>
                                <div className="price commited">
                                    <h5>Commited</h5>
                                    <p>$2,00,000</p>
                                </div>
                                <div className="price avaliable">
                                    <h5>Avaliable</h5>
                                    <p>$2,00,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BudgetOverview;