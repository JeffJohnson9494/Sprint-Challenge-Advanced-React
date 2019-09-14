import React from 'react';
import { Card, Feed } from 'semantic-ui-react'



const PlayerCard = (props) => (
//using semantic ui to speed things up but this might have tripped me up because as of now NOTHING IS DISPLAYING it doesnt even seem to be getting the data correctly so idk

    <Card>
     <Card.Content>
     <h1>{props.players.name}</h1>
      </Card.Content>
      <Card.Content>
      
        <Feed>
          <Feed.Event>
           Searches:<h4>{props.players.searches}</h4>   
            <Feed.Content>
              
              <Feed.Summary>
              
             
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          Country: <h2>{props.players.country}</h2>
        </Feed>
      </Card.Content>
    </Card>
  )
  
  export default PlayerCard;