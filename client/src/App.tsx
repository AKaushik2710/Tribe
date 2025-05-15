import { useState } from 'react'
import { Route } from 'react-router'
import './App.css'
import Login from './pages/Login';
import Button from './Components/Button';
import Input from './Components/Input';

function App() {
  const [count, setCount] = useState(undefined)

  function handleChange(event : React.ChangeEvent<HTMLInputElement>){
    setCount((event.target as HTMLInputElement).value);
  }
  function handleClick(event : React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    console.log(count);}
  return (
    <>
    <Login />
    {/* <Input name="user" holder="Enter Username" type="text" cn="form-input" onChange={handleChange} />
    <Button cn='btn' onClk={handleClick}>{count}</Button> */}
    </>
  )
}

export default App
