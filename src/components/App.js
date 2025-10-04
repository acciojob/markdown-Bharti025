import React,{useState,useEffect} from 'react'
import '../styles/App.css'
const App = () => {
    const [text,setText]=useState("");
    
    const handleChange=(e)=>{
        setText(e.target.value);
    }
   useEffect(()=>{
     let output= document.getElementsByClassName('preview-title')[0];
     output.innerText=text;
   },[text]);

  return (
    <div className='app'>
    <div className='input'>
     <textarea className='textarea' onChange={handleChange}></textarea>
    </div>
    <div className='preview'>
        <h1 className='preview-title'></h1>
    </div>
    </div>
  )
}

export default App





