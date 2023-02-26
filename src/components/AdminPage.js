import { useEffect, useState } from "react";
import { getItemFromStorage, removeItemFromStorage } from "../utils/storage";
import constants from "../utils/constants";
// import LogoutButton from "./LogoutButton";
import "./AdminPage.css";

const AdminPage = ({ setUser, setLoggedIn }) => {
  const [users, setUsers] = useState([]);
  const logoutHandler = () => {
    removeItemFromStorage({ key: constants.TOKEN });
    removeItemFromStorage({ key: constants.USER_ID });
    setUser(null);
    setLoggedIn(null);
  };

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
    <div className="admin-body">
      <table className="table-content">
        <thead>
          <tr className="tabble-headers">
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Image</th>
            <button onClick={logoutHandler}>Logout</button>
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
