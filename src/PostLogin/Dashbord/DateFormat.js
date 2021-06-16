import React from "react";
import "rc-calendar/assets/index.css";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";
import DatePicker from "rc-calendar/lib/Picker";
import moment from "moment";
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Picker extends React.Component {
  state = {
    hoverValue: []
  };

  onHoverChange = (hoverValue) => {
    this.setState({ hoverValue });
  };

  render() {
    const props = this.props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={this.props.type}
        format="DD MM YYYY"
        onChange={props.onChange}
        disabledDate={props.disabledDate}
      />
    );
    return (
      <DatePicker
        open={this.props.open}
        calendar={calendar}
        value={props.value}
      >
        {() => {
          return (
            <span></span>
          );
        }}
      </DatePicker>
    );
  }
}

export default class Demo extends React.Component {
  state = {
    startValue: moment(),
    endValue: moment().subtract(7, "day"),
    startOpen: false,
    endOpen: false
  };

  onStartOpenChange = () => {
    this.setState({ startOpen: !this.state.startOpen });
  };

  onStartChange = (value) => {
    this.setState({
      startValue: value[0],
      startOpen: false,
      endOpen: true
    });
  };

  onEndChange = (value) => {
    this.setState({
      endValue: value[0],
      endOpen: false,
      startOpen: false
    });
  };

  disabledStartDate = (endValue) => {
    if (!endValue) {
      return false;
    }
    const startValue = this.state.startValue;
    if (!startValue) {
      return false;
    }

    return endValue.diff(startValue, "days") > 0;
  };


  formatTh(value) {
    if (value === '01') {
      return `${value}st`;
    }
    if (value === '02') {
      return `${value}nd`;
    }
    return `${value}th`;
  }

  render() {
    const { startOpen, endOpen, endValue, startValue } = this.state;
    return (
      <div className="d-block calender-box">

        <div className="clender-content"
          onClick={this.onStartOpenChange}
        >
          <DateRangeIcon className="calender-icon" />
          <div className="calender-text">
            <p>Change Period</p>
            <span>
              {startValue.format("MMMM")} {this.formatTh(startValue.format('DD'))} {endValue.format('YYYY') !== startValue.format("YYYY") && startValue.format("YYYY")} -
                  {endValue.format("MMMM")} {this.formatTh(endValue.format('DD'))} {endValue.format('YYYY')}
            </span>
          </div>
          <ArrowDropDownIcon className="calender-arrow" />
        </div>
        <Picker
          type="start"
          showValue={startValue}
          open={startOpen}
          value={[startValue, endValue]}
          onChange={this.onStartChange}
        />
        <Picker
          open={endOpen}
          type="end"
          showValue={endValue}
          disabledDate={this.disabledStartDate}
          value={[startValue, endValue]}
          onChange={this.onEndChange}
        />
      </div>
    );
  }
}
