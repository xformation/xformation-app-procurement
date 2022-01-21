import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { Cell, Pie, PieChart } from 'recharts';
class StatictisRFP extends Component {
    constructor() {
        super();
        this.state = {
            // stockWidth: "20",
            // text: 50,
            // value: "50",
            staticData: [
                { COLORS: 'red', value: 763, title: 'Total RFP', per: 27 },
                { COLORS: 'green', value: 321, title: 'Todays RFP', per: 11 },
                { COLORS: 'pink', value: 69, title: 'In Progress', per: 22 },
                { COLORS: 'blue', value: 69, title: 'Approved RFP', per: 22 },
                { COLORS: 'blue', value: 69, title: 'Rejected RFP', per: 22 },
            ],
        }
    }
    render() {
        const { staticData } = this.state
        return (
            <div>
                <div>
                    <h1>RFP Statictis</h1>
                    <Button>Check All</Button>
                </div>
                <PieChart height={500} width={500}>
                    <Pie
                        data={staticData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={80}
                        dataKey={staticData.value}
                    >
                        {staticData.map((element) => (
                            <Cell key={element.value} fill={element.COLORS} />
                        ))}
                    </Pie>
                </PieChart>
                <div>
                    {staticData.map((title) => {
                        return (
                            <ul style={{ display: "flex" }}>
                                <li><p>{title.title}</p></li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default StatictisRFP