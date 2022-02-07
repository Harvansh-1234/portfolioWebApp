
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import React  from 'react';



function App() {
React.useEffect(() => {
  
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500)
  })
});


  return (
    <div className="divbody" style={{width:"100vw",overflow:"hidden"}}>
      <NavBar/>
      <Home/>
      <div class="cursor"></div>
    </div>
  );
}

export default App;
