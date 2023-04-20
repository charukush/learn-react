import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello World!!
//     </div>
//   );
// }
type CarParams = {
  color: string
}
function Car(props:CarParams){
  return(
    <h2>This is a {props.color} Car function.</h2>
  )
}

export default Car;
