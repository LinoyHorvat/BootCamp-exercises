import React from 'react';

function User({userId, cash, credit, addCash,amount, setAmount}) {
  return <div className="user" style={{border: "black solid 1px", margin: "10px", padding: "10px"}}>
  <div>userId = {userId}</div>
  <div>cash = {cash}</div>
  <div>credit = {credit}</div>
  <input type="text" placeholder="Enter amount" onChange={(e)=>{setAmount(e.target.value)}}/>
  <button onClick={addCash} >edit</button>
  </div>;
}

export default User;
