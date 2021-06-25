import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./matchesStyle"


export default function Matches(){
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);


  return(
    <></>
  )
}