import React from 'react';

function User({name, email, password, cash, addCash, amount, setAmount}) {
  return <div className="user" style={{border: "black solid 1px", margin: "10px", padding: "10px"}}>
  <div>name = {name}</div>
  <div>email = {email}</div>
  <div>password = {password}</div>
  <div>cash = {cash}</div>
  <input type="text" placeholder="Enter amount" onChange={(e)=>{setAmount(e.target.value)}}/>
  <button onClick={addCash} >edit</button>
  </div>;
}

export default User;
