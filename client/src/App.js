import React from 'react';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    //should be setting the data into my state
    fetch('https://localhost:5000/api/players').then(res=>res.json()).then(names=>this.setState({data:names})).catch(err=>console.log('error'));
  }
  render(){
    return(
      <div>
        <div className="Nav">
          <Navbar/>
        </div>
        <div className="Cards">
        {/*mapping data into my playerCard*/}
          {this.state.data.map(players=><PlayerCard players={players}/>)}
        </div>
      </div>
    )
  }
};


export default App;
