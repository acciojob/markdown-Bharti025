import React,{useState,useEffect} from 'react'
import '../styles/App.css'
const App = () => {
    const [text,setText]=useState("");
    const handleChange=(e)=>{
        setText(e.target.value);
    }
   useEffect(()=>{
    let output= document.getElementsByClassName("preview");
    output[0].innerHTML=<h1>{text}</h1>;
   },[text]);

  return (
    <div className='app'>
    <div className='input'>
     <textarea className='textarea' onChange={handleChange}></textarea>
    </div>
    <div className='preview'></div>
    </div>
  )
}

export default App





