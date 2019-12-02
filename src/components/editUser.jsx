import { Component } from "react";
//import axios from "axios";
//import { Table, Icon, Button } from "semantic-ui-react";

export const editUser = >{  constructor(props) {
    super(props);
    this.state = { record: this.props._id };
  }

  render() {
    return console.debug("edituser clicked" + this.state.record);
  }}

}
