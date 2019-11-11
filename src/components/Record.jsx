import React, { Component } from "react";
import { array } from "./testarray";
import { Table } from "semantic-ui-react";
//{JSON.stringify(row, null, this.props.recno)}
export class OneRow extends Component {
  render() {
    return array
      .filter(res => {
        return res.usernumber === this.props.recno;
      })
      .map(row => {
        return (
          <h1>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Named</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{row.username}</Table.Cell>
                  <Table.Cell>{row.userphone}</Table.Cell>
                  <Table.Cell>{row.userdate}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </h1>
        );
      });
  }
}
