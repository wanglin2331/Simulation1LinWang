import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
const binApi = 'http://localhost:3001/api/bins/';
const itemsApi="http://localhost:3001/api/items/"


export default class Shelf extends Component{
    constructor() {
        super();
        this.state={
          bins: [],
          items: []
        }
      }
    
      componentDidMount(){
        axios.get (binApi + this.props.match.params.shelfid). then (
            response => {
                this.setState({bins: response.data});
            }
        );
        axios.get (itemsApi). then (
            response => {
                this.setState({items: response.data});
            }
        )
      }

    render() {
        const binClone = Object.assign({}, this.state.bins[0]);
        // console.log(111111,this.state.bins);
        // console.log(2222,binClone.shelfnm);
        // console.log(444444,this.state.bins);
        // console.log(555555,this.state.items);
        return (
           
            <div>
                <nav>
                <div className="top">
                <Link to='/'><img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true"/></Link>
                <h1>{binClone.shelfnm}</h1>
                </div>
                </nav>

                
                <div className="bins">
                {this.state.bins.map(bin => {
                return (
                    <div className="binList"> 

                         <Link to={"/"+this.props.match.params.shelfid+"/"+bin.binid}><h1>{bin.binnm}</h1></Link>

                    </div>
                    )})
                }
                </div>
            </div>
        )
    }
}