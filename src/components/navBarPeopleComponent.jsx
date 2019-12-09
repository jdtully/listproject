import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Jeff's Kickass Program </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Users</Nav.Link>
            <Nav.Link href="/edit/:id">Edit Users</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
export default MyNavbar;
