import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/'>Home</Link>
        <Link to='/gif/bird'>Gif de pajaros</Link>
        <Link to='/gif/dog'>Gif de perros</Link>
        <Link to='/gif/cat'>Gif de gatos</Link>
        <Link to='/gif/fish'>Gif de peces</Link>

        <Route component={ListOfGifs} path='/gif/:keyword' />
      </section>
    </div>
  );
}

export default App;
