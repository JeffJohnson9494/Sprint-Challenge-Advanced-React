import React from 'react';

export default function PlayerCard(props) {
  return (
    <div className='Player-Card'>
        {/*this is where my data should be displaying but isnt im not entirely sure what or why is happening*/}
        <h3>{props.data.name}</h3>
        <p>{props.data.country}</p>
        <p>Google Searches: {props.data.searches}</p>
      
    </div>
  );
}