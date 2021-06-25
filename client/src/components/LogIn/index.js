import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style"
import { logIn } from "../../redux/actions/user";


export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    
    // eslint-disable-next-line
  }, [user]);

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
    if(input.password.length >= 6 &&
      input.email.length > 4 &&
      re.test(input.email)){
      dispatch(logIn(input))
  }
    else{ 
      alert('Error: no has ingresado los datos correctamente.')
    }
  };


  if (user) {
    return (
      <div>
        <h3>Hello {user?.nombre} !</h3>
      </div>
    );
  } else
    return (
      <St>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    onClick={handleTouched}
                    placeholder="email"
                  />
                  {touched.email && !re.test(input.email) ? (
                <p className="errorForm" >You must put your email</p>
              ) : (
                <></>
              )}
                </label>
              </div>
              <div >
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    onClick={handleTouched}
                    placeholder="password"
                  />
                  {touched.password && input.password.length < 6 ? (
                    <p className="errorForm">You must put your password</p>
                    ) : (
                      <></>
                      )}
                </label>
              </div>
            </div>
                      <button type="submit" className="btn">Log In</button>
        </form>
      </St>
    );
}