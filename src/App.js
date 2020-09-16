import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
        <Router>
        
          <Header />
            <Switch>
              <React.Fragment>
                <Route exact path="/" component={ListEmployee}></Route>
                <Route path="/employee" component={ListEmployee}></Route>
                <Route path="/add-employee" component={AddEmployee}></Route>
                <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
                {/* <ListEmployee /> */}
              </React.Fragment>
            </Switch>
            
          <Footer />
        
        </Router>
 
   
    </div>
    
  );
}

export default App;
