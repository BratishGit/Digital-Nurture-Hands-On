import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App(){
  return(
    <div>
      <h1>Student Management Portal</h1>
      <Home/>
      <About/>
      <Contact/>
    </div>

  );
}
export default App;