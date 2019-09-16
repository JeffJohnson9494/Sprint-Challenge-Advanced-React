import React from 'react';
import Players from './components/Players';
import Navbar from './components/Navbar';

class App extends React.Component{
  // setting state i originally had this in a constructor
  state={
    data:[],
  }
  componentDidMount(){
    //fetching the data from the api and setting it to the state
    fetch('https://localhost:5000/api/players')
    .then(res=>res.json())
    .then(res=>this.setState({data:res}))
    .catch(err=>console.log(err));
  }
  render(){
    return(
      <div>
        <div className="Nav">
          <Navbar/>
        </div>
        <div className="Cards">
        {/*this was mapping data into my playerCard 
            now it is just dropping data down into my player component*/}
          <Players data={this.state.data}/>
        </div>
      </div>
    )
  }
};


export default App;
