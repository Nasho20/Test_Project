import { useEffect, useState } from "react";
import {
  getItemFromStorage,
  setItemOnStorage,
  removeItemFromStorage,
} from "../utils/storage";
import constants from "../utils/constants";
import "../styles/AdminPage.css";
import UserProfile from "./UserProfile";

const AdminPage = ({ setUser, setLoggedIn }) => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [editing, setEditing] = useState(false);

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
    const singleUserId = getItemFromStorage({
      key: constants.EDIT_USER_ID,
    });
    if (singleUserId) {
      fetch(`https://apingweb.com/api/user/${singleUserId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log({ data });
          if (data.success === true) {
            setUserDetails(data.data[0]);
          }
        });
    }
    fetch("https://apingweb.com/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setUsers(data.data);
        }
      });
  }, [editing]);

  const showUserDetails = (user) => {
    setUserDetails(user);
    setEditing(true);
    setItemOnStorage({ key: constants.EDIT_USER_ID, value: user.user_id });
  };

  if (userDetails) {
    return (
      <UserProfile
        user={userDetails}
        setUser={setUserDetails}
        setAdminEditingUser={setEditing}
      />
    );
  }

  return (
    <div className="admin-body">
      <table className="table-content">
        <thead>
          <tr className="tabble-headers">
            <th>Email</th>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item) => {
              return (
                <tr key={item.user_id}>
                  <td
                    className="table-cell user-email"
                    onClick={() => showUserDetails(item)}
                  >
                    {item.email}
                  </td>
                  <td className="table-cell">{item.name}</td>
                  <td className="table-cell">{item.age}</td>
                  <td className="table-cell">
                    <div>
                      <img alt="user-photo" src={users.image} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPage;
