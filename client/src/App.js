import React from 'react';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends React.Component{
  // setting state i originally had this in a constructor
  state={
    data:[],
  }
  componentDidMount(){
    //fetching the data from the api and setting it to the state
    axios.get('http://localhost:5000/api/players')
    .then(res=>this.setState({data:res.data}))
    .catch(err=>console.log(err));
    
  }
  render(){
    return(
      
      <div>
        {console.log(this.state.data)}
        <div className="Nav">
          <Navbar/>
        </div>
        
        <div className="Cards">
        {this.state.data.map(player =>
          <PlayerCard key={player.id} data={player} />)}
        </div>
      </div>
    )
  }
};


export default App;
