import React from "react";
import "../css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reduxLogout } from "../store/authSlice";
import authService from "../appwrite/auth";

function Header() {
  const authStatus = useSelector((state) => state.auth.authorized);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //console.log("Header :: authStatus :: ", authStatus);

  const navMenu = [
    {
      name: "All Events",
      path: "/all-events",
      active: authStatus,
    },
    {
      name: "S'inscrire",
      path: "/register",
      active: !authStatus,
    },
    {
      name: "Se connecter",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Evènements",
      path: "/all-events",
      active: authStatus,
    },
  ];
  return (
    <div className="headerDiv">
      <ul>
        {navMenu.map(
          (menu) =>
            menu.active && (
              <li key={menu.name}>
                <button onClick={() => navigate(menu.path)}>{menu.name}</button>
              </li>
            )
        )}
        {authStatus && (
          <li>
            <button
              onClick={() => {
                authService.logout().then(dispatch(reduxLogout()));
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
