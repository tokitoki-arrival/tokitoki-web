import React, { Component } from "react";
import "./index.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import EditData from "../EditData";

class ArrivalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBookingPerLocation: 0,
      bookingList: [],
      open: false
    };
  }

  componentDidMount() {
    let total = 0;
    let bookingList = [];
    let unit = "";
    let room = "";

    this.props.booking.Properties.forEach(property =>
      property.Units.forEach(units =>
        units.Rooms.forEach(rooms => {
          total += rooms.Bookings.length;
          rooms.Bookings.forEach(booking => {
            bookingList.push({
              id: booking.id,
              guestName: booking.guestName,
              checkIn: new Date(booking.checkIn),
              checkOut: new Date(booking.checkOut),
              status: booking.status,
              createdAt: booking.createdAt,
              updatedAt: booking.updatedAt,
              roomNo: rooms.roomNo,
              unit: units.type,
              property: property.propertyName
            });
          });
        })
      )
    );
    this.setState({ totalBookingPerLocation: total, bookingList });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEdit(e) {
    this.setState({ open: true });
  }

  render() {
    return (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {this.props.booking.location} / {this.state.totalBookingPerLocation}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Unit Name</TableCell>
                    <TableCell align="right">Guest Name</TableCell>
                    <TableCell align="right">Check In</TableCell>
                    <TableCell align="right">Check Out</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.bookingList.map((booking, index) => {
                    return (
                      <React.Fragment key={index}>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {booking.property} - {booking.unit}
                          </TableCell>
                          <TableCell align="right">
                            {booking.guestName}
                          </TableCell>
                          <TableCell align="right">
                            {booking.checkIn.getFullYear()}-
                            {booking.checkIn.getMonth()}-
                            {booking.checkIn.getDate()}
                          </TableCell>
                          <TableCell align="right">
                            {booking.checkOut.getFullYear()}-
                            {booking.checkOut.getMonth()}-
                            {booking.checkOut.getDate()}
                          </TableCell>
                          <TableCell align="right">{booking.status}</TableCell>
                          <TableCell align="right">
                            <button
                              id={booking.id}
                              onClick={e =>
                                this.handleEdit(e, {
                                  id: booking.id,
                                  guestName: booking.guestName,
                                  checkIn: booking.checkIn,
                                  checkOut: booking.checkOut,
                                  status: booking.status,
                                  createdAt: booking.createdAt,
                                  updatedAt: booking.updatedAt
                                })
                              }
                              variant="contained"
                              color="secondary"
                            >
                              Edit
                            </button>
                            <Modal
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                              open={this.state.open}
                              onClose={this.handleClose}
                            >
                              <EditData
                                booking={{
                                  id: booking.id,
                                  guestName: booking.guestName,
                                  checkIn: booking.checkIn,
                                  checkOut: booking.checkOut,
                                  status: booking.status,
                                  createdAt: booking.createdAt,
                                  updatedAt: booking.updatedAt
                                }}
                              />
                            </Modal>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}

export default ArrivalData;
