import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';

const shelfApi = 'http://localhost:3001/api/shelf';


export default class ShelfHome extends Component {
    constructor() {
        super();
        this.state={
          shelves: []
        }
      }
    
      componentDidMount(){
        axios.get (shelfApi). then (
            response => {
                this.setState({shelves: response.data});
            }
        )
      } 
    
    render() {
      return (
        <div>
          <nav>
          <div className="top">
          <img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true"/>
          <h1>SHELFIE</h1>
          </div>
          </nav>

          <div className="shelves">
            {this.state.shelves.map(shelf => {
                return (
                  
                    <div className="shelfList">
                        <Link to={"/"+shelf.shelfid}><h1>{shelf.shelfnm}</h1></Link>   
                    </div>
                    )})
                }
          </div>
        </div>
      )
    }
  }