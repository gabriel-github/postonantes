import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import Home from "./home/Home"
import Produtos from './produtos/Produtos';
import Promoções from './promoções/Promoções';


export default function Approutes(){
    return(
        <Router> 
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route exact path="/Produtos" component= {Produtos} />
                <Route exact path="/Promoções" component= {Promoções} />
            </Switch>
        </Router>
    );
}