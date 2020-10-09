import React,{useState}from 'react';
import './App.css';
import Form from './components/Form/Form'
import Render from './components/Render/Render'
import Img from './img/logo.png'

function App() {
  const [slide,setSlide]=useState(false)
  return (
    <div className="App">
      <div className='text'>
        <p >Alumni Tapak Suci Mu'allimin</p>
      </div>
      <img src={Img} style={{height:100,width:70}} onClick={()=>setSlide(!slide)}/>
     <div>
       {!slide && <Form/>}
       {slide && <Render/>}
     </div>
    </div>
  );
}

export default App;
