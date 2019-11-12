import React from "react";
import axios from "axios";
import { Button, Table, Icon } from "semantic-ui-react";
import { AxiosList } from "./list.axios.data";

export class PaginatedList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pagelimit: " ",
      currentPage: 1,
      currentSort: "usernumber",
      currentSortDirection: "1",
      disabledDownButton: true,
      disabledUpButton: false
    };
  }

  componentDidMount = () => {
    console.debug("componentDidMount" + JSON.stringify(this.state));
    var currentSort = this.state.currentSort;
    var pageToRender = this.state.currentPage;
    var currentSortDirection = this.state.currentSortDirection;
    console.log("Component did mountpage = " + pageToRender);
    console.log("Component did mountSort = " + currentSort);
    var currentSortOrder = {};
    currentSortOrder[currentSort] = currentSortDirection;
    console.debug("handleClickUp sending " + pageToRender);
    this.doAxiosCalls(
      pageToRender,
      currentSortOrder,
      currentSortDirection,
      currentSort
    );
  };

  handleClickUp = () => {
    console.debug("handleClickUp called");
    var currentSort = this.state.currentSort;
    var currentSortDirection = this.state.currentSortDirection;
    var pageToRender = this.state.currentPage + 1;
    var currentSortOrder = {};
    currentSortOrder[currentSort] = currentSortDirection;
    console.debug("handleClickUp sending " + pageToRender);
    this.doAxiosCalls(
      pageToRender,
      currentSortOrder,
      currentSortDirection,
      currentSort
    );
  };

  handleClickDown = () => {
    console.debug("handleClickDown called");
    var currentSort = this.state.currentSort;
    var currentSortDirection = this.state.currentSortDirection;
    var pageToRender = this.state.currentPage - 1;
    var currentSortOrder = {};
    currentSortOrder[currentSort] = currentSortDirection;
    console.debug("handleClickUp sending " + pageToRender);
    this.doAxiosCalls(
      pageToRender,
      currentSortOrder,
      currentSortDirection,
      currentSort
    );
  };

  handleClickSortNumber = () => {
    var currentSort = "usernumber";
    var currentSortDirection =
      this.state.currentSortDirection === "1" ? "-1" : "1";
    console.log(currentSortDirection);
    var currentSortOrder = {};
    currentSortOrder[currentSort] = currentSortDirection;
    console.debug(
      "currentSortOrder value is " + JSON.stringify(currentSortOrder)
    );
    var pageToRender = 1;
    this.doAxiosCalls(
      pageToRender,
      currentSortOrder,
      currentSortDirection,
      currentSort
    );
    console.log("Sort Clicked Number Clicked");
  };

  handleClickSortName = () => {
    var currentSort = "username";
    var currentSortDirection =
      this.state.currentSortDirection === "1" ? "-1" : "1";
    var pageToRender = 1;
    this.doAxiosCalls(pageToRender, currentSortDirection, currentSort);
    console.log("Sort Clicked Name Clicked");
  };

  doAxiosCalls = (pageToRender, currentSortDirection, currentSort) => {
    var currentSortOrder = {};
    currentSortOrder[currentSort] = currentSortDirection;
    console.debug("doAxiosCalls Called");
    axios
      .get(
        "http://localhost:5000/users/?page=" +
          pageToRender +
          "&" +
          "curSort=" +
          JSON.stringify(currentSortOrder)
      )

      .then(res => {
        this.setState({
          data: res.data.docs,
          currentPage: pageToRender,
          currentSort: currentSort,
          currentSortDirection: currentSortDirection,
          disabledDownButton: res.data.offset - 1 > 0 ? false : true,
          disabledUpButton:
            res.data.offset + res.data.limit > res.data.total ? true : false
        });
        console.debug("doAxiosCalls getting " + pageToRender);
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
              <Table.HeaderCell>
                {"Person Number   "}
                <Button content="Number" onClick={this.handleClickSortNumber}>
                  <Icon name="sort" />
                </Button>
              </Table.HeaderCell>
              <Table.HeaderCell>
                {" Name of Person "}
                <Button content="Name" onClick={this.handleClickSortName}>
                  <Icon name="sort" />
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <AxiosList data={this.state.data} />
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
          {this.state.currentPage - 2},{this.state.currentPage - 1},
          {this.state.currentPage},{this.state.currentPage + 1},
          {this.state.currentPage + 2}
        </h1>
        <h1>Current Sort = {this.state.currentSort}</h1>
      </div>
    );
  }
}
