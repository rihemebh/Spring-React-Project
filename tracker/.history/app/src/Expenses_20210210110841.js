import React, { Component } from 'react'
import AppNav from './Nav' 
import { Container, FormGroup , Form , Button , label } from 'reactstrap';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Expenses extends Component {
    state = {

    }

    handleChange
    render() {
        return (
            <div>
                <AppNav/>
                <Container style={{display : 'flex' , justifyContent: 'center', alignItems:'center', height:'100vh'}}>
                    <Form onSubmit={this.handleSumbit}>
                        <FormGroup>
                            <label for="title"> Title </label>
                            <input type="text" name="title" id="title" style={{margin:"10px"}}onChange={this.handleChange} autoComplete="name"></input>
                        </FormGroup>
                        <FormGroup>
                            <label  for=" Category"> Category </label>
                            <input type="text" name=" Category" style={{margin:"10px"}} id=" Category" onChange={this.handleChange} ></input>
                        </FormGroup>
                        <FormGroup>
                            <label for="date">Expense Date </label>
                            
                            <DatePicker selected={this.state.date} onChange={this.handleChange}></DatePicker>
                        </FormGroup>
                        <FormGroup>
                            <label style={{margin:"10px"}} for="location">Location </label>
                            <input type="text" style={{margin:"10px"}}  name="location" id="location" onChange={this.handleChange} ></input>
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
