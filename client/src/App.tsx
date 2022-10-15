import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";

import { IUser } from "./components/Navbar";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/auth/login/success", {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("authentication has been failed!");
      })
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/post/:id"
          element={user ? <Post /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
