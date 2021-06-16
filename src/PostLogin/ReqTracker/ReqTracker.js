import React, { Component } from "react"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import Table from '../../Table/Table';

class ReqTracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: ""
            },
            tableData: {
                columns: [
                    {
                        label: 'S No',
                        key: 'index'
                    },
                    {
                        label: 'Requisitions No',
                        key: 'requesterName'
                    },
                    {
                        label: 'Request Date',
                        key: 'subject'
                    },
                    {
                        label: 'Request Department',
                        key: 'status',
                        renderCallback: (value, row) => {
                            let strClass = "";
                            if (value === "Open") {
                                strClass = "yellow-green";
                            } else if (value === "Closed") {
                                strClass = "red";
                            } else if (value === "Pending") {
                                strClass = "orange";
                            }
                            return <td><span className={strClass}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Requestor',
                        key: 'priority'
                    },
                    {
                        label: 'Requisitions Total',
                        key: 'assignee'
                    },
                    {
                        label: 'Status',
                        key: 'createDate'
                    },

                ],
                data: [
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#39',
                        requesterName: 'Chaplain Mondover',
                        subject: 'I need help with aading a New Contact data to be pre...',
                        status: 'Closed',
                        priority: 'Medium',
                        assignee: 'Bodrum Salvador',
                        createDate: '12 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#47',
                        requesterName: 'Rodney Artichoke',
                        subject: 'Mobile Campaign',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Inverness McKenzie',
                        createDate: '15 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#52',
                        requesterName: 'Inverness McKenzie',
                        subject: 'Service related announcements',
                        status: 'Open',
                        priority: 'high',
                        assignee: 'Abraham Pigeon',
                        createDate: '16 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#87',
                        requesterName: 'Douglas Lyphe',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Closed',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '19 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#92',
                        requesterName: 'Theodore Handle',
                        subject: 'Adding a payment methods',
                        status: 'Pending',
                        priority: 'Low',
                        assignee: 'Jarvis Pepperspray',
                        createDate: '22 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    },
                    {
                        index: '#27',
                        requesterName: 'Rodney Artichoke',
                        subject: 'I need help with aading a New Contact....',
                        status: 'Open',
                        priority: 'Low',
                        assignee: 'Fergus Douchebag',
                        createDate: '10 July 2020',
                        agents: 'Jacob Jones',
                        groups: 'Billings',
                        checkStatus: false
                    }
                ]

            }
        }
    }

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
            console.log(sendReqData);
        }
    }

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
                    message: "Filter By Status  is required"
                };
                isValid = false;
            }
            if (!requiData.reqno) {
                retData.reqno = {
                    isValid: false,
                    message: "Requisitions no is required"
                };
                isValid = false;
            }
            if (!requiData.depart) {
                retData.depart = {
                    isValid: false,
                    message: "Department is required"
                };
                isValid = false;
            }


        }
        retData.isValid = isValid;
        return retData;
    };

    render() {
        const { requiData, isSubmitted } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <div className="main-content">
                <div className="requisitions-tracker">
                    <div className="heading">
                        <h4>Requisitions Tracker</h4>
                    </div>
                    <div className="requisitions-filter">
                        <div className="requisitions-status">
                            <ul>
                                <li>
                                    <div className="form-group">
                                        <label>Filter By Status</label>
                                        <FormControl className="select-department" >
                                            <NativeSelect name="status" value={requiData.status}
                                                onChange={this.handleStateChange} isvalid={errorData.status.isValid}>
                                                <option value="">-Select-</option>
                                                <option value={10}>abc</option>
                                                <option value={20}>def</option>
                                                <option value={30}>abc</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </div>
                                    <span className="text-danger">{errorData.status.message}</span>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label>Requisitions no</label>
                                        <input placeholder="2021/21/12" name="reqno" value={requiData.reqno}
                                            onChange={this.handleStateChange} isvalid={errorData.reqno.isValid} />
                                    </div>
                                    <span className="text-danger">{errorData.reqno.message}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="requisitions-status">
                            <ul>
                                <li>
                                    <div className="form-group">
                                        <label>Date Range</label>
                                        <input placeholder="2021/21/12" />
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <input placeholder="3/15/2021" type="date" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="requisitions-status">
                            <ul>
                                <li>
                                    <div className="form-group">
                                        <label>Department</label>
                                        <FormControl className="select-department filter-status">
                                            <NativeSelect name="depart" isvalid={errorData.depart.isValid} value={requiData.depart} onChange={this.handleStateChange}>
                                                <option value="">-Select-</option>
                                                <option value={10}>abc</option>
                                                <option value={20}>def</option>
                                                <option value={30}>abc</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </div>
                                    <span className="text-danger">{errorData.depart.message}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="requisitions-button">
                            <Button variant="contained" className="new-item-btn" disableElevation onClick={this.handleClickMethod}>Search</Button>
                        </div>
                    </div>
                    <Table valueFromData={this.state.tableData} perPageLimit={10} visiblecheckboxStatus={true}
                        tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
                </div>
            </div>
        )
    }

}


export default ReqTracker;