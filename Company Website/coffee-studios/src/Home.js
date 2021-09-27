import React from 'react';
import NavBar from './Modules/NavBar';

function App() {
  return (
    <div> 
      <NavBar list={['Home', 'page1', 'page2']} />
    </div>
  );
}

export default App;
