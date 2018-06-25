import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

var score = [
	{"q":"q1","value":''},
	{"q":"q2","value":''},
	{"q":"q3","value":''},
	{"q":"q4","value":''},
	{"q":"q5","value":''}
];
var answer = ['1','1','1','1','1'];
class ExerciseInstance extends React.Component{
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		ReactDOM.render(<ExerciseTest />,document.getElementById('container'));
		//alert('start test.');
	}
	render(){
		return(
		  <div>
		  	<br />
		  	<Alert color="primary">
		        <Button color="link" onClick={this.handleClick}>Lesson 1: Arduino Introduction</Button>
		    </Alert>
		    <Alert color="info">
		        <Button color="link" onClick={this.handleClick}>Lesson 2: Arduino Devolop Software</Button>
		    </Alert>
		  </div>
		);
	}
}

class ExerciseTest extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleOptionChangeQ1 = this.handleOptionChangeQ1.bind(this);
		this.handleOptionChangeQ2 = this.handleOptionChangeQ2.bind(this);
		this.handleOptionChangeQ3 = this.handleOptionChangeQ3.bind(this);
		this.handleOptionChangeQ4 = this.handleOptionChangeQ4.bind(this);
		this.handleOptionChangeQ5 = this.handleOptionChangeQ5.bind(this);
	}
	handleOptionChangeQ1(e) {
	  this.setState({
	    value: e.target.value
	  });
	  score[0].value = e.target.value;
	}
	handleOptionChangeQ2(e) {
	  this.setState({
	    value: e.target.value
	  });
	  score[1].value = e.target.value;
	}
	handleOptionChangeQ3(e) {
	  this.setState({
	    value: e.target.value
	  });
	  score[2].value = e.target.value;
	}
	handleOptionChangeQ4(e) {
	  this.setState({
	    value: e.target.value
	  });
	  score[3].value = e.target.value;
	}
	handleOptionChangeQ5(e) {
	  this.setState({
	    value: e.target.value
	  });
	  score[4].value = e.target.value;
	}
	handleClick(){
		var point = 0;
		var i = 0;
		for(i;i<5;i++){
			if(score[i].value === answer[i]){
				point++;
			}
		}
		alert("quiz1 get: "+point*10);
	}
	render(){
		return(
			<div>
			<h3><center>Arduino Introduction Quiz</center></h3>
			<Form>
				<FormGroup tag="fieldset">
			        <legend>1. Arduino are open source code?</legend>
			        <Col sm={10}>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={1} 
			            	 onChange={this.handleOptionChangeQ1} name="q1" />{' '}
			              		yes
			              	</Label>
			        	</FormGroup>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={0} 
			            	onChange={this.handleOptionChangeQ1} name="q1" />{' '}
			              		no
			            	</Label>
			        	</FormGroup>
			        </Col>
			        <legend>2. Arduino Operating Voltage is 3.3V and 5V?</legend>
			        <Col sm={10}>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={1} 
			            	 onChange={this.handleOptionChangeQ2} name="q2" />{' '}
			              		yes
			              	</Label>
			        	</FormGroup>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={0} 
			            	onChange={this.handleOptionChangeQ2} name="q2" />{' '}
			              		no
			            	</Label>
			        	</FormGroup>
			        </Col>
			        <legend>3. Arduino have so many group?</legend>
			        <Col sm={10}>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={1} 
			            	 onChange={this.handleOptionChangeQ3} name="q3" />{' '}
			              		yes
			              	</Label>
			        	</FormGroup>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={0} 
			            	onChange={this.handleOptionChangeQ3} name="q3" />{' '}
			              		no
			            	</Label>
			        	</FormGroup>
			        </Col>
			        <legend>4. LED is digital pin 13.</legend>
			        <Col sm={10}>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={1} 
			            	 onChange={this.handleOptionChangeQ4} name="q4" />{' '}
			              		yes
			              	</Label>
			        	</FormGroup>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={0} 
			            	onChange={this.handleOptionChangeQ4} name="q4" />{' '}
			              		no
			            	</Label>
			        	</FormGroup>
			        </Col>
			        <legend>5. Arduino have serial commuication pin?</legend>
			        <Col sm={10}>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={1} 
			            	 onChange={this.handleOptionChangeQ5} name="q5" />{' '}
			              		yes
			              	</Label>
			        	</FormGroup>
			        	<FormGroup check>
			        		<Label check>
			            	<Input type="radio" value={0} 
			            	onChange={this.handleOptionChangeQ5} name="q5" />{' '}
			              		no
			            	</Label>
			        	</FormGroup>
			        </Col>
			    </FormGroup>
			    <Button color="success" onClick={this.handleClick}>Submit</Button>
			</Form>
			</div>
		);
	}
}

export default ExerciseInstance;