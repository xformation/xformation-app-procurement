import React, { Component } from "react"

class Calender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: ""
            },
        }
    }
    render(){
        return(
            <div className="main-content">
                 <div className="calender-content">
                     <h2>Calender page</h2>
                </div>
            </div>
           
        )
    }

}
export default Calender;