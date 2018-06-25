import React from 'react';
import ReactDOM from 'react-dom';
import {
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import LoginInstance from './FormInstance.js';
import CommentIndex from './CommentIndex.js';

class IndexInstance extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogin(){
    ReactDOM.render(<LoginInstance />,root);
  }
  handleContact(){
    alert("Mail: puppy9109@gmail.com");
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#"><img src="./arduino.jpg"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.handleContact}>
                    Contact us
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogin}>
                    Login
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="container">
          <h1><center>Arduino Teaching Discussion Message Board</center></h1>
          <Col sm={{ size: 'auto' }}>
            <br />
            <CommentIndex />
          </Col>
        </div>
      </div>      
    );
  }
}

export default IndexInstance;