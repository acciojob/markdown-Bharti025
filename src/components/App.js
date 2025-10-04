import React,{useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown';
import '../styles/App.css'
const App = () => {
    const [text,setText]=useState("");
    const [preview,setPreview]=useState("");
    
    const handleChange=(e)=>{
        setText(e.target.value);
    }
   useEffect(()=>{
     setPreview(text);
   },[text]);

  return (
    <div className='app'>
    <div className='input'>
     <textarea className='textarea' onChange={handleChange}></textarea>
    </div>
    <div className='preview'>
      <ReactMarkdown>
        {preview}
      </ReactMarkdown>
    </div>
    </div>
  )
}

export default App





