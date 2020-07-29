import React from 'react'

const Searchbar = (props) => {
    return(
        <div className='container'>
          <div className='row'>
            <div className='col s4 offset-s4'>
              <form onSubmit={props.handleSubmit}>
                <div className='input-field'>
                  <input placeholder='Choose Movie' type='text' onChange={props.handleChange} />
                </div>
                <button style={{ marginLeft: '77px' }} className="btn waves-effect waves-light" type="submit" name="action">Search</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Searchbar