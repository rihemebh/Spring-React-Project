import React, { Component } from 'react'
import AppNav from './Nav' 
import { Container, FormGroup , Form , Button , Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Expenses extends Component {
    state = {
        date : new Date(),
        isLoading :true,
        expenses : [], 
        categories : [],
    }
async componentDidMount(){
    const response= await fetch("/api/categories");
    const body = await response.json();
    this.setState({categories: body , isLoading : false});
}
    handleChange = ()=>{

    }
    render() {
        const title = <h3>Add Expense</h3>
        const {expenses , isLoading , categories} = this.state;

        if(isLoading){
            return(<div> Loading ...</div>)
        }
        let optionList =  
            categories.map (category => 
            <div id={category.id}>{category.name}</div>)
        }
        return (
            <div>
                <AppNav/>             
                <Container>
                {title}
                    <Form onSubmit={this.handleSumbit}>
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
                           
                            <Input type="text" name=" Category"  id=" Category" onChange={this.handleChange} ></Input>
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
                </Container>
            </div>
        )
    }
}

export default Expenses
