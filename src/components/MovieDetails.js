import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class MovieDetails extends Component {
     state = {
        movie: null
     }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5b52f275a8b2159703b1dc8ba57a0a5a&query`)
        .then(resp => {
          //console.log(resp.data.poster_path)
          this.setState({ movie: resp.data, poster: `t/p/original${resp.data.poster_path}` })
        })
    }
    render(){
        if(this.state.movie){
            console.log(this.state.movie.poster_path)
        }
        
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin/' />

        const movie = this.state.movie
        if(!movie){
          return <p>Please Wait</p>
        } else {
            return(
                <div className='container'>
                    <div className="row">
                    <div className="col s12 m7" style={{ marginTop: '73px', marginLeft: '200px', textAlign: 'center' }}>
                    <div className="card Medium">
                        <div className="card-image">
                        <img src={`https://image.tmdb.org/t/p/original${ this.state.movie.poster_path}`} />
                        <span className="card-title" style={{ color: 'black', top: '-76px' }}>{this.state.movie.title}</span>
                        </div>
                        <div className="card-content">
                        <p>{this.state.movie.overview}</p>
                        </div>
                        <div className="card-action">
                        Released Date: {this.state.movie.release_date}
                        </div>
                    </div>
                    </div>
                </div>     
            </div>
        )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(MovieDetails)
