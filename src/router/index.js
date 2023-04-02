import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import constants from "../utils/constants";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import AdminPage from "../components/AdminPage";

export default function router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={constants.routes.HOME} replace />}
      />
      <Route path={constants.routes.LOGIN} element={<Login />} />
      <Route path={constants.routes.HOME} element={<UserProfile />} />
      <Route path={constants.routes.DASHBOARD} element={<AdminPage />} />
    </Routes>
  );
}
