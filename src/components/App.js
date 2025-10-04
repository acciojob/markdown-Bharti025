import React,{useState,useEffect} from 'react'
import '../styles/App.css'
const App = () => {
    const [text,setText]=useState("");
    
    const handleChange=(e)=>{
        setText(e.target.value);
    }
   useEffect(()=>{
      document.querySelector('.preview h1').innerHTML=text;
   },[text]);

  return (
    <div className='app'>
    <div className='input'>
     <textarea className='textarea' onChange={handleChange}></textarea>
    </div>
    <div className='preview'>
        <h1>{text}</h1>
    </div>
    </div>
  )
}

export default App





