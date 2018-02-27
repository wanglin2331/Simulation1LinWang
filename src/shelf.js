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

                const binsClone = this.state.bins;
                for(var i=0; i<response.data.length; i++){
                    for(var k=0; k<binsClone.length; k++) {
                        if(response.data[i].binid==binsClone[k].binid){
                            binsClone[k].itemnm= response.data[i].itemnm}
                            this.setState({bins: binsClone});
                        }
                    }
                })
            }
        

      

    render() {
        const binClone = Object.assign({}, this.state.bins[0]);
         console.log(444444,this.state.bins);
         console.log(555555,this.state.items);
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
                            <div>
                                {bin.itemnm
                                    ?(
                                        <div className="binList"> 

                                            <Link to={"/"+this.props.match.params.shelfid+"/"+bin.binid}><h1>{bin.binnm}</h1></Link>

                                        </div>
                                    )
                                    :(  <div className="binListAdd">
                                        <Link to={"/"+this.props.match.params.shelfid+"/"+bin.binid}>
                                            <h1>+ Add inventory to bin</h1>
                                        </Link>
                                        </div>
                                    )
                                }
                            </div>
                        )})
                }
                </div>
                
            </div>
        )
    }
}