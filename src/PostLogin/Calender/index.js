import React, { Component } from "react"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
class Calender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requiData: {
                status: "",
                reqno: "",
                depart: ""
            },
            activeindex: 0,
            invoiceDetails: [
                {
                    invoiceNo: "INV-0001234",
                    invoiceName: "jean Graphic Inc.",
                    shortNameColor: '#c1ea79',
                    shortName: ' ',
                    shortNameIcon: '',
                    invoicePrice: "6,50,000",
                    invoiceLable: "2m ago",
                    pendiing: "Pending",
                    pendiingColor: "#fdb84c",
                },
                {
                    invoiceNo: "INV-0001234",
                    invoiceName: "jean Graphic Inc.",
                    shortName: 'KG',
                    shortNameIcon: 'fa fa-chevron-down',
                    shortNameColor: '#84da91',
                    invoicePrice: "6,50,000",
                    invoiceLable: "2m ago",
                    pendiing: "Pending",
                    pendiingColor: "#43e265",
                },
                {
                    invoiceNo: "INV-0001234",
                    invoiceName: "jean Graphic Inc.",
                    shortName: 'KG',
                    shortNameIcon: '',
                    shortNameColor: '#4b3178',
                    invoicePrice: "6,50,000",
                    invoiceLable: "2m ago",
                    pendiing: "INVOICE SENT",
                    pendiingColor: "#fdb84c",
                },
                {
                    invoiceNo: "INV-0001234",
                    invoiceName: "Jean Graphic Inc.",
                    shortNameColor: '#c5bef4',
                    shortName: 'KG',
                    shortNameIcon: 'fa fa-bolt',
                    invoicePrice: "6,50,000",
                    invoiceLable: "2m ago",
                    pendiing: "COMPLETED",
                    pendiingColor: "#48bfee",
                },
                {
                    invoiceNo: "INV-0001234",
                    invoiceName: "jean Graphic Inc.",
                    shortName: 'KG',
                    shortNameIcon: '',
                    shortNameColor: '#4b3178',
                    invoicePrice: "6,50,000",
                    invoiceLable: "2m ago",
                    pendiing: "INVOICE SENT",
                    pendiingColor: "#43e265",
                },
            ]
        }
    }
    displayInvoiceDetails = () => {
        const { invoiceDetails, activeindex } = this.state;
        let retData = [];
        for (let i = 0; i < invoiceDetails.length; i++) {
            let row = invoiceDetails[i];
            retData.push(
                <ul key={row.name}>
                    <li>
                        <div className={activeindex == i ? "payment-process active" : "payment-process"} onClick={() => this.setState({ activeindex: i })}>
                            <div className="graphic" style={{ backgroundColor: `${row.shortNameColor}` }}>
                                {row.shortNameIcon ?
                                    <i className={row.shortNameIcon}></i>
                                    :
                                    <>
                                        {row.shortName}
                                    </>
                                }
                            </div>
                            <div class="payment-content">
                                <a href="#">{row.invoiceNo}</a>
                                <p>{row.invoiceName}</p>
                                <span>{row.invoicePrice}</span>
                            </div>
                            <IconButton className="p-2 menu-btn"><MoreVertIcon /></IconButton>
                            <div className="pending-content">
                                <i class="fas fa-clock"></i>
                                <span>{row.invoiceLable}</span>
                                <p style={{ color: `${row.pendiingColor}` }}>{row.pendiing}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            )
        }
        return retData;
    }
    render() {
        return (
            <div className="main-content">
                <div className="calender-content">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="calender-content-left">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h4>Calender page</h4>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="calender-btn">
                                            <FormControl className="select-department">
                                                <NativeSelect name="status">
                                                    <option value="">October</option>
                                                    <option value={10}>abc</option>
                                                    <option value={20}>def</option>
                                                    <option value={30}>abc</option>
                                                </NativeSelect>
                                            </FormControl>
                                            <FormControl className="select-department">
                                                <NativeSelect name="status">
                                                    <option value="">2020</option>
                                                    <option value={10}>abc</option>
                                                    <option value={20}>def</option>
                                                    <option value={30}>abc</option>
                                                </NativeSelect>
                                            </FormControl>
                                            <Button variant="contained" className="new-item-btn"> &#43; New Schedule</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="calender">
                                    <FullCalendar
                                        plugins={[dayGridPlugin]}
                                        initialView="dayGridMonth"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="calender-content-right">
                                <div className="heading">
                                    <h5>Invoice Details</h5>
                                    <span>Thursday October 10th, 2020</span>
                                </div>
                                <SimpleBar style={{height: 598}}>
                                    <div className="invoices-details">
                                        {this.displayInvoiceDetails()}
                                        {/* <ul>
                                        <li>
                                            <div className="payment-process">
                                                <div className="graphic studios"></div>
                                                <div class="payment-content">
                                                    <a href="#">#INV-0001234</a>
                                                    <p>Highspeed Studios</p>
                                                    <span>$700,000.62</span>
                                                </div>
                                                <IconButton className="p-2 menu-btn"><MoreVertIcon /></IconButton>
                                                <div className="pending-content">
                                                    <i class="fas fa-clock"></i>
                                                    <span>Due Date 12d left</span>
                                                    <p>Pending</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="payment-process">
                                                <div className="graphic online-shop"><i class="fas fa-chevron-down"></i></div>
                                                <div class="payment-content">
                                                    <a href="#">#INV-0001234</a>
                                                    <p>Online Shop</p>
                                                    <span>$268.45</span>
                                                </div>
                                                <IconButton className="p-2 menu-btn"><MoreVertIcon /></IconButton>
                                                <div className="pending-content">
                                                    <i class="fas fa-clock"></i>
                                                    <span>Due Date 12d left</span>
                                                    <p>Pending</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="payment-process">
                                                <div className="graphic electronics-agency"> KG</div>
                                                <div class="payment-content">
                                                    <a href="#">#INV-0001234</a>
                                                    <p>Electronics Agency</p>
                                                    <span>$7,000.00</span>
                                                </div>
                                                <IconButton className="p-2 menu-btn"><MoreVertIcon /></IconButton>
                                                <div className="pending-content">
                                                    <i class="fas fa-clock"></i>
                                                    <span>Due Date 12d left</span>
                                                    <p>Pending</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="payment-process">
                                                <div className="graphic fullspeedo-crew"><i class="fas fa-bolt"></i></div>
                                                <div class="payment-content">
                                                    <a href="#">#INV-0001234</a>
                                                    <p>Fullspeedo Crew</p>
                                                    <span>$680.00</span>
                                                </div>
                                                <IconButton className="p-2 menu-btn"><MoreVertIcon /></IconButton>
                                                <div className="pending-content">
                                                    <i class="fas fa-clock"></i>
                                                    <span>Due Date 12d left</span>
                                                    <p>Pending</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                    </div>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Calender;