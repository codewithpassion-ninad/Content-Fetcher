import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

function App()
{
  const [users, setUsers] = useState([]);

  useEffect(() =>
  {
    axios
      .get("https://dummyjson.com/users")
      .then((response) =>
      {
        setUsers(response.data.users);
      })
      .catch((error) =>
      {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>
          (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={user.image} alt={user.firstName} className="image"/></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;