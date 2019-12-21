import React from "react";
import axios from "axios";

import { Form, Button } from "semantic-ui-react";
console.log("edit user  called");

export class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      useremail: "",
      userstreet: "",
      usercity: "",
      userstate: "",
      userzip: "",
      userphone: "",
      usertoedit: this.props._id,
      nameError: false,
      emailError: false,
      streetError: false,
      cityError: false,
      stateError: false,
      zipError: false,
      phoneError: false,
      genderError: false
    };
  }

  componentDidMount = () => {
    console.log("we are in edit user" + JSON.parse(this.props._id));
    axios
      .get("http://localhost:5000/users/?" + this.props._id)

      .then(
        res =>
          this.setState({
            usertoedit: res.data._id,
            username: res.data.username,
            userstreet: res.data.userstreet,
            usercity: res.data.usercity,
            userstate: res.data.userstate,
            userzip: res.data.userzip,
            userphone: res.data.userphone,
            useremail: res.data.useremail,
            usergender: res.data.usergender
          }),
        console.log("component did mount" + (this.state.username, null, 2))
      );
  };
  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      useremail: this.state.useremail,
      userstreet: this.state.userstreet,
      usercity: this.state.usercity,
      userstate: this.state.userstate,
      userzip: this.state.userzip,
      userphone: this.state.userphone,
      usergender: this.state.usergender
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/update/" + this.props._id, user)
      .then(res => {
        this.setState({
          progress: res.data
        });

        console.log(res.data);
      });
  };

  onChangeUserName = e => {
    this.setState({
      username: e.target.value,
      progress: "Enter name  and press Tab"
    });
    console.log(
      "onChangeUsername triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
  };

  onChangeUserEmail = e => {
    this.setState({
      useremail: e.target.value,
      progress: "Enter E-mail"
    });
    console.log(
      "onChangeUserEmail triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed E-mail");
  };

  onChangeUserGender = e => {
    this.setState({
      usergender: e.target.value,
      progress: "Enter Gender"
    });
    console.log(
      "onChangeUserGender triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed Phone number");
  };
  onChangeUserStreet = e => {
    this.setState({
      userstreet: e.target.value,

      progress: "Enter Street Name"
    });
    console.log(
      "onChangeUserStreet triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed Street Name");
  };
  onChangeUserCity = e => {
    this.setState({
      usercity: e.target.value,
      progress: "Enter City"
    });
    console.log(
      "onChangeUserCity triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed City");
  };
  onChangeUserState = e => {
    this.setState({
      userstate: e.target.value,
      progress: "Enter State"
    });
    console.log(
      "onChangeUserState triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed State");
  };
  onChangeUserZip = e => {
    this.setState({
      userzip: e.target.value,

      progress: "Enter Zip Code"
    });
    console.log(
      "onChangeUserZip triggered new " + JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed Zip");
  };
  onChangeUserPhone = e => {
    this.setState({
      userphone: e.target.value,
      progress: "Enter Phone Number"
    });
    console.log(
      "onChangeUsername triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed Phone number");
  };

  render() {
    return (
      <div>
        <h3>Edit User</h3>

        <Form>
          <Form.Input
            label="Name"
            value={this.state.username}
            onChange={this.onChangeUserName}
          />
          <Form.Input
            label="Street Address"
            value={this.state.userstreet}
            onChange={this.onChangeUserStreet}
          />
          <Form.Group>
            <Form.Input
              label="City"
              value={this.state.usercity}
              onChange={this.onChangeUserCity}
            />
            <Form.Input
              label="State"
              value={this.state.userstate}
              onChange={this.onChangeUserState}
              width={2}
            />{" "}
            <Form.Input
              label="Postal Code"
              value={this.state.userzip}
              onChange={this.onChangeUserZip}
              width={3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Phone"
              value={this.state.userphone}
              onChange={this.onChangeUserPhone}
            />{" "}
            <Form.Input
              label="E-mail"
              value={this.state.useremail}
              onChange={this.onChangeUserEmail}
            />
          </Form.Group>{" "}
          <Form.Group>
            <Form.Input
              label="Gender"
              value={this.state.usergender}
              onChange={this.onChangeUserGender}
            />
          </Form.Group>
          <Button
            color="blue"
            type="submit"
            value="Create User"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </Form>

        <h1>Status is {this.state.progress}</h1>
      </div>
    );
  }
}
