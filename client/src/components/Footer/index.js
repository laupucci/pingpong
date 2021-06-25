import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style"
import { logOut } from "../../redux/actions/user"


export default function (){
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);
  const history = useHistory();
  const handleClick = () => {
    dispatch(logOut());
    history.push("/home");
  };

  return(
    <St>
    <div className="container">
      {!user ? <></>
        :
        <ul className="menu">
        <li className="">
          <button className="btn" onClick={handleClick}>
            Cerrar sesión
          </button>
        </li>
      </ul>
      }
    </div>
  </St>
  )
}
