
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import React  from 'react';



function App() {
// React.useEffect(() => {
//   document.getElementsByTagName('iframe').style.width='0';

// });


  return (
    <div className="divbody" style={{width:"100vw",overflow:"hidden"}}>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
