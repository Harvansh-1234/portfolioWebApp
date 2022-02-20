import React,{useEffect,useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import github from './github.svg';
import insta from './insta.svg';
import lin from './lin.svg';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Skills from './Components/Skills';
// import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Loader from './Components/Loader';





function App() {
const [loader, setloader] = useState(true)

  useEffect(() => {


if(!loader){
    const cursor = document.querySelector('.cursor');
    const sideDiv1 = document.querySelector('.sideDiv1');
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');

    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    })

    document.addEventListener('click', () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500)
    })
    sideDiv1.addEventListener('click', () => {
      if (sideDiv1.classList.value !== 'sideDiv sideDiv1 sideDiv1Rotate') {
        sideDiv1.classList.add("sideDiv1Rotate");
        div3.classList.add("side3");
        setTimeout(() => {
          div2.classList.add("side2");
        }, 350)
        setTimeout(() => {
          div1.classList.add("side1");
        }, 700)
      }
      else {
        sideDiv1.classList.remove("sideDiv1Rotate");
        div3.classList.remove("side3");
        div2.classList.remove("side2");
        div1.classList.remove("side1");
      }

    })
      window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById('sideDiv2').classList.add("rotate1");
       } else {
        document.getElementById('sideDiv2').classList.remove("rotate1");
       }
      });

  }
  setloader(false);
  });


  return (
    <>
    {loader ? <Loader /> :<div className="divbody" id='home' style={{ width: "100vw", overflow: "hidden" }} >
      <div className='Links'>
        <div className='sideDiv' id='div1'><a href='https://github.com/Harvansh-1234' target={'_blank'}><img src={github} alt="" /></a></div>
        <div className='sideDiv' id='div2'><a href='https://www.instagram.com/harvansh_rathore25/' target={'_blank'}><img src={insta} alt="" /></a></div>
        <div className='sideDiv' id='div3'><a href='https://www.linkedin.com/in/harvansh-s-rathore-225b1620a/' target={'_blank'}><img src={lin} alt="" /></a></div>
        <div className='sideDiv sideDiv1'>+</div>

      </div>
      <div>
        <a href="#home"><div  className='sideDiv2'><span id='sideDiv2'><span>&#x2770;</span></span></div></a>
      </div>
         
      <NavBar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
      <About />
      </section>
      <section id='timeline'>
      <Timeline />
      </section>
      <section id='skills'>
      <Skills />
      </section>
      {/* <section id='projects'>
      <Projects/>
      </section> */}
      <section id='contact'>
       <ContactForm/>
      </section>
       <Footer/>
      <div class="cursor"></div>
    </div>
    }</>
  );
}

export default App;
