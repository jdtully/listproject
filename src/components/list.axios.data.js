import React from "react";

import { Table } from "semantic-ui-react";

export class AxiosList extends React.Component {
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Number</Table.HeaderCell>{" "}
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>{" "}
        {this.props.data.map((row, i) => {
          return (
            <React.Fragment>
              <Table.Body>
                <Table.Row key={i}>
                  <Table.Cell>{row.usernumber}</Table.Cell>
                  <Table.Cell>{row.username}</Table.Cell>
                  <Table.Cell>{row.userphone}</Table.Cell>
                  <Table.Cell>{row.userdate}</Table.Cell>
                </Table.Row>{" "}
              </Table.Body>
            </React.Fragment>
          );
        })}
      </Table>
    );
  }
}
