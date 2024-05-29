import React from 'react';
import './App.css';

import Header from './components/Header'
import HorizontalGrid from './components/HorizontalGrid'

export const tabs = [
  { label: 'About', contentId: 'about' },
  { label: 'Projects', contentId: 'projects' },
];


export const hometab = { label: 'Home', contentId: 'home' };


const App: React.FC = () => {
  return (
    <div className="App">
      <Header tabs={tabs} headerTab={hometab} />
      <div id="home" className="section home">
        <h2 className='title'>Home</h2>
        <span>This is the content of Section 1.</span>
      </div>
      <div id="about" className="section about">
        <div>
          <h2 className='title'>About</h2>
        </div>
        <div>
          <span>This is the content of Section 2.</span>
        </div>
      </div>
      <div id="projects" className="section projects">
        <h2 className='title'>Projects</h2>
        <HorizontalGrid numberOfSquares={5} />
      </div>
    </div>
  );
};

export default App;
