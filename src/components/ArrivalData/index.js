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

class ArrivalData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }

    const rows = [
      createData("Pondok Ijo - Red", 159, 6.0, 24, 4.0),
      createData("Ndalem Panembahan - Whole Villa", 237, 9.0, 37, 4.3)
    ];

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {this.props.property.location} / {this.props.property.totalUnit}
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
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default ArrivalData;
