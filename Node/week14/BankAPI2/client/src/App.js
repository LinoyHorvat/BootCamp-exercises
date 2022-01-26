import React, { useState, useEffect } from 'react';
import myApi from './api/Api';
import User from './components/User';

function App() {
  const [newId, setNewId] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [amount, setAmount] = useState(0);

  // console.log(process.env.NODE_ENV);

  useEffect(()=>{
    getAllUsers();
  },[])


  const getAllUsers = async () => {
    const { data } = await myApi.get('/');
    setAllUsers(data);
  };

  const displayAllUsers = () =>{
    return allUsers.map((user,key) =>{
      return (
        <div key={key}>
        <User 
        name = {user.name} 
        password = {user.password}
        email = {user.email}
        cash={user.cash}
        addCash = {()=>addCash(user._id)}
        amount = {amount}
        setAmount = {setAmount}
        />
        </div>)
    })
  }

  const addCash = async (id) => {
    const { data } = await myApi.put(`/cash/${id}`,{amount:amount});
    getAllUsers();
  }

  const addNewUSer = async () => {
    const { data } = await myApi.post(`/`,{userId:newId});
    getAllUsers();
  }
  
  return (
    <div className='App'>
    <h1>Welcome to my Bank</h1>
    <input type="text" placeholder="Add new user id" onChange={(e)=>{setNewId(e.target.value)}}/>
    <button onClick={addNewUSer}>Submit</button>
    {allUsers && displayAllUsers()}
    </div>
  );
}

export default App;
