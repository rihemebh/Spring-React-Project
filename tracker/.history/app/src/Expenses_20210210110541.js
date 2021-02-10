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
                            <label style={{margin:"50px"}} for="title"> Title </label>
                            <input type="text" name="title" id="title" onChange={this.handleChange} autoComplete="name"></input>
                        </FormGroup>
                        <FormGroup>
                            <label style={{font:"50px"}} for=" Category"> Category </label>
                            <input type="text" name=" Category" id=" Category" onChange={this.handleChange} ></input>
                        </FormGroup>
                        <FormGroup>
                            <label style={{margin:"50px"}} for="date">Expense Date </label>
                            <DatePicker selected={this.state.date} onChange={this.handleChange}></DatePicker>
                        </FormGroup>
                        <FormGroup>
                            <label style={{margin:"50px"}} for="location">Location </label>
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
