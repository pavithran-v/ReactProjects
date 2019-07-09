import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import * as actionType from './action/actions';


class App extends React.Component {
 render()
 {
   return(
     <div>
       <div className="age">
         <h1>Age : {this.props.age}</h1>       
      </div>
       <div className="buttons">
         <button className="ageup" onClick={this.props.onAgeUp}>AgeUp</button>
         <button className="agedown" onClick={this.props.onAgeDown}>AgeDown</button>
         <button className="ageInc" onClick={this.props.onAgeIncrease}>Increase Age : 5</button>
         <button className="ageDesc" onClick={this.props.onAgeDecrease}>Decrease Age : 5</button>
       </div>
       <div className="results">
       <div><h1>Results : </h1></div>
       <div>
         <ul>
           {
              this.props.results.map(el =>
                
                  <li key={el.id} className="list">{el.val}</li>
                )
           }
         </ul>
       </div>
       </div>
     </div>
   
   );
 }
}

const mapStateToProps = state => {
  return {
    age : state.counter,
    results : state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp : () => dispatch(actionType.addAge()),
    onAgeDown : () => dispatch(actionType.subAge()),
    onAgeIncrease : () => dispatch(actionType.incAge()),
    onAgeDecrease : () => dispatch(actionType.descAge())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
