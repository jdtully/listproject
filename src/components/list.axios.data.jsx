import React from "react";

import { Table } from "semantic-ui-react";

export class AxiosList extends React.Component {
  render() {
    return this.props.data.map((row, i) => {
      return (
        <React.Fragment>
          <Table.Row key={i}>
            <Table.Cell>{row.usernumber}</Table.Cell>
            <Table.Cell>{row.username}</Table.Cell>
            <Table.Cell>{row.userphone}</Table.Cell>
            <Table.Cell>{row.userdate}</Table.Cell>
          </Table.Row>{" "}
        </React.Fragment>
      );
    });
  }
}
