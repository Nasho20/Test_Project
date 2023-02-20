import { useEffect, useState } from "react";
import { getItemFromStorage } from "../utils/storage";
import constants from "../utils/constants";
import LogoutButton from "./LogoutButton";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = getItemFromStorage({
      key: constants.TOKEN,
    });
    fetch("https://apingweb.com/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        if (data.success === true) {
          setUsers(data.data);
        }
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Image</th>
            <button onSubmit={LogoutButton}>Logout</button>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => {
              return (
                <tr key={index.user_id}>
                  <ol>
                    <td>{item.name}</td>
                  </ol>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>
                    <div>
                      <img alt="user-photo" src={users.image} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
