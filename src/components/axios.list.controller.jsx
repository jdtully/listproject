import React from "react";
import axios from "axios";

import { Button, Table } from "semantic-ui-react";
import { AxiosList } from "./list.axios.data";

export class PaginatedList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pagelimit: " ",
      currentPage: 1,
      currentSort: "usernumber",
      disabledDownButton: true,
      disabledUpButton: false
    };
  }

  componentDidMount = () => {
    console.debug("componentDidMount" + JSON.stringify(this.state));
    console.debug("componentdid mount counter" + this.state.currentPage);
    axios
      .get(
        "http://localhost:5000/users/?page=" +
          this.state.currentPage +
          "&" +
          "curSort=" +
          this.state.currentSort
      )
      .then(res => {
        this.setState({
          data: res.data.docs,
          pagelimit: res.data.limit,
          currentSort: this.state.currentSort,
          currentPage: this.state.currentPage,
          disabledDownButton: this.state.disabledDownButton,
          disabledUpButton: this.state.disabledUpButton
        });
      });
    console.debug("headers= " + this.state.total);
  };

  handleClickUp = () => {
    console.debug("handleClickUp called");
    var currentSort = this.state.currentSort;
    var nextPage = this.state.currentPage + 1;
    console.debug("handleClickUp sending " + nextPage);
    this.doAxiosCalls(nextPage, currentSort);
  };

  handleClickDown = () => {
    console.debug("handleClickDown called");
    var currentSort = this.state.currentSort;
    var nextPage = this.state.currentPage - 1;
    console.debug("handleClickDown sending " + nextPage);
    this.doAxiosCalls(nextPage, currentSort);
  };

  handleClickSortNumber = () => {
    var currentSort = "usernumber";
    var nextPage = 1;
    this.doAxiosCalls(nextPage, currentSort);
    console.log("Sort Clicked Number Clicked");
  };

  handleClickSortName = () => {
    var currentSort = "username";
    var nextPage = 1;
    this.doAxiosCalls(nextPage, currentSort);
    console.log("Sort Clicked Name Clicked");
  };

  doAxiosCalls = (nextPage, currentSort) => {
    console.debug("doAxiosCalls Called");
    axios
      .get(
        "http://localhost:5000/users/?page=" +
          nextPage +
          "&" +
          "curSort=" +
          currentSort
      )

      .then(res => {
        this.setState({
          data: res.data.docs,
          currentPage: nextPage,
          currentSort: currentSort,
          disabledDownButton: res.data.offset - 1 > 0 ? false : true,
          disabledUpButton:
            res.data.offset + res.data.limit > res.data.total ? true : false
        });
        console.debug("doAxiosCalls getting " + nextPage);
        console.debug("limit is " + res.data.limit);
        console.debug("offset is " + res.data.offset);
        console.debug("total number of records is " + res.data.total);
      });
  };

  render() {
    console.debug("currentPage in the render is  " + this.state.currentPage);
    return (
      <div>
        <Table celled>
          <Table.Header>
            {" "}
            <Table.Row>
              {" "}
              <Button content="Number" onClick={this.handleClickSortNumber} />
              <Button content="Name" onClick={this.handleClickSortName} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <AxiosList data={this.state.data} />
            </Table.Row>
          </Table.Body>
        </Table>

        <Button
          disabled={this.state.disabledUpButton}
          content="Next Page"
          onClick={this.handleClickUp}
        />
        <Button
          disabled={this.state.disabledDownButton}
          content="Previous Page"
          onClick={this.handleClickDown}
        />
        <h1>
          {this.state.currentpage - 2},{this.state.currentPage - 1},
          {this.state.currentPage},{this.state.currentPage + 1},
          {this.state.currentPage + 2}
        </h1>
        <h1>Current Sort = {this.state.currentSort}</h1>
      </div>
    );
  }
}
