import React from 'react'
import { Route,Switch } from 'react-router-dom';
import Recent from './Recent'

function Routing() {
    return (
        <div>
            <Switch>

            
            <Route exact component={Recent}  path="/recent/:id"></Route>  
            </Switch> 
        </div>
    )
}

export default Routing
