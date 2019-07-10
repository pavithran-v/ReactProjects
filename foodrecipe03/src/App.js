import React,{Fragment} from 'react';
import Recipe from './Recipe';
import './App.css';
import {connect} from 'react-redux';
import * as action from './actionCreater/action';


const APP_ID = '17f4621f';
const APP_KEY = 'c3d561f8504e386d093d016b060a2b8b';

class  App extends React.Component
   {
     constructor(props)
     {
       super(props);
       this.state = {searchrecipe : undefined};
      this.getRecipes = this.getRecipes.bind(this);
     }
     
     
     getRecipes = async () =>
     {
       const response = await fetch(`https://api.edamam.com/search?q=${this.props.search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
       const data = await response.json();
       console.log(data.hits.length);
       if(data.hits.length === 0)
       {
         alert("Please Check Your Words")
       }
       else{
        this.props.onRecipes(data.hits);
       }
      
       
     }
      getSearch = e => 
      {
        e.preventDefault();
        const val = e.target.elements.res.value;
        if(!val)
        {
          alert("Please Enter Your Choice")
        }
        else
        {
          this.props.onSearch(val);
        this.setState({
          searchrecipe : val
         })
        }
        
      }
    componentDidMount()
    {
       this.getRecipes();
       
        
    }
    componentDidUpdate(prevState)
    {
      // console.log(prevState.searchrecipe);
      // console.log(this.state.searchrecipe);  
      if(prevState.searchrecipe !== this.state.searchrecipe)
      {
       // console.log("Hai");
        this.setState({
          searchrecipe: undefined
        })
        this.getRecipes();

      }
     
    }
    render()
    {
      //console.log("Hai");
      
     return(
      <div className="App">
        <form className="search-form" onSubmit={(e) => this.getSearch(e)}>
          <input className="search-bar" type="text" name="res" />
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="content">
        <Recipe />
        </div>
      </div>
      
      
    );
  
   }
  }


  const mapStateToProps = state => {
    return {
      recipes : state.recipes,
      search : state.search,
     // query : state.query

    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
      onSearch : (value) => dispatch(action.onSearch(value)),
      onRecipes : (list) => dispatch(action.onRecipes(list))
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(App);