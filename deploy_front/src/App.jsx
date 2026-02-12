import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect (() =>{
    fetch("/api")
    .then((response => response.text()))
    .then(data =>{
      setMessage(data)
    })
    .catch((error)=>{
      console.log("에러발생:"+error );
    },[])
  }
)
  return (
    <>
      <div style={{padding:'40px', alignContent:'center'}}>
        <h3>Spring Boot 서버 응답 결과</h3>
        <h4>{message}</h4>
      </div>
    </>
  )
}

export default App
