import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'

const MovieCards = ({movies}) => {
    //console.log(movies)
    return ( 
        <div className='container'>
          <div className='row'>
              <div className='col s12'>
                {movies.map(movie => {
                    return (
                      <Link to={'/movie/' + movie.id} key={movie.id}>
                        <Movie key={movie.id} image={movie.poster_path} title={movie.title} />
                      </Link>
                      )
                })}
              </div>
          </div>
        </div>
    )
}

export default MovieCards