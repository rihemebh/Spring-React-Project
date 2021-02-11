import React, { Component } from 'react'
import AppNav from './Nav' 
import { Container, FormGroup , Form , Button , Label, Input , Jumbotron} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle , Col , Row
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'react-moment';


export class Expenses extends Component {
    EmptyItem={
        id : '103',
        expensedate: new Date(),
        description: "",
        location : '',
        category : {id: 1, name: "travel"}
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
            this.handleSumbit = this.handleSumbit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleDateChange = this.handleDateChange.bind(this);
    }
    
async componentDidMount(){
    const response= await fetch("/api/categories");
    const body = await response.json();
    this.setState({categories: body , isLoading : false});

    const responseExp= await fetch("/api/expenses");
    const bodyExp = await responseExp.json();
    this.setState({expenses: bodyExp , isLoading : false});
}
    handleChange = (event)=>{
        console.log(event);
      const target = event.target;
      const value = event.value;
      const name = event.name;

      let item = {...this.state.item};
      item[name]= value;
      this.setState({item});
      console.log(item);
    
    }

    handleDateChange(date){
        let item = {...this.state.item};
        item.expensedate=date;
        item.location=localtion;
        this.setState({item});
        console.log(item);
    }

    async handleSumbit(event) {
        event.preventDefault();
        const {item} =this.state;
        await fetch('/api/expenses', {
            method : "POST",
           headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           },
           body : JSON.stringify(item),
        }
       
        );
        this.props.history.push("/expenses"); // route
       }

    async remove(id){
        await fetch(`/api/expenses/${id}`, {
            method : 'DELETE',
            headers : {
                'Accept' : "application/json",
                "content-Type" : "application/json",
            }
        }).then(() => {
            let updatedExpenses = [...this.state.expenses].filter(i => i.id !== id);
            this.setState({expenses : updatedExpenses});
          });
       
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
         <Col>
<CardBody>
<CardTitle tag="h5">Expense {expense.id}</CardTitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted">{expense.location}</CardSubtitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted"><Moment date={expense.expensedate} format="YYYY/MM/DD"></Moment></CardSubtitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted">{expense.category.name}</CardSubtitle>
  <CardText>{expense.description}</CardText>
  <Button color="danger" onClick={ ()=> this.remove(expense.id)}>Delete</Button>
</CardBody>
</Col>  
)
  
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
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange}></DatePicker>
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
                    <Row> {cards}</Row>
                       
                </Container>
            </div>
        )
    }
}

export default Expenses
