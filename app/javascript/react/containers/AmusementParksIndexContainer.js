import React from 'react'
import ParkTile from '../components/ParkTile'

class AmusementParksIndexContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      amusementParks: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/amusement_parks')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errrorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errrorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(resp => {
      this.setState({
        amusementParks: resp.amusement_parks
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){
    let amusementParks = this.state.amusementParks.map((park) => {
      return(
        <ParkTile
          key={park.id}
          name={park.name}
        />
      )
    })

    return(
      <div>
        <h1>Amusement Parks:</h1>

        {amusementParks}
      </div>
    )
  }
}

export default AmusementParksIndexContainer;