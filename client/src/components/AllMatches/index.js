import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style";
import { getAllMatches } from "../../redux/actions/match";

export default function AllMatches() {
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);
  const matches = useSelector(({ matches }) => matches.matches);
  console.log(matches, "soy matches");

  useEffect(() => {
    dispatch(getAllMatches());
    // eslint-disable-next-line
  }, [dispatch]);

  if (!matches || matches.length === 0)
    return (
      <St>
        <p>"There are not matches yet"</p>
      </St>
    );

  if (matches && matches.length > 0)
    return (
      <St>
        {matches?.map((match) => {
          return (
            <div key={match?.id}>
              <h2>Number: {match?.id}</h2>
              <h3>Players</h3>
              <ul>
                {match?.users?.map((user) => {
                  return (
                    <div key={user?.id}>
                      <li>Name: {user?.name}</li>
                      <li>Email: {user?.email}</li>
                      <li>Points: {user?.UserPoints?.points}</li>
                      {user?.id === match?.winner_id ? <h3>Winner</h3> : <></>}
                      {user?.id === match?.looser_id ? <h3>Looser</h3> : <></>}
                    </div>
                  );
                })}
              </ul>
              <h3>WinDifference: {match?.winDifference}</h3>
            </div>
          );
        })}
      </St>
    );
}
