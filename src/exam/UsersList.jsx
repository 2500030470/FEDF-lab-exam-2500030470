import React from "react";

const UsersList = () => {

  const users = [
    { id: 1, name: "Sai" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Pavana" }
  ];

  return (
    <div>
      <h2>Users List</h2>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

    </div>
  );
};

export default UsersList;