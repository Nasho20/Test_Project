import React, { useEffect, useState } from "react";
import "../styles/UserProfile.css";
import constants from "../utils/constants";
import { removeItemFromStorage } from "../utils/storage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserProfile = ({ user, setUser, setLoggedIn, setAdminEditingUser }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const isAdmin = setAdminEditingUser;
  // const [loading, setLoading] = useState(false);

  const logoutHandler = () => {
    removeItemFromStorage({ key: constants.TOKEN });
    removeItemFromStorage({ key: constants.USER_ID });
    setUser(null);
    setLoggedIn(null);
  };

  useEffect(() => {
    if (isAdmin) {
      setAdminEditingUser(true);
    }
  }, []);

  const handleUpdate = () => {
    fetch(`https://apingweb.com/api/user/edit/${user.user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        name,
        age,
        // image:
        // "https://www.google.al/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASuperman_Clipart.svg&psig=AOvVaw1Vbpi1GI03t98VBv-r8Afj&ust=1677700128905000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLil3JX-uP0CFQAAAAAdAAAAABAI",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          if (isAdmin) {
            removeItemFromStorage({ key: constants.EDIT_USER_ID });
            setAdminEditingUser(false);
            setUser(null);
          } else {
            setUser((prev) => ({
              ...prev,
              age,
              name,
            }));
          }
          // setLoading(false);
        }
      })
      .finally(() => {
        //setLoading(false);
      });
  };

  return (
    <div class="bg_image_2">
      <form class="logged-in-form">
        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                {/* <<img
                  class="avatar_image"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: "50%" }}
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                /> */}
                <div>
                  <AccountCircleIcon
                    class="avatar_image"
                    width="150px"
                    height="150px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <span class="font-weight-bold"></span>
                <span class="text-black-50">{user.email}</span>
                {setLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                <span> </span>
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name: </label>
                    <input
                      type="text"
                      class="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Age: </label>
                  <input
                    type="text"
                    class="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div class="mt-5 text-center">
                  <button
                    class="btn btn-primary profile-button"
                    type="button"
                    onClick={handleUpdate}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
