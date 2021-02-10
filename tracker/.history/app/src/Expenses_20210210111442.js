import React, { Component } from 'react'
import AppNav from './Nav' 
import { Container, FormGroup , Form , Button , label, Label } from 'reactstrap';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Expenses extends Component {
    state = {

    }

    handleChange
    render() {
        const title = <h3>Add Expense</h3>
        return (
            <div>
                <AppNav/>
                <Container style={{margintop:'50px'}}>   {title}</Container>
             
                <Container style={{display : 'flex' , justifyContent: 'center', alignItems:'center', height:'100vh'}}>
                    
                    <Form onSubmit={this.handleSumbit}>
                        <FormGroup>
                            <Label for="title"> Title </label>
                            <br/>
                            <input type="text" name="title" id="title" onChange={this.handleChange} autoComplete="name"></input>
                        </FormGroup>
                        <FormGroup>
                            <label  for=" Category"> Category </label>
                            <br/>
                            <input type="text" name=" Category"  id=" Category" onChange={this.handleChange} ></input>
                        </FormGroup>
                        <FormGroup>
                            <label for="date">Expense Date </label>
                            <br/>
                            <DatePicker selected={this.state.date} onChange={this.handleChange}></DatePicker>
                        </FormGroup>
                        <FormGroup>
                            <label  for="location">Location </label>
                            <br/>
                            <input type="text" name="location" id="location" onChange={this.handleChange} ></input>
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
