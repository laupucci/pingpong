import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { St } from "./style";
import { createMatch } from "../../redux/actions/match";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useSelector(({ matches }) => matches.match);
  const [touched, setTouched] = useState({
    userOneEmail: false,
    userTwoEmail: false,
  });
  const [input, setInput] = useState({
    userOneEmail: "",
    userTwoEmail: "",
  });
  let re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    useEffect(() => {
      if (match?.id) {
       history.push(`/${match.id}`);
      }
      // eslint-disable-next-line
    }, [match]);
  


  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleTouched = function (e) {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    if (
      input.userOneEmail.length > 4 &&
      re.test(input.userOneEmail) &&
      input.userTwoEmail.length > 4 &&
      re.test(input.userTwoEmail)
    ) {
      dispatch(createMatch(input));
    } else {
      alert("Error: no has ingresado los datos correctamente.");
    }
  };

  return (
    <St>
      <form onSubmit={handleSubmit}>
        <div className="container">
        <label>PLAYER 1 EMAIL</label>
        <input
          type="email"
          name="userOneEmail"
          onChange={handleOnChange}
          onClick={handleTouched}
          placeholder="Player 1 email"
        />
        {touched.userOneEmail && !re.test(input.userOneEmail) ? (
          <p className="errorForm">You must use an email</p>
        ) : (
          <></>
        )}
        <label>PLAYER 2 EMAIL</label>
        <input
          type="email"
          name="userTwoEmail"
          onChange={handleOnChange}
          onClick={handleTouched}
          placeholder="Player 2 email"
        />
        {touched.userTwoEmail && !re.test(input.userTwoEmail) ? (
          <p className="errorForm">You must use an email</p>
        ) : (
          <></>
        )}
        <button className="btn">Continue</button>
        </div>
      </form>
    </St>
  );
}
