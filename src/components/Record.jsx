import React, { Component } from "react";
import { array } from "./testarray";
import { Table } from "semantic-ui-react";
//this makes  the single  row  display for adding records

export class OneRow extends Component {
  render() {
    return array
      .filter(res => {
        return res.number === this.props.recno;
      })
      .map(row => {
        return (
          <h1>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
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
