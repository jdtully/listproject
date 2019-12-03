import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

export class AddPetAxios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      petname: "",
      petspecies: "",
      petgender: "",
      petownerID: ""
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/pets/?page=1&curSort={%22petname%22:%221%22}")

      .then(res =>
        console.log(
          "component did mount" + JSON.stringify(res.data.docs[0], null, 2)
        )
      );
  };
  onSubmit = e => {
    e.preventDefault();
    const pet = {
      petname: this.state.petname,
      petspecies: this.state.petspecies,
      petgender: this.state.petgender,
      petownerID: this.state.petownerID
    };

    console.log(pet);

    axios.post("http://localhost:5000/pets/add", pet).then(res => {
      this.setState({
        progress: res.data
      });

      console.log(res.data);
    });
  };

  onChangePetName = e => {
    this.setState({
      petname: e.target.value,
      progress: "Enter name  and press Tab"
    });
    console.log(
      "onChangePetName triggered new " + JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
  };

  onChangePetSpecies = e => {
    this.setState({
      petspecies: e.target.value,
      progress: "Enter E-mail"
    });
    console.log(
      "onChangePetSpecies triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed E-mail");
  };

  onChangePetGender = e => {
    this.setState({
      petgender: e.target.value,
      progress: "Enter Gender"
    });
    console.log(
      "onChangePetGender triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changed Phone number");
  };
  onChangePetOwnerID = e => {
    this.setState({
      petownerID: e.target.value,

      progress: "Enter Owner ID"
    });
    console.log(
      "onChangePetOwnerID triggered new " +
        JSON.stringify(e.target.value, null, 2)
    );
    console.log(JSON.stringify(this.state));
    console.log("changedpet owner ");
  };

  render() {
    return (
      <div>
        <h3>Add A Pet</h3>

        <Form>
          <Form.Input
            label="Name"
            value={this.state.petname}
            onChange={this.onChangePetName}
          />

          <Form.Input
            label="Species"
            value={this.state.petspecies}
            onChange={this.onChangePetSpecies}
          />

          <Form.Input
            label="Gender"
            value={this.state.petgender}
            onChange={this.onChangePetGender}
          />
          <Form.Input
            label="Owner"
            value={this.state.petownerID}
            onChange={this.onChangePetOwnerID}
          />

          <Button
            color="blue"
            type="submit"
            value="Create Pet"
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
