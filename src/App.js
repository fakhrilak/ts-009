import React,{useState}from 'react';
import './App.css';
import Form from './components/Form/Form'
import Render from './components/Render/Render'
import Img from './img/logo.png'
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  const [slide,setSlide]=useState(false)
  return (
    <Provider store={store}>
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
    </Provider>
    
  );
}

export default App;
