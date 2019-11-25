import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
//import PhoneInput from "react-phone-number-input";

export class AddPersonAxios extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.state = {
      users: [],
      currentusernumber: null,
      username: "",
      userphone: "",
      progress: "",
      userdate: ""
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/users/").then(res => {
      this.setState({
        users: res.data.docs,
        username: res.data.docs[0].username,
        currentusernumber: res.data.total,
        userphone: res.data.docs[0].userphone,
        userdate: this.state.userdate,
        progress: "Ready for entry"
      });
      console.log(
        "component did mount" + JSON.stringify(res.data.docs[0], null, 2)
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    var usernumberholder = this.state.currentusernumber + 1;
    console.log(
      " OnSubmit usernumberHolder after increment  is " + usernumberholder
    );
    var today = new Date();
    var date =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    console.log(" the  reported  date is" + date);

    const user = {
      usernumber: usernumberholder,
      username: this.state.username,
      userphone: this.state.userphone,
      userdate: date
    };

    console.log(user);

    axios.post("http://localhost:5000/users/add", user).then(res => {
      this.setState({
        progress: res.data
      });

      console.log(res.data);
    });
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

  onChangeUsername = e => {
    this.setState({
      username: e.target.value,

      progress: "Enter name  and press enter"
    });
    console.log(
      "onChangeUsername triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
  };

  render() {
    return (
      <div>
        <h3>Add A User</h3>
        <h2>User Number and entry date will be autogenerated </h2>
        <Form>
          <Form.Group>
            <Form.Input
              label="Name"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />

            <Form.Input
              label="Phone"
              value={this.state.userphone}
              onChange={this.onChangeUserPhone}
            />
          </Form.Group>
          <Button
            type="submit"
            value="Create User"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </Form>

        <h3>usernumber {this.state.usernumber}</h3>
        <h1>Status is {this.state.progress}</h1>
      </div>
    );
  }
}
