import React, { useEffect, useState } from "react";
import "../styles/UserProfile.css";
import constants from "../utils/constants";
import { removeItemFromStorage } from "../utils/storage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action-creators/auth-actions";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.auth.user;
  });

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [adminEditingUser, setAdminEditingUser] = useState(false);
  const isAdmin = false;

  const logoutHandler = () => {
    dispatch(logout());
    navigate(constants.routes.LOGIN);
  };

  useEffect(() => {
    if (isAdmin) {
      setAdminEditingUser(true);
    }
  }, []);

  const handleUpdate = () => {};

  return (
    <div className="bg_image_2">
      <form className="logged-in-form">
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <div>
                  <AccountCircleIcon
                    className="avatar_image"
                    width="150px"
                    height="150px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <span className="font-weight-bold"></span>
                <span className="text-black-50">{user.email}</span>
                <button onClick={logoutHandler}>Logout</button>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name: </label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="labels">Age: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
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
