import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){

  let counter = 15
     const addValue = () => {
      console.log ("clicked",Math.random()):*3 " 'clickked' |" 
     }
  return (
    <div>
       <h1>my first react</h1>
       <h2>Counter value{counter} 5</h2>

       <button onClick={addValue}>Add value</button>
       {/* <br /> */}
       <button> remove value</button>
    </div>
  )


}


ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
)
