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
                 <h2 style={{display : 'flex' , justifyContent: 'center', alignItems:'center', height:'100vh'}}>
                    Welcome to our app </h2>
            </div>
        )
    }
}

export default Home
