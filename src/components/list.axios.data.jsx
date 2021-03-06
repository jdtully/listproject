import React from "react";
import { Table, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
            <Table.Cell align="left" width="3">
              {row.username}
            </Table.Cell>
            <Table.Cell width="2">{row.userstreet}</Table.Cell>
            <Table.Cell width="2">{row.usercity}</Table.Cell>
            <Table.Cell>{row.userstate}</Table.Cell>
            <Table.Cell>{row.userzip}</Table.Cell>
            <Table.Cell>{row.userphone}</Table.Cell>
            <Table.Cell width="3">{row.useremail}</Table.Cell>
            <Table.Cell>{row.usergender}</Table.Cell>
            <Table.Cell>{row.createdAt}</Table.Cell>
            <Table.Cell>
              <Link to={"/users/" + row._id}>Users</Link>
            </Table.Cell>
            <Table.Cell>
              <Icon.Group>
                <Icon
                  name="eraser"
                  color="grey"
                  fitted
                  onClick={() => this.doDelete(row._id)}
                />
              </Icon.Group>
            </Table.Cell>
          </Table.Row>
        </React.Fragment>
      );
    });
  }
}
