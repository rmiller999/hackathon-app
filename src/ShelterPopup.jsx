import React from 'react';

const ShelterPopup = (props) => {
  return(
    <div>
      <h6>{props.info.name}</h6>
			<h6>{props.info.address}</h6>
			<h6>{props.info.phone}</h6>
			<h6>{props.info.icon}</h6>
    </div>
  )
}

export default ShelterPopup;