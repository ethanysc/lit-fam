import React from 'react'
import { Link } from 'react-router'

const NewAmusementParkLink = props => {
  return(
    <div>
      <br></br><br></br><br></br><br></br>
      <div className="new-park">
        <Link to='/amusement_parks/new' >
          <button className="button snip1582">
            Add New Amusement Park
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NewAmusementParkLink
