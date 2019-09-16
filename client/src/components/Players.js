import React from 'react';

import PlayerCard from './PlayerCard';

export default function Players(props) {
  return (
    <div className='players'>
        {/*mapping ofer the data and putting it into my playercard component with a key*/}
      {props.data.map(player => (
        <PlayerCard key={player.id} data={player} />
      ))}
    </div>
  );
}