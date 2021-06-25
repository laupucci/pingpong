import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style";
import { GiPingPongBat } from "react-icons/gi"

export default function Nav() {
  const user = useSelector(({ users }) => users.user);


  return (
    <St>
      <ul>
        <Link to='/home'>
          <GiPingPongBat style={{width: '3vw', height: '3vw'}}/>
        </Link>
      </ul>

      <ul className="right">
        {user ? (
          <>
            <Link to={`/matches/${user.id}`}>
              <li
                className={
                  window.location.pathname === `/matches/${user.id}`
                    ? "active"
                    : "btn"
                }
              >
                My Matches
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link to='/allMatches'>
              <li
                className={
                  window.location.pathname == `/allMatches` ? "active" : "btn"
                }
              >
                All Matches
              </li>
            </Link>
            <Link to='/login'>
              <li
                className={
                  window.location.pathname === `/login` ? "active" : "btn"
                }
              >
                Log In
              </li>
            </Link>
            <Link to='/signup'>
              <li
                className={
                  window.location.pathname === `/signup` ? "active" : "btn"
                }
              >
                Sign Up
              </li>
            </Link>
          </>
        )}
      </ul>
    </St>
  );
}
