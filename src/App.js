import React, { Component } from "react";
import "./App.css";
import ArrivalInput from "./components/ArrivalInput";
import ArrivalData from "./components/ArrivalData";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      totalBookingsToday: 0,
      search: "",
      searchBy: "",
      filteredBookings: []
    };
  }

  componentDidMount() {
    this.getBookings();
  }

  getBookings() {
    Axios.get("http://localhost:5000/booking")
      .then(res => {
        console.log(this);
        this.setState({
          bookings: res.data
        });
      })
      .catch(err => console.log(err));
  }

  searchBookings(endpoint, query, words) {
    Axios.get(
      `http://localhost:5000/booking/search/${endpoint}?${query}=${words}`
    )
      .then(res => {
        console.log(this);
        this.setState({
          bookings: res.data,
          search: words
        });
      })
      .catch(err => console.log(err));
  }

  getTotalBookingsToday() {}

  render() {
    return (
      <div>
        <div className="App">
          <ArrivalInput searchBookings={this.searchBookings.bind(this)} />
        </div>
        <hr />
        <div className="App">
          {this.state.search === ""
            ? this.state.bookings.length &&
              this.state.bookings.map((booking, index) => (
                <div key={index}>
                  <ArrivalData
                    booking={booking}
                    getTotalBookingsToday={this.getTotalBookingsToday}
                  />
                </div>
              ))
            : null}

          {this.state.search !== ""
            ? this.state.bookings.length &&
              this.state.bookings.map((booking, index) => (
                <div key={index}>
                  <ArrivalData
                    booking={booking}
                    getTotalBookingsToday={this.getTotalBookingsToday}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default App;
