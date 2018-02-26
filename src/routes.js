import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import ShelfHome from './shelfHome';
import Shelf from './shelf';
import Bin from './bin';


class Routes extends Component {
    render (){
        // console.log(55555,this.props)
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={ShelfHome}/>
                    <Route exact path="/:shelfid" component={Shelf}/>

                    <Route exact path="/1/:binid" component={Bin}/>
                    <Route exact path="/2/:binid" component={Bin}/>
                    <Route exact path="/3/:binid" component={Bin}/>
                    <Route exact path="/4/:binid" component={Bin}/>
                </Switch>
            </div>
        )
    }
};

export default Routes;
  