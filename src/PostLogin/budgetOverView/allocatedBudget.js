import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { connect } from 'react-redux';
import Table from "../../Table/Table";
import { budgetActions } from '../../_actions/budgetOverview.actions'
import { status } from '../../_constants'
import { budget } from '../../_reducers/budgetOverview.reducer';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

class BudgetAllocate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allotedDudget: {},
            columns: [
                {
                    label: "S No",
                    key: "sno",
                    renderCallback: (value, index) => {
                        return (
                            <td>
                                <span className={"s-no"}>{index + 1}</span>
                            </td>
                        );
                    },
                },
                {
                    key: "ItemDescription",
                    renderCallback: (value) => {
                        return (
                            <td>
                                <span className={"requisitions-no"}>{value}</span>
                            </td>
                        );
                    },
                },
                {
                    label: "Requistion Type",
                    key: "requisitionType",
                    renderCallback: (value) => {
                        return (
                            <td>
                                <span className='={requisitions-no}'>{value}</span>
                            </td>
                        )
                    }
                },
                {
                    label: "Requisition Price",
                    key: "Price",
                    renderCallback: (value) => {
                        return (
                            <td>
                                <span className={"department-value"}>{value}</span>
                                <span className={"department-text"}></span>
                            </td>
                        );
                    },
                },

                {
                    label: "Requisitions Number",
                    key: "RqNo",
                    renderCallback: (value) => {
                        return (
                            <td>
                                <span className="department-value">{value}</span>
                            </td>
                        );
                    },
                },
                {
                    label: "Details",
                    key: "Images",
                    renderCallback: (value) => {
                        return (
                            <td>
                                <AvatarGroup max={5}>
                                    {value.map(val => <Avatar alt="Remy Sharp" src={val.MembersProfile} />)}
                                </AvatarGroup>
                            </td>
                        );
                    },
                },
            ],
            tableData: [],
        }
    }

    componentDidMount() {
        this.props.dispatch(budgetActions.getBugetAllocated({ 'id': 10 }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.budget_allocated_status !== prevProps.budget_allocated_status &&
            this.props.budget_allocated_status === status.SUCCESS) {
            if (this.props.budget_allocatyed_data && this.props.budget_allocatyed_data.budget) {
                this.setState({ allotedDudget: this.props.budget_allocatyed_data.budget })
            }
            if (this.props.budget_allocatyed_data
                && this.props.budget_allocatyed_data.depTableData
                && this.props.budget_allocatyed_data.depTableData.length > 0) {
                this.setState({ tableData: this.props.budget_allocatyed_data.depTableData })
            }
        }
    }

    render() {
        const { columns, tableData, allotedDudget } = this.state;
        return (
            <div className="main-content">
                {allotedDudget && <div className="budget-section">
                    <div className="budget-content-section">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-8 col-12">
                                <div className="d-block w-100 heading"><h4>Budget Overview</h4></div>
                                {allotedDudget.CommitedBudget && <div className="d-block w-100 limit-text">Approved Budget limit:
                                    <span>${allotedDudget.CommitedBudget}</span></div>}
                            </div>
                            <div className="col-md-4 col-12">
                                <Button onClick={() => this.props.history.push(`/postlogin/budgetallocation`)}
                                    variant="contained"
                                    className="primary-btn allocate-btn">
                                    Budget Allocate
                                </Button>
                            </div>
                        </div>
                        <div className="allocate-box">
                            <div className="d-block allocate-heading">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-start align-items-center">
                                            {allotedDudget.Department && <h4>{allotedDudget.Department}</h4>}
                                            <div className="d-flex justify-content-center align-items-center graph-circle">
                                                {allotedDudget.UsedBudgetPercentage && <CircularProgressbar
                                                    value={allotedDudget.UsedBudgetPercentage}
                                                    text={`${allotedDudget.UsedBudgetPercentage}%`}
                                                    strokeWidth={15}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        trailColor: "#f0f0f0",
                                                        pathColor: "#6418c3",
                                                        textColor: "#202020",
                                                    })}
                                                />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block allocate-progress">
                                {allotedDudget.TotalBudget && allotedDudget.UsedBudget && <div className="d-block impacted">$ {allotedDudget.UsedBudget} Impacted on $ {allotedDudget.TotalBudget}</div>}
                                <div class="progress">
                                    {allotedDudget && allotedDudget.UsedBudgetPercentage && <div class="progress-bar used" role="progressbar" style={{ width: `${allotedDudget.UsedBudgetPercentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>}
                                    {allotedDudget && allotedDudget.CommitedBudgetPercentage && <div class="progress-bar commited" role="progressbar" style={{ width: `${allotedDudget.CommitedBudgetPercentage}%` }} aria-valuenow="75" aria-valuemin="75" aria-valuemax="100"></div>}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center allocate-progress-prices">
                                <div className="price used">
                                    <h5>Used</h5>
                                    {allotedDudget.UsedBudget && <p>${allotedDudget.UsedBudget}</p>}
                                </div>
                                <div className="price commited">
                                    <h5>Commited</h5>
                                    {allotedDudget.CommitedBudget && <p>${allotedDudget.CommitedBudget}</p>}
                                </div>
                                <div className="price avaliable">
                                    <h5>Avaliable</h5>
                                    {allotedDudget.AvaliableBudget && <p>${allotedDudget.AvaliableBudget}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="form-group row col-form-group">
                            <label className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-form-label">
                               <strong>Used</strong>|<p>Month:</p>
                            </label>
                                <FormControl >
                                    <NativeSelect
                                        name="status"
                                        value={""}
                                        onChange={this.handleStateChange}
                                    // isvalid={errorData.status.isValid}
                                    >
                                        <option value="">Nov 21</option>
                                        <option value={10}>dec</option>
                                        <option value={20}>jan</option>
                                        <option value={30}>feb</option>
                                    </NativeSelect>
                                </FormControl>
                                <span className="d-block w-100 text-danger">
                                </span>
                            </div>
                        </div>
                        <div className="d-block pt-5">
                            <Table
                                valueFromData={{ 'columns': columns, 'data': tableData }}
                                perPageLimit={6}
                                visiblecheckboxStatus={false}
                                //isLoading={this.props.get_recieved_status === status.IN_PROGRESS}
                                tableClasses={{
                                    table: "ticket-tabel",
                                    tableParent: "tickets-tabel",
                                    parentClass: "all-support-ticket-tabel",
                                }}
                                showingLine="Showing %start% to %end% of %total% "
                            />
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { budget_allocated_status, budget_allocatyed_data } = state.budget;
    return { budget_allocated_status, budget_allocatyed_data };
}


export default connect(mapStateToProps, null)(BudgetAllocate);