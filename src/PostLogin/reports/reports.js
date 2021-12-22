import React, { Component } from 'react';

class Reports extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            email: '',
            telephone: '',
            amount: '',
            dueDate: '',
            invoiceNumber: '',
            itemDescription: [],
            doc: [],
        }
    }

    render() {
        return (
            <div>
               Reports
            </div>
        )
    }

}

export default Reports;