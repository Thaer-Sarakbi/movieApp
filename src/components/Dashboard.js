import React, { Component } from 'react';
import MovieCards from "./MovieCards";
import axios from 'axios';
import Searchbar from './Searchbar';
import firebase from '../config/fbConfig'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    state = {
        movies: [],
        searchTerm: 'jack reacher'
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5b52f275a8b2159703b1dc8ba57a0a5a&query=${this.state.searchTerm}`)
             .then(resp => {
               //console.log(resp.data)
               this.setState({ movies: resp.data.results })
             })
      }
    
      handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
      }
    
      render(){
        firebase.auth().onIdTokenChanged(function(user) {
          if (user) {
           // console.log(user)
          }
        });
          //console.log(this.props)
          const { projects, auth } = this.props
          if(!auth.uid) return <Redirect to='/signin/' />

          return( 
            <div>
              <Searchbar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
              <MovieCards movies={this.state.movies} />
            </div>
          )
      }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return{
    auth: state.firebase.auth
  }
}

//export default Dashboard
export default connect(mapStateToProps)(Dashboard)
