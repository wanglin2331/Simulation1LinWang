import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
const itemApi="http://localhost:3001/api/item/"

export default class Bin extends Component{
    constructor() {
        super();
        this.state={
          item: {},
          editting: false,
          newBinid: '',
          newItemNM:'',
          newItemPrice: 0
        }
      }
    
    componentDidMount(){
        axios.get (itemApi + this.props.match.params.binid). then (
            response => {
                this.setState({ item: response.data[0],
                                newBinid: this.props.match.params.binid
                });
            }
        )
      }
    
    setEditting() {
        this.setState({editting: !this.state.editting});
        // console.log(this.state.editting)
    }

    inputNewItemNM(val){
        this.setState({newItemNM: val});
    }

    inputNewItemPrice(val){
        this.setState({newItemPrice: val});
    }

    enterNewItem() {
        let newItem = {"binid": this.state.newBinid, "itemnm":this.state.newItemNM, "itemprice":this.state.newItemPrice}
        axios.post(itemApi+ this.props.match.params.binid, newItem)
    }

    inputItemNM(val){
        const itemClone = Object.assign({}, this.state.item)
        itemClone.itemnm = val
        this.setState({item: itemClone});
    }

    inputItemPrice(val){
        const itemClone = Object.assign({}, this.state.item)
        itemClone.itemprice = val
        this.setState({item: itemClone});
    }

    updateItem(){ 
        axios.put(itemApi + this.props.match.params.binid, this.state.item);
        this.setState({editting: !this.state.editting})
    }

    deleteItem() {
        axios.delete(itemApi + this.props.match.params.binid)
    }

    render() {
        //  console.log(22222, this.props)
        //  //const propsClone = Object.assign({}, this.props.)
        //   console.log(22222, this.props.match.path[1])
        // const Shelf = if (this.props.match.path[1]=='1'){return 'Shelf A'}
        //                 else if(this.props.match.path[1]=='2'){return 'Shelf B'}
        //                 else if(this.props.match.path[1]=='3'){return 'Shelf C'}
        //                 else if(this.props.match.path[1]=='4'){return 'Shelf D'}
        function shelfnm(id)
                    {if (id=='1'){return 'Shelf A'}
                        else if(id=='2'){return 'Shelf B'}
                        else if(id=='3'){return 'Shelf C'}
                        else if(id=='4'){return 'Shelf D'}
                    };
        
        function binnm(id)
                        {if (id=='1'){return 'Bin 1'}
                        else if(id=='2'){return 'Bin 2'}
                        else if(id=='3'){return 'Bin 3'}
                        else if(id=='4'){return 'Bin 4'}
                        else if(id=='5'){return 'Bin 1'}
                        else if(id=='6'){return 'Bin 2'}
                        else if(id=='7'){return 'Bin 3'}
                        else if(id=='8'){return 'Bin 4'}
                        else if(id=='9'){return 'Bin 5'}
                        else if(id=='10'){return 'Bin 1'}
                        else if(id=='11'){return 'Bin 2'}
                        else if(id=='12'){return 'Bin 3'}
                        else if(id=='13'){return 'Bin 4'}
                        else if(id=='14'){return 'Bin 5'}
                        else if(id=='15'){return 'Bin 1'}
                        else if(id=='16'){return 'Bin 2'}
                        else if(id=='17'){return 'Bin 3'}
                        else if(id=='18'){return 'Bin 4'}
                        else if(id=='19'){return 'Bin 5'}
                    };
        

        return (
            
            <div>

                <nav>
                <div className="top">
                <Link to='/'><img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true"/></Link>
                <Link to={'/'+this.props.match.path[1]}><h1>{shelfnm(this.props.match.path[1])}</h1></Link>
                <h1>{binnm(this.state.newBinid)}</h1>
                </div>
                </nav>

                

                {this.state.item
                ? (
                <div>
                        {this.state.editting
                        ? (
                        <div className="itemInfo">
                            <div className="NamePrice">
                                Name:
                                <input value={this.state.item.itemnm} onChange={e => this.inputItemNM(e.target.value)}/>
                                Price:
                                <input value={this.state.item.itemprice} onChange={e => this.inputItemPrice(e.target.value)}/>
                            </div>

                            <div className='grayButtons'>
                                <button className='saveButton' onClick={ ()=>this.updateItem() }><b>Save</b></button> 
                                <Link to={'/'+this.props.match.path[1]}><button className='grayButton' onClick={()=>this.deleteItem()}> <b>Delete</b> </button></Link>
                            </div>
                        </div>
                        ) : 
                        (
                        <div className="itemInfo">
                            <div className="NamePrice">
                                Name:
                                <span>{this.state.item.itemnm}</span>
                                Price:
                                <span>{this.state.item.itemprice}</span>
                            </div>

                            <div className='grayButtons'>
                                <button className='grayButton' onClick={()=>this.setEditting()}><b>Edit</b></button> 
                                <Link to={'/'+this.props.match.path[1]}><button className='grayButton' onClick={()=>this.deleteItem()}><b>Delete</b></button></Link>
                            </div>
                        </div>
                        )}
                </div>
                )
                : (
                    <div className="itemInfo">
                        <div className="NamePrice">
                            Name:
                            <input onChange={e => this.inputNewItemNM(e.target.value)}/>
                            Price:
                            <input onChange={e => this.inputNewItemPrice(e.target.value)}/>
                        </div>

                        <Link to={'/'+this.props.match.path[1]}><button className='addButton' onClick={ ()=>this.enterNewItem() }><b>+ add to inventory</b></button></Link>
                    </div>
                )
            }
                

            </div>
        )
    }
}