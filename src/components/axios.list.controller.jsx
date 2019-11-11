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
    var nextPage = this.state.currentPage + 1;
    console.debug("handleClickUp sending " + nextPage);
    this.doAxiosCalls(nextPage);
  };
  handleClickSortNumber = () => {
    var currentSort = "usernumber";
    var nextPage = this.state.currentPage;
    this.doAxiosCalls(nextPage, currentSort);
    console.log("Sort Clicked Number Clicked");
  };

  handleClickSortName = () => {
    var currentSort = "username";
    var nextPage = this.state.currentPage;
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

  handleClickDown = () => {
    console.debug("handleClickDown called");
    var nextPage = this.state.currentPage - 1;
    console.debug("handleClickDown sending " + nextPage);
    this.doAxiosCalls(nextPage);
  };
  render() {
    console.debug("currentPage in the render is  " + this.state.currentPage);
    return (
      <div>
        <Table celled>
          <Table.Row>
            {" "}
            <Button content="Number" onClick={this.handleClickSortNumber} />
            <Button content="Name" onClick={this.handleClickSortName} />
          </Table.Row>
        </Table>
        <AxiosList data={this.state.data} />
        <Button
          disabled={this.state.disabledUpButton}
          content="Next Name "
          onClick={this.handleClickUp}
        />
        <Button
          disabled={this.state.disabledDownButton}
          content="Previous Name "
          onClick={this.handleClickDown}
        />
        <h1>
          {this.state.currentpage - 2},{this.state.currentPage - 1},
          {this.state.currentPage},{this.state.currentPage + 1},
          {this.state.currentPage + 2}
        </h1>
      </div>
    );
  }
}
