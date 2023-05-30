import React from "react";
import Cabecera from "../../components/header/Cabecera.jsx";
import "../../style/UserTable.css";

const UserTable = () => {
  const userList = [
    { email: "sergio@gmail.com", typeAccount: "Admin" },
    { email: "lilly@gmail.com", typeAccount: "Regular user" },
    { email: "alberto@gmail.com", typeAccount: "Regular user" },
  ];

  return (
    <div className="container-table-users">
      <Cabecera direcion={"/admin/tables/users"} />
      <h3 className="tittle-table-users">Users</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Type Account</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.typeAccount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
