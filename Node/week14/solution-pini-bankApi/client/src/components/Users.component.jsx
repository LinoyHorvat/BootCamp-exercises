import React from "react";
import api from "../api/api";

class Users extends React.Component {
  state = { name: "", passportId: "" };
  handleOnChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  handleCreate = async () => {
    const newUser = {
      name: this.state.name,
      passportId: this.state.passportId,
      cash: 0,
      credit: 0,
    };
    const user = await api.post("/users", newUser);
    console.log(user);
  };

  handleFindAll = async () => {
    const users = await api.get("/users");
    console.log(users.data);
  };
  handleFindOne = async () => {
    const user = await api.get("/users/60083c99a274f44caf5d7f4b");
    console.log(user.data);
  };
  handleDeleteAll = async () => {
    const result = await api.delete("/users");
    console.log(result);
  };
  handleDeleteOne = async () => {
    const result = await api.delete("/users/600835d0a274f44caf5d7f4a");
    console.log(result);
  };
  render() {
    return (
      <div>
        <h2>Users</h2>
        <div>Create User</div>
        <label>Name</label>
        <input
          onChange={this.handleOnChange}
          name="name"
          value={this.state.name}
          type="text"
        />
        <label>Passport Id</label>
        <input
          onChange={this.handleOnChange}
          name="passportId"
          value={this.state.passportId}
          type="text"
        />
        <button onClick={this.handleCreate}>submit</button>
        <div onClick={this.handleFindAll}>Find all users</div>
        <div onClick={this.handleFindOne}>Find one user</div>
        <div onClick={this.handleDeleteAll}>Delete all users</div>
        <div onClick={this.handleDeleteOne}>Delete One users</div>
      </div>
    );
  }
}

export default Users;
