import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { OneRow } from "./Record";

export class IncrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      disabled: true
    };
  }
  handleClickUp = () => {
    this.setState({ clicks: this.state.clicks + 1, disabled: false });
  };
  handleClickDown = () => {
    if (this.state.clicks > 0)
      this.setState({
        clicks: this.state.clicks - 1,
        disabled: this.state.clicks - 1 > 1 ? false : true
      });
  };

  render() {
    return (
      <div>
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
