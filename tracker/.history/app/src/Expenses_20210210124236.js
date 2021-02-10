import React, { Component } from 'react'
import AppNav from './Nav' 
import { Container, FormGroup , Form , Button , Label, Input , Jumbotron} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/*"id":100,
"expensedate":"2019-06-16T17:00:00Z",
"description":"New York Business Trip",
"location":"New York",
"category":{"id":1,"name":"Travel"}}*/
export class Expenses extends Component {
    EmptyItem={
        id : '103',
        expensedate: new Date(),
        description: "",
        location : '',
        category : [1, "travel"]
    }
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            isLoading :true,
            expenses : [], 
            categories : [],
            item : this.EmptyItem,
        }

    }
    
async componentDidMount(){
    const response= await fetch("/api/categories");
    const body = await response.json();
    this.setState({categories: body , isLoading : false});

    const responseExp= await fetch("/api/expenses");
    const bodyExp = await responseExp.json();
    this.setState({expenses: bodyExp , isLoading : false});
}
    handleChange = ()=>{

    }
    render() {
        const title = <h3>Add Expense</h3>
        const {expenses , isLoading , categories} = this.state;

        if(isLoading){
            return(<div> Loading ...</div>)
        }
        let optionList = categories.map (category => 
            <option id={category.id}>{category.name}</option>)

        let cards = expenses.map (expense => 
            <Card style={{ width: '18rem' }}>
            <CardImg top width="100%" src="./logo.svg" alt="Card image cap" />
<CardBody>
  <CardTitle tag="h5">{expense.id</CardTitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  <Button>Button</Button>
</CardBody>
</Card>)
  
        return (
            <div>
                <AppNav/>             
                <Jumbotron style={{display : 'flex' , justifyContent: 'center', alignItems:'center'}}>
               
                    <Form onSubmit={this.handleSumbit} >
                    {title}
                        <FormGroup>
                            <Label for="title"> Title </Label>
                            <br/>
                            <Input type="text" name="title" id="title" onChange={this.handleChange} autoComplete="name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label  for=" Category"> Category </Label>
                            <select>
                                {optionList }
                            </select>
                        
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Expense Date </Label>
                            <DatePicker selected={this.state.date} onChange={this.handleChange}></DatePicker>
                        </FormGroup>
                        <FormGroup>
                            <Label  for="location">Location </Label>
                            <br/>
                            <Input type="text" name="location" id="location" onChange={this.handleChange} ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>
                <Container>
                    <h3 style={{marginBottom: '20px'}}> Expenses List </h3>
                <Card style={{ width: '18rem' }}>
                    <CardImg top width="100%" src="./logo.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      {cards}
                </Container>
            </div>
        )
    }
}

export default Expenses
