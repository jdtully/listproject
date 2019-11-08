import React from "react";
import { Button } from "semantic-ui-react";
import { array } from "./testarray";
import { OneRow } from "./Record";
import { GetData } from "./MakeObjectToExport";
import axios from "axios";

export class Populate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 1, disabled: true };
  }
  handleClickUp = () => {
    this.setState({ clicks: this.state.clicks + 1, disabled: false });
  };

  handleClickDown = () => {
    this.setState({
      clicks: this.state.clicks - 1,
      disabled: this.state.clicks - 1 > 1 ? false : true
    });
  };
  handlePost = () => {
    array.map(user => {
      return axios
        .post("http://localhost:5000/users/add", user)
        .then(res => console.log(res.data));
    });
  };
  addOne = () => {
    axios

      .post("http://localhost:5000/users/add", array[this.state.clicks])
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <div>
        <div>hello</div>

        <Button content="Add all records" onClick={this.handlePost} />
        <Button content="Add this record" onClick={this.addOne} />
        <GetData recno={this.state.clicks} />

        <OneRow recno={this.state.clicks} />
        <Button content="Next Name " onClick={this.handleClickUp} />
        <Button
          disabled={this.state.disabled}
          content="Previous Name"
          onClick={this.handleClickDown}
        />
        <h1>{this.state.clicks}</h1>
      </div>
    );
  }
}
