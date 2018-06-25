import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Button, ListGroup, ListGroupItem, 
	Form, FormGroup, Label, Input,
	Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import $ from 'jquery';

var com_arr = [];
var name = "";
class CommentInstance extends React.Component {
  constructor(props) {
  	super(props);

  	name = this.props._name;
  	//console.log(this.props._name);
  }
  render() {
    return (
	    <div id="comment-box">
	      <CommentList />
	      <br />
	      <CommentForm />
	      <br />
	      <CommentPage />
    	</div>
    );
  }
}

class CommentList extends React.Component {
  componentDidMount(){
  	
  }
  componentWillUnmount(){

  }
  render() {
  	const jsonURL = "http://140.138.150.84:8080/clerk/digi/all";
  	
  	$.ajax({
	  	contentType: 'application/json;charset=UTF-8',
		dataType: 'json',
		type:'GET',
		url:jsonURL,
	    async: false
	}).done(function(data){
		com_arr = data;
	});
  	var items = [];
	//console.log(JSON.stringify(com_arr));

  	com_arr.forEach((item) => {
		items.push(<ListGroupItem key={item.id}><h4> {item.name}: {item.comment}</h4><h6>{item.date}</h6></ListGroupItem>);
	});
    return (
	    <div className="comment-list">
		  <br />
		  <ListGroup>
			{ items }
		  </ListGroup>
    	</div>
    );
  }
}

class CommentForm extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { value: "" };

  	this.handleChange = this.handleChange.bind(this);
  	this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e){
  	this.setState({ value: e.target.value });
  }
  handleClick(){
  	var comment = ReactDOM.findDOMNode(this.refs.comment).value;
  	const jsonURL = "http://140.138.150.84:8080/clerk/digi/add";
  	if(name != undefined || name != null){
  		var Object = {"name":name,"comment":comment};
	  	$.ajax({
		  	contentType: 'application/json;charset=UTF-8',
			dataType: 'json',
			type:'POST',
			url:jsonURL,
			data: JSON.stringify(Object),
		    async: false,
		    success: function(data){
		    	alert("Thank you for your comment!");
		    	ReactDOM.render(<CommentInstance />,document.getElementById('container'));
		    }
		});
  	}else{
  		alert("if you are appear this line, please click contact us! we will solve it.");
  	}

  	ReactDOM.findDOMNode(this.refs.comment).value = "";
  }
  render() {
    return (
	    <div className="comment-form">
	      <Form>
	      	<FormGroup>
	          <Label for="exampleText">在這邊加入討論吧：）</Label>
	          <Input type="textarea" 
	          	value={this.state.value} 
	          	ref="comment"
	          	onChange={this.handleChange} />
	        </FormGroup>
	        <br />
	        <Button color="success" onClick={this.handleClick}>Send</Button>
	      </Form>
    	</div>
    );
  }
}

class CommentPage extends React.Component {
  constructor(props) {
  	super(props);
  }
  ComponentDidMount(){
  	console.log(PaginationItem.propTypes);
  }
  render() {
    return (
	    <div className="comment-page">
	     <Col sm={{ size: 'auto', offset: 3 }}>
	    	<br />
		  <Pagination aria-label="Page navigation example">
	        <PaginationItem disabled>
	          <PaginationLink previous href="#" />
	        </PaginationItem>
	        <PaginationItem active>
	          <PaginationLink href="#">
	            1
	          </PaginationLink>
	        </PaginationItem>
	        <PaginationItem>
	          <PaginationLink href="#">
	            2
	          </PaginationLink>
	        </PaginationItem>
	        <PaginationItem>
	          <PaginationLink href="#">
	            3
	          </PaginationLink>
	        </PaginationItem>
	        <PaginationItem>
	          <PaginationLink href="#">
	            4
	          </PaginationLink>
	        </PaginationItem>
	        <PaginationItem>
	          <PaginationLink href="#">
	            5
	          </PaginationLink>
	        </PaginationItem>
	        <PaginationItem>
	          <PaginationLink next href="#" />
	        </PaginationItem>
	      </Pagination>
	     </Col>
    	</div>
    );
  }
}

export default CommentInstance;