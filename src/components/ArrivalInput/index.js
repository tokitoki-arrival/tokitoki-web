import React, { Component } from "react";
import "./index.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const check = [
  { value: "in", label: "check-in" },
  { value: "out", label: "check-out" }
];

const filterCategory = [
  {
    value: "unit",
    label: "unit name"
  },
  {
    value: "guest",
    label: "guest name"
  }
];

class ArrivalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCategory: "EUR",
      check: "in",
      totalBooking: 20
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Arrival List </h1>
        <div className="flex">
          <div className="input-date">
            <div>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                style={{ marginRight: 10, flex: 1 }}
              />
              <div className="total-booking">
                Total Booking(s) today : {this.state.totalBooking}{" "}
              </div>
            </div>
            <TextField
              id="standard-select-check-native"
              select
              value={this.state.check}
              onChange={this.handleChange("check")}
              SelectProps={{
                native: true
              }}
              margin="normal"
              style={{ paddingTop: 16, flex: 1 }}
            >
              {check.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div className="search">
            <div>
              <TextField
                id="standard-search"
                label="Search"
                type="search"
                margin="normal"
                style={{ marginRight: 10 }}
              />
              <SearchIcon />
              <TextField
                id="standard-select-filterCategory-native"
                select
                label="Filter"
                value={this.state.filterCategory}
                onChange={this.handleChange("filterCategory")}
                SelectProps={{
                  native: true
                }}
                margin="normal"
              >
                {filterCategory.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className="flex-right">
              <Button variant="contained" color="primary">
                Download CSV
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ArrivalInput;
