import React, { Component } from 'react'
import AppNav from './Nav'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Container, FormGroup , Form , Button , label } from 'reactstrap';
import {Link} from 'react-router-dom'
/*<h2 style={{display : 'flex' , justifyContent: 'center', alignItems:'center', height:'100vh'}}>
Welcome to our app </h2>*/
export class Home extends Component {

    render() {
        return (
            <div>
                 <AppNav/>
                <Container style={{display : 'flex' , justifyContent: 'center', alignItems:'center', height:'100vh'}}>
                    <Form>
                        <FormGroup>
                            <label style={{margin:"10px"}} for="title"> Title </label>
                            <input type="text" name="title" id="title" onChange={this.handleChange} ></input>
                        </FormGroup>
                        <FormGroup>
                            <label style={{margin:"10px"}} for=" Category"> Category </label>
                            <input type="text" name=" Category" id=" Category" onChange={this.handleChange} ></input>
                        </FormGroup>
                        <FormGroup>
                            <label style={{margin:"10px"}} for="date">Expense Date </label>
                            <DatePicker selected={this.state.date}></DatePicker>
                            <input type="text" name="date" id="date" onChange={this.handleChange} ></input>
                        </FormGroup>
                        <FormGroup>
                            <label style={{margin:"10px"}} for="location">Location </label>
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

export default Home
