import React from 'react';
import { Col, ListGroup, ListGroupItem,
	Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import $ from 'jquery';

var com_arr = [];
class CommentIndex extends React.Component {
  render() {
    return (
	    <div id="comment-box">
	      <CommentList />
	      <br />
	      <CommentPage />
    	</div>
    );
  }
}

class CommentList extends React.Component {
  constructor(props){
  	super(props);
  }
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
		  <ListGroup>
			{ items }
		  </ListGroup>
    	</div>
    );
  }
}

class CommentPage extends React.Component {
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

export default CommentIndex;