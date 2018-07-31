import React from 'react'

const ParkShowTile = props => {
  let descriptionDiv;
  if (props.description != "" && props.description != null) {
    descriptionDiv = <p>Description: {props.description}</p>
  }

  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.address}, {props.city}, {props.state}, {props.zipcode}.</p>
      <p>Phone Number: {props.phone_number}</p>
      <p>Operating Season: {props.operating_season}</p>
      <p>Website: <a href={props.website}>{props.website}</a></p>
      {descriptionDiv}
    </div>
  )
}

export default ParkShowTile
