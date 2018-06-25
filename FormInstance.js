import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Navgation from './Navgation.js';
import $ from 'jquery';

var member = [];
class LoginInstance extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: '', passwd: '',
          _user: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    const jsonURL = "http://140.138.150.84:8080/clerk/all";
    
    $.ajax({
      contentType: 'application/json;charset=UTF-8',
      dataType: 'json',
      type:'GET',
      url:jsonURL,
        async: false
    }).done(function(data){
      member = data;
    });
  }
  componentWillUnmount(){
    member = [];
  }
  handleChange(e) {
    this.setState({ user: e.target.user });
    this.setState({ passwd: e.target.passwd });
  }
  handleClick(){
    var user = ReactDOM.findDOMNode(this.refs.lg_user).value;
    var passwd = ReactDOM.findDOMNode(this.refs.lg_passwd).value;
    
    member.forEach((e) => {
      if(user === e.userId && passwd === e.passwd){
        this.state._user = e;
      }
    });
    if(user === this.state._user.userId && passwd === this.state._user.passwd){
      ReactDOM.render(<Navgation _user={this.state._user} />,document.getElementById('root'));
    }else{
      ReactDOM.findDOMNode(this.refs.lg_passwd).value = "";
      alert("userID or password error!");
    }
  }
  render() {
    return (
      <Col xs="auto">
      <h1><center>Arduino 留言板登入</center></h1>
      <br />
      <Form>
        <FormGroup>
        <Label for="exampleUser">User ID:</Label>
        <Input type="text" 
          ref="lg_user" 
          value={this.state.user}
          onChange={this.handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password:</Label>
        <Input type="password" 
          ref="lg_passwd" 
          value={this.state.passwd}
          onChange={this.handleChange} />
      </FormGroup>
      <Button onClick={this.handleClick} color="success">Submit</Button>
    </Form>
    </Col>
    );
  }
}

export default LoginInstance;

