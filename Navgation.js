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
import IndexInstance from './IndexInstance.js';
import CommentInstance from './CommentBox.js';
import SyllabusInstance from './Syllabus.js';
import ExerciseInstance from './Exercise.js';

class Navgation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      _user: {}
    };

    this.state._user = this.props._user;
    this.handleLogout = this.handleLogout.bind(this);
    this.handleExercise = this.handleExercise.bind(this);
    this.handleSyllabus = this.handleSyllabus.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
    this.handleContact = this.handleContact.bind(this);

    //console.log(this.state._user.userId);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleHome(){
    ReactDOM.render(<CommentInstance />,document.getElementById('container'));
  }
  handleSyllabus(){
    ReactDOM.render(<SyllabusInstance />,document.getElementById('container'));
  }
  handleExercise(){
    ReactDOM.render(<ExerciseInstance />,document.getElementById('container'));
  }
  handleLogout(){
    ReactDOM.render(<IndexInstance />,root);
  }
  handleAbout(){
    alert("My Name: "+this.state._user.userId+"\n");
  }
  handleContact(){
    alert("Mail: puppy9109@gmail.com");
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand onClick={this.handleHome}><img src="./arduino.jpg"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.handleSyllabus}>Syllabus</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleExercise}>Exercise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.handleAbout}>
                    About Me
                  </DropdownItem>
                  <DropdownItem href="https://create.arduino.cc/projecthub">
                    Arduino Project Hub
                  </DropdownItem>
                  <DropdownItem onClick={this.handleContact}>
                    Contact us
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="container" className="container">
          <h1><center>Hello {this.state._user.userId}, Welcom to Arduino Teaching Discussion Message Board.</center></h1>
          <Col sm={{ size: 'auto' }}>
            <br />
            <CommentInstance _name={ this.state._user.userId } />
          </Col>
        </div>
      </div>      
    );
  }
}

export default Navgation;