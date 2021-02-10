import React, { Component } from 'react'
import AppNav from './Nav'


export class Category extends Component {
    
    state= {
        isLoading : true,
        Categories : []
    }
async componentDidMount(){
    //async call to a springboot : making a request to this endpoint 
   //if we let it like that it wouldn't work because this endpoint is working on 8080 port while our react app is working on 3000
   //=> we should add a proxy in package.json
    const response= await fetch("/api/categories");
    const body = await response.json();
    this.setState({Categories :body , isLoading : false});


}
    render() {
        const {Categories , isLoading}= this.state;
        if (isLoading){
            return( <div>
                <AppNav/>
                <h1>Loading...</h1>
            </div>);
        }else{
            return (
                <div>
                    <AppNav/>
                    <h2>Categories</h2>
                    {
                        Categories.map(category=>
                            <div id={category.id}>
                                {category.name}
                            </div>)

                    }
                    
                </div>
            )

        }
        
    }
}

export default Category
