import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style"


export default function (){
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);


  return(
    <></>
  )
}