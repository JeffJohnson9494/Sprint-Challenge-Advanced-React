import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{render}from '@testing-library/react';
import Navbar from './components/Navbar';

//testing app render
test('App renders without crashing',async()=>{
  await render(<App/>)
})
//testing navbar render
test('Navbar renders without crashing',async()=>{
  await render(<Navbar/>);
})