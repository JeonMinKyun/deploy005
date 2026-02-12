import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect (() =>{
    fetch(" https://fd6b-1-11-163-250.ngrok-free.app/",{
		headers: {
		    "ngrok-skip-browser-warning": "69420" // 이 헤더가 있으면 ngrok 경고창을 건너뜁니다.
		  }
	})
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
