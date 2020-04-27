import React , { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import OrderMng from './components/OrderMng.jsx';
import AdminDB from './components/AdminDB.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component{
	render(){
		return(
			<Router>
				<div>

					<Header />

					<Switch>

					  <Route path="/adminDB"> {/* Routes to the Admin Database Screen*/}
					  	<AdminDB/>
					  </Route>
			          
			          <Route path="/order"> {/*Routes to the Order Management Screen*/}
			            <OrderMng/>
			          </Route>		
			          
			          <Route path="/restDetails"> {/*Routes to the Restaurant Details Screen*/}
			          	<RestaurantDetails/>
			          </Route>     
			          
			          <Route path="/"> {/*Homepage*/}
			            <Card/>
			          </Route>
			        
			        </Switch>
						
				</div>
			</Router>
			);
	}

}

export default App;

