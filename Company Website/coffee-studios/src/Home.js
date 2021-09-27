import React from 'react';
import NavBar from './Modules/NavBar';

function App() {
  return (
    <div> 
      <NavBar list={['page2', 'page1', 'Home']} />
    </div>
  );
}

export default App;
