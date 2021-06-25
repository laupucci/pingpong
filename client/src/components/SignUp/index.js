import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style"
import { setCreated, signUp } from "../../redux/actions/user";
import { useHistory } from "react-router-dom";


export default function SignUp(){
  const dispatch = useDispatch();
  const status = useSelector(({ users }) => users.status);
  const created = useSelector(({users}) => users.created)
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  
  const handleChange = (e) => {
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

useEffect(() => {
  if(created){
    dispatch(setCreated())
    history.push('/login')
  }
  
}, [created])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.password.length >= 6 &&
      input.email.length > 4 &&
      re.test(input.email) &&
      input.name.length > 2 ){
      dispatch(signUp(input))
    }
    else { alert('You must complete all the inputs') }
   }

  
    if (status === 'loading') return <div>Loading</div>;

   return (
    <St>
    <form onSubmit={handleSubmit}>
    <div className='container'>
    <div className='inp'>
            <label>
              Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onClick={handleTouched}
                placeholder="name"
              />
              {touched.name && input.name.length < 2 ? (
                <p className="errorForm" style={{color:'red'}}>You must enter your Name</p>
              ) : (
                <></>
              )}
          </div>
          <div className='inp'>
            <label>
              Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onClick={handleTouched}
                placeholder="email"
              />
              {touched.email && !re.test(input.email) ? (
                <p className="errorForm" >You must enter a valid email</p>
              ) : (
                <></>
              )}
          </div>
          <div className='inp'>
            <label>
              Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onClick={handleTouched}
                placeholder="password"
              />
                {touched.password && input.password.length < 6 ? (
                <p className="errorForm">You must enter a password of at least 6 characters</p>
              ) : (
                <></>
              )}
          </div>
      <button className="btn">Sign Up</button>
          </div>
    </form>
    </St>
  );
}