import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class EditData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper>
        <div>
          <h1>ABC</h1>
          {this.props.booking.id}
        </div>
      </Paper>
    );
  }
}

export default EditData;
