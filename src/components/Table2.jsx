import React, { Component } from "react";
import { Table, TableHeader } from "semantic-ui-react";
import PropTypes from "prop-types";
// these  two objects  create the rows
export class PersonTable extends Component {
  render() {
    return (
      <Table striped celled collapsing>
        <Table.Header>
          <Table.Row textAlign="center">
            <Headers headerInfo={this.props.headerInfo} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Rows data={this.props.data} />
        </Table.Body>{" "}
      </Table>
    );
  }
}

export class Rows extends Component {
  render() {
    return this.props.data.map(row => {
      return (
        <React.Fragment>
          <Table.Row key={row.usernumber}>
            <Table.Cell hidden textAlign="center">
              {row.number}
            </Table.Cell>
            <Table.Cell>{row.username}</Table.Cell>
            <Table.Cell>{row.userdate}</Table.Cell>
          </Table.Row>
        </React.Fragment>
      );
    });
  }
}
//Below 2 functions  create the headers
export class Headers extends Component {
  render() {
    return this.props.headerInfo.map((head, i) => {
      return <Table.HeaderCell key={i}>{head.colName}</Table.HeaderCell>;
    });
  }
}
export class HeadersTable extends Component {
  render() {
    return (
      <Table Celled>
        <TableHeader>
          {" "}
          <Table.Row textAlign="center">
            <Headers headerInfo={this.props.headerInfo} />
          </Table.Row>
        </TableHeader>
      </Table>
    );
  }
}

//export class HeadersByKeys extends Component {
//render()   {return this.props.data.map((rowfirstrow,i) => {
//  const rowdata = Object.keys(rowfirstrow[i])
//return(<Table.HeaderCell >{rowdata}</Table.HeaderCell>

//)

// }
//}

Rows.propTypes = {
  data: PropTypes.array.isRequired
};
PersonTable.propTypes = {
  data: PropTypes.array.isRequired
};
Headers.propTypes = {
  headerInfo: PropTypes.array.isRequired
};
HeadersTable.propTypes = {
  headerInfo: PropTypes.array.isRequired
};
