import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Chat from './components/Chat';


class App extends Component  <any, any>{
  render(){
    
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navigation /> */}
          <Chat />
        </div>
      </BrowserRouter>
    );
  }
}

/*const mapStateToProps = (state: any) => {
  return { ctr: state.counter }; //state is the reducers
}

const mapDispatchToProps = (dispatch : any) =>{
  return {
    onIncrementCounter: ()=> dispatch({type: "INCREMENT"}),
    onDecrementCounter: ()=> dispatch({type: "DECREMENT"})
  }
}
*/
export default App;