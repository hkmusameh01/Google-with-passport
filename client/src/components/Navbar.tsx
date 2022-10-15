import React from "react";
import { Link } from "react-router-dom";

type IPhotos = {
  value: string;
};

type IName = {
  familyName: string;
  givenName: string;
};

export type IUser = {
  id: number;
  name: IName;
  photos: IPhotos[];
};

const Navbar = ({ user }: { user: IUser | null }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link " to="/">
          oAuth
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              // src={user?.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Hakim</li>
          <li className="listItem" onClick={logout}>
            logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
