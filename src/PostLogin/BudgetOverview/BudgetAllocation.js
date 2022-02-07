import { Button, FormControl, NativeSelect } from '@material-ui/core';
import React, { Component } from 'react'
import { DatePicker } from "@y0c/react-datepicker";
import isValid from 'date-fns/isValid';
import { connect } from 'react-redux';
import { budgetActions } from '../../_actions';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { status } from "../../_constants";
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class BudgetAllocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: "",
            Employee: "",
            FinancialYear: "",
            Amount: "",
            Priorty: "",
            IssuedOn: ""
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.budgetAllocation_status !== this.props.budgetAllocation_status && this.props.budgetAllocation_status === status.SUCCESS) {
            this.props.history.push('/postlogin/budgetoverview')
        }
    }
    onchaneHandeler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    onchangeDate = (value) => {
        this.setState({ IssuedOn: value })
    }

    submitForm = (e) => {
        const { Employee, FinancialYear, Amount, Priorty, IssuedOn, isSubmitted } = this.state
        // e.preventDefault()
        this.setState({ isSubmitted: true })
        const errorData = this.validate(true);
        if (errorData.isValid) {
            const sendData = {
                employee: Employee,
                financialYear: FinancialYear,
                amount: Amount,
                priorty: Priorty,
                issuedOn: IssuedOn
            }
            this.props.dispatch(budgetActions.sendBudghetAllocation(sendData));
        }
    }
    validate = (isSubmited) => {
        const { Employee, FinancialYear, Amount, Priorty, IssuedOn } = this.state
        let validObj = {
            isValid: "",
            message: "",
        };
        const retData = {
            Employee: validObj,
            FinancialYear: validObj,
            Amount: validObj,
            Priorty: validObj,
            IssuedOn: validObj,
            isValid: true
        }
        let isValid = true;
        if (isSubmited) {
            if (!Employee) {
                retData.Employee = {
                    isValid: false,
                    message: "Employee is required"
                }
                isValid = false;
            }
            if (!FinancialYear) {
                retData.FinancialYear = {
                    isValid: false,
                    message: "FinancialYear is required"
                }
                isValid = false;
            }

            if (!Amount) {
                retData.Amount = {
                    isValid: false,
                    message: "Amount is required"
                }
                isValid = false;
            }

            if (!Priorty) {
                retData.Priorty = {
                    isValid: false,
                    message: "Priorty is required"
                }
                isValid = false;
            }

            if (!IssuedOn) {
                retData.IssuedOn = {
                    isValid: false,
                    message: "issuedOn is required"
                }
                isValid = false;
            }
        }
        retData.isValid = isValid;
        return retData;
    }

    cancelBudgetAllocation = (e) => {
        e.preventDefault();
        this.props.history.push('/postlogin/budgetoverview');
    }

    render() {
        const { Employee, FinancialYear, Amount, Priorty, IssuedOn, isSubmitted } = this.state
        const errorMessage = this.validate(isSubmitted)
        return (
            <div className="main-content">
                <div className="budget-allocation-section">
                    <div className="budget-allocation-content">
                        <div className="d-flex w-100 heading">
                            <IconButton className="head-icon" onClick={this.cancelBudgetAllocation}>
                                <KeyboardBackspaceIcon />
                            </IconButton>
                            <h4 className="d-inline-block">Budget Allocation</h4>
                        </div>
                        <div className="budget-allocation-filter">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="requisition-form-left">
                                        <div className="requester">
                                            <div className="form-group">
                                                <label>Employee</label>
                                                <input
                                                    type="text"
                                                    name="Employee"
                                                    value={Employee}
                                                    placeholder="PSDS Admin"
                                                    onChange={this.onchaneHandeler}
                                                />
                                                {errorMessage && errorMessage.Employee && errorMessage.Employee.message && <span className="text-danger">{errorMessage.Employee.message} </span>}
                                            </div>
                                            <div className="form-group">
                                                <label>Fincacial Year</label>
                                                <FormControl className="select-menu">
                                                    <NativeSelect
                                                        name="FinancialYear"
                                                        value={FinancialYear}
                                                        onChange={this.onchaneHandeler}
                                                    >
                                                        <option value={2021}>2021</option>
                                                        <option value={2022}>2022</option>
                                                        <option value={2023}>2023</option>
                                                        <option value={2024}>2024</option>
                                                    </NativeSelect>
                                                </FormControl>
                                                {errorMessage && errorMessage.FinancialYear && errorMessage.FinancialYear.message && <span className="text-danger">{errorMessage.FinancialYear.message} </span>}
                                            </div>

                                            <div className="form-group">
                                                <label>Amount</label>
                                                <input
                                                    type="number"
                                                    name="Amount"
                                                    placeholder="0000000000"
                                                    value={Amount}
                                                    onChange={this.onchaneHandeler}
                                                />
                                                {errorMessage && errorMessage.Amount && errorMessage.Amount.message && <span className="text-danger">{errorMessage.Amount.message} </span>}
                                            </div>
                                            <div className="form-group">
                                                <label>Priorty</label>
                                                <FormControl className="select-menu">
                                                    <NativeSelect
                                                        name="Priorty"
                                                        value={Priorty}
                                                        onChange={this.onchaneHandeler}
                                                    >
                                                        <option>--select--</option>
                                                        <option value={1}>Norm</option>
                                                        <option value={2}>not-norm</option>
                                                    </NativeSelect>
                                                </FormControl>
                                                {errorMessage && errorMessage.Priorty && errorMessage.Priorty.message && <span className="text-danger">{errorMessage.Priorty.message} </span>}
                                            </div>

                                            <div className="form-group">
                                                <label>Issued On</label>
                                                <FormControl className="select-menu">

                                                    <DatePicker
                                                        name="IssuedOn"
                                                        value={IssuedOn}
                                                        onChange={this.onchangeDate}
                                                        // isvalid={errorData.brithDate.isValid}
                                                        placeholder="DD/MM/YYYY"
                                                    />
                                                </FormControl>
                                                {errorMessage && errorMessage.IssuedOn && errorMessage.IssuedOn.message && <span className="text-danger">{errorMessage.IssuedOn.message} </span>}
                                            </div>
                                        </div>
                                        <div className="budget-allocation-button">
                                            <Button variant="contained" className="primary-btn approve-button" disableElevation onClick={this.submitForm}>
                                                <CheckCircleIcon className="approve-icon" />
                                                Approve
                                            </Button>
                                            <Button variant="contained" className="cancel-button" onClick={this.cancelBudgetAllocation} >
                                                <NotInterestedIcon className="cancel-icon" />
                                                Cancel
                                            </Button>
                                        </div>
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

const mapStateToProps = (state) => {
    const { budgetAllocation_status, budgetAllocation_data } = state.procurement;
    return {
        budgetAllocation_status,
        budgetAllocation_data
    }
}

export default connect(mapStateToProps)(BudgetAllocation)