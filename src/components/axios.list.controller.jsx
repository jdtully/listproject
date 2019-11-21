import React from "react";
import axios from "axios";
import { Button, Table, Icon, Pagination } from "semantic-ui-react";
import { AxiosList } from "./list.axios.data";

export class PaginatedList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      limit: " ",
      offset: " ",
      total: "",
      currentPage: 1,
      totalPages: "",
      currentSort: "usernumber",
      currentSortDirection: "1",

      colorSortNumberUpArrow: "grey",
      colorSortNumberDownArrow: "grey",
      colorSortNameUpArrow: "grey",
      colorSortNameDownArrow: "grey",

      disabledDownButton: true,
      disabledUpButton: false,
      sortOrderDisplay: "  ascending"
    };
  }

  componentDidMount = () => {
    console.debug("componentDidMount" + JSON.stringify(this.state));
    var currentSort = this.state.currentSort;
    var pageToRender = this.state.currentPage;
    var currentSortDirection = this.state.currentSortDirection;
    console.log("Component did mountpage = " + pageToRender);

    console.debug("clickNext sending " + pageToRender);
    this.doAxiosCalls(pageToRender, currentSort, currentSortDirection);
  };

  clickNext = () => {
    console.debug("clickNext called");
    var currentSort = this.state.currentSort;

    var currentSortDirection = this.state.currentSortDirection;
    var pageToRender = this.state.currentPage + 1;
    console.debug("clickNext sending " + pageToRender);
    this.doAxiosCalls(pageToRender, currentSort, currentSortDirection);
  };

  clickPrev = () => {
    console.debug("clickPrev called");
    var currentSort = this.state.currentSort;
    var currentSortDirection = this.state.currentSortDirection;
    var pageToRender =
      this.state.currentPage - 1 > 0
        ? this.state.currentPage - 1
        : this.state.currentPage;
    console.debug("clickPrev sending " + pageToRender);
    this.doAxiosCalls(pageToRender, currentSort, currentSortDirection);
  };

  sortNumberToggle = () => {
    var currentSort = "usernumber";
    var currentSortDirection =
      this.state.currentSortDirection === "1" ? "-1" : "1";
    console.log(currentSortDirection);
    var pageToRender = 1;
    this.doAxiosCalls(pageToRender, currentSort, currentSortDirection);
    console.log("Sort Clicked Number toggle");
  };

  onClick = event => {
    console.log(event); // => nullified object.
    console.log(event.type); // => "click"
  };

  sortNameToggle = () => {
    var currentSort = "username";

    var currentSortDirection =
      this.state.currentSortDirection === "1" ? "-1" : "1";
    var pageToRender = 1;
    this.doAxiosCalls(pageToRender, currentSort, currentSortDirection);
    console.log("Sort Clicked Name Clicked");
  };

  handleClickGoToPage1 = () => {
    var currentSort = this.state.currentSort;

    var currentSortDirection = this.state.currentSortDirection;
    var pageToRender = 1;
    this.doAxiosCalls(pageToRender, currentSort, currentSortDirection);
    console.log("Left double arrows clicked");
  };

  handleClickGoToPageLast = () => {
    var currentSort = this.state.currentSort;
    var currentSortDirection = this.state.currentSortDirection;
    var pageToRender = this.state.total / this.state.limit;
    this.doAxiosCalls(pageToRender, currentSortDirection, currentSort);
    console.log("Right Double Arrows Clicked");
  };

  doAxiosCalls = (pageToRender, currentSort, currentSortDirection) => {
    var sortOrderDisplay =
      currentSortDirection === "1" ? "  ascending" : "  descending";
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
          sortOrderDisplay: sortOrderDisplay,
          limit: res.data.limit,
          total: res.data.total,
          totalPages: Math.ceil(res.data.total / res.data.limit)
        });
        this.setState({
          disabledDownButton: res.data.offset - 1 > 0 ? false : true,
          disabledUpButton:
            res.data.offset + 1 + res.data.limit > res.data.total
              ? true
              : false,
          colorSortNumberUpArrow:
            this.state.currentSort === "usernumber" &&
            this.state.currentNumberSortDirection === "1"
              ? "green"
              : "grey",
          colorSortNumberDownArrow:
            this.state.currentSort === "usernumber" &&
            this.state.currentNumberSortDirection === "-1"
              ? "green"
              : "grey",
          colorSortNameUpArrow:
            this.state.currentSort === "username" &&
            this.state.currentNameSortDirection === "1"
              ? "green"
              : "grey",
          colorSortNameDownArrow:
            this.state.currentSort === "username" &&
            this.state.currentNameSortDirection === "-1"
              ? "green"
              : "grey"
        });
        console.debug("doAxiosCalls getting " + pageToRender);
        console.debug("limit is " + res.data.limit);
        console.debug("offset is " + res.data.offset);
        console.debug("total number of records is " + res.data.total);
        console.debug(
          "current sort direction = " + this.state.currentNumberSortDirection
        );

        console.debug("total Pages =  " + this.state.totalPages);
      });
  };

  render() {
    console.debug("currentPage in the render is  " + this.state.currentPage);
    return (
      <div>
        <Table celled striped collapsing>
          <Table.Header>
            {" "}
            <Table.Row>
              <Table.HeaderCell>
                {" "}
                {"Acct. Number   "}{" "}
                <Icon.Group>
                  {" "}
                  <Icon
                    color={this.state.colorSortNumberUpArrow}
                    fitted
                    name="sort ascending"
                    onClick={this.sortNumberToggle}
                  />{" "}
                  <Icon
                    fitted
                    color={this.state.colorSortNumberDownArrow}
                    name="sort descending"
                    onClick={this.sortNumberToggle}
                  />
                </Icon.Group>
              </Table.HeaderCell>
              <Table.HeaderCell>
                {" Name of Person "}

                <Icon.Group>
                  {" "}
                  <Icon
                    color={this.state.colorSortNameUpArrow}
                    fitted
                    name="sort ascending"
                    onClick={this.sortNameToggle}
                  />{" "}
                  <Icon
                    fitted
                    color={this.state.colorSortNameDownArrow}
                    name="sort descending"
                    onClick={this.sortNameToggle}
                  />
                </Icon.Group>
              </Table.HeaderCell>
              <Table.HeaderCell>Phone number</Table.HeaderCell>
              <Table.HeaderCell>Customer since</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <AxiosList data={this.state.data} />
          </Table.Body>
        </Table>

        <Button
          disabled={this.state.disabledUpButton}
          content="Next Page"
          onClick={this.clickNext}
        />
        <Button
          disabled={this.state.disabledDownButton}
          content="Previous Page"
          onClick={this.clickPrev}
        />
        <h1>
          Current Sort = {this.state.currentNumberSort}
          {this.state.sortOrderDisplay}
        </h1>
        <Pagination
          defaultActivePage={this.state.currentPage}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true
          }}
          firstItem={{
            content: <Icon name="angle double left" />,
            icon: true,
            disabled: this.state.disabledDownButton,
            onClick: this.handleClickGoToPage1
          }}
          lastItem={{
            content: <Icon name="angle double right" />,
            icon: true,
            disabled: this.state.disabledUpButton,
            onClick: this.handleClickGoToPageLast
          }}
          prevItem={{
            content: <Icon name="angle left" />,
            disabled: this.state.disabledDownButton,
            icon: true,
            onClick: this.clickPrev
          }}
          nextItem={{
            content: <Icon name="angle right" />,
            icon: true,
            disabled: this.state.disabledUpButton,
            onClick: this.clickNext
          }}
          totalPages={this.state.totalPages}
        />
      </div>
    );
  }
}
