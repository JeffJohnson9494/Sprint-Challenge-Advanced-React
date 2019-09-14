import React from 'react';


const PlayerCard=()=>{
    
   return(
     <h1>{props.players.name}</h1>
      
      
      <h1>{console.log("Players",props)}</h1>
        
           <div>Search:<h4>{props.players.searches}</h4></div>   
          
          
           <div>Country: <h2>{props.players.country}</h2></div>
   )  
}  
export default PlayerCard;