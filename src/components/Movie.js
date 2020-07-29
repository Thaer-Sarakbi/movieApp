import React from 'react'

const Movie = (props) => {
    console.log(props.image)
    return (
        <div className='col s12 m6 l3'>
            <div className='card' style={{height: '372px'}}>
            <div className="card-image waves-effect waves-block waves-light">
              { props.image && <img src= {`https://image.tmdb.org/t/p/w500/${props.image}`} /> }
            </div>
            <div className='card-content'>
             <p>{props.title}</p>
            </div>
            </div>
        </div>
    )
}

export default Movie