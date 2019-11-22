import React from "react";

import { Table, Icon } from "semantic-ui-react";

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
            <Table.Cell>
              <Icon name="pen square" onClick={this.props.doEdit} />
            </Table.Cell>
            <Table.Cell>
              <Icon
                name="trash alternate outline"
                onClick={this.props.doDelete}
              />
            </Table.Cell>
          </Table.Row>
        </React.Fragment>
      );
    });
  }
}
