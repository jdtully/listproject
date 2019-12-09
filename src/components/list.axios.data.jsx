import React from "react";
import { Table, Icon, Button } from "semantic-ui-react";

export class AxiosList extends React.Component {
  doDelete = _id => {
    this.props.doDelete(JSON.stringify(_id, null, 2));
  };
  doEdit = _id => {
    this.props.doEdit(JSON.stringify(_id, null, 2));
  };

  render() {
    return this.props.data.map((row, i) => {
      return (
        <React.Fragment>
          <Table.Row key={i}>
            <Table.Cell Link to={`/users/edit/${row._id}`}>
              {row.username}
            </Table.Cell>
            <Table.Cell>{row.userstreet}</Table.Cell>
            <Table.Cell>{row.usercity}</Table.Cell>
            <Table.Cell>{row.userstate}</Table.Cell>
            <Table.Cell>{row.userzip}</Table.Cell>
            <Table.Cell>{row.userphone}</Table.Cell>
            <Table.Cell>{row.useremail}</Table.Cell>
            <Table.Cell>{row.usergender}</Table.Cell>
            <Table.Cell>{row.createdAt}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => this.doEdit(row._id)}>
                <Icon name="edit" />
                {JSON.stringify(row._id)}
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => this.doDelete(row._id)}>
                <Icon name="eraser" />
                {JSON.stringify(row._id)}
              </Button>
            </Table.Cell>
          </Table.Row>
        </React.Fragment>
      );
    });
  }
}
