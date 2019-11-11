import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

export class Cardmaker extends Component {
  render() {
    return (
      <Card.Group centered size="tiny">
        <Cards data={this.props.data} />
      </Card.Group>
    );
  }
}
export class Cards extends Component {
  render() {
    return this.props.data.map(card => {
      return (
        <Card>
          <Image src={card.image} wrapped ui={false} />{" "}
          <Card.Content>
            <Card.Header>{card.username}</Card.Header>
            <Card.Meta>Date{card.userdate}</Card.Meta>
            <Card.Description>
              This is the card Description <strong>BOO</strong>
            </Card.Description>
          </Card.Content>
        </Card>
      );
    });
  }
}
