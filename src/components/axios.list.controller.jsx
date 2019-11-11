import React from "react";
import axios from "axios";

import { Button } from "semantic-ui-react";
import { AxiosList } from "./list.axios.data";

export class PaginatedList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pagelimit: " ",
      currentPage: 1,
      disabledDownButton: true,
      disabledUpButton: false,
      sortColumn: "userphone"
    };
  }

  componentDidMount = () => {
    console.debug("componentDidMount" + JSON.stringify(this.state));
    console.debug("componentdid mount counter" + this.state.currentPage);
    axios
      .get("http://localhost:5000/users/?page=" + this.state.currentPage)
      .then(res => {
        this.setState({
          data: res.data.docs,
          pagelimit: res.data.limit,
          currentPage: this.state.currentPage,
          sortColumn: this.state.sortColumn,
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

  doAxiosCalls = nextPage => {
    console.debug("doAxiosCalls Called");
    axios.get("http://localhost:5000/users/?page=" + nextPage).then(res => {
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
