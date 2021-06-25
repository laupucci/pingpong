import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { St } from "./style";
import { changeWins, getMatchById, editMatch } from "../../redux/actions/match";

export default function MyMatch({ match }) {
  const { matchId } = match.params;
  const dispatch = useDispatch();
  //const user = useSelector(({ users }) => users.user);
  const theMatch = useSelector(({ matches }) => matches.match);
  useEffect(() => {
    dispatch(getMatchById(matchId));
    // eslint-disable-next-line
  }, [dispatch]);

  const handleWin = (points, userId) => {
    const newPoint = points + 1;
    dispatch(changeWins(newPoint, userId, matchId));
    

  };

  const handleClick = () => {
    const winDif = (theMatch?.users[0]?.UserPoints.points -theMatch?.users[1]?.UserPoints.points > 0) ? theMatch?.users[0]?.UserPoints.points - theMatch?.users[1]?.UserPoints.points : (theMatch?.users[0]?.UserPoints.points - theMatch?.users[1]?.UserPoints.points) < 0 ? theMatch?.users[1]?.UserPoints.points - theMatch?.users[0]?.UserPoints.points : null;
    const winner = theMatch?.users[0]?.UserPoints.points - theMatch?.users[1]?.UserPoints.points > 0 ? theMatch?.users[0]
    : theMatch?.users[0]?.UserPoints.points - theMatch?.users[1]?.UserPoints.points < 0 ? theMatch?.users[1]
    : null;
    const looser = theMatch?.users[0]?.UserPoints.points - theMatch?.users[1]?.UserPoints.points > 0 ? theMatch?.users[1]
    : theMatch?.users[0]?.UserPoints.points - theMatch?.users[1]?.UserPoints.points < 0 ? theMatch?.users[0]
    : null;
    const tie = (!winner && !looser) ? true : false;
    const input = {
      userOneId: theMatch?.users[0]?.id,
      pointsOne: theMatch?.users[0]?.UserPoints.points,
      userTwoId: theMatch?.users[1]?.id,
      pointsTwo: theMatch?.users[1]?.UserPoints.points,
      winDifference: winDif,
      winner_id: winner?.id ? winner?.id : null,
      looser_id: looser?.id ? looser?.id : null,
      tie: tie,
    };
    dispatch(editMatch(input, matchId));
  };

  if (theMatch)
    return (
      <St>
        <div key={theMatch?.matchId}>
          {theMatch?.users?.map((user) => {
            return (
              <div key={user?.id}>
                <div className="player">
                  <h3>{user?.name}</h3>
                  <button
                    onClick={() => handleWin(user?.UserPoints?.points, user.id)}
                  >
                    Add win
                  </button>
                </div>
                <h3>Wins: {user?.UserPoints?.points}</h3>
              </div>
            );
          })}
        {theMatch?.users ? (
        theMatch?.users[0]?.UserPoints.points -
        theMatch?.users[1]?.UserPoints.points >
        0
        ? 
        <div>
        <h3>Current winner: {theMatch?.users[0]?.name}</h3>
        <h3>Win Difference: {theMatch?.users[0]?.UserPoints.points -
        theMatch?.users[1]?.UserPoints.points}</h3>
      </div>
      : 
        theMatch?.users[0]?.UserPoints.points -
            theMatch?.users[1]?.UserPoints.points <
          0
        ?  
        <div>
        <h3>Current winner: {theMatch?.users[1]?.name}</h3>
        <h3>Win Difference: {theMatch?.users[1]?.UserPoints.points -
        theMatch?.users[0]?.UserPoints.points}</h3>
      </div>
      : (
            <></>
          )) : <></>}
          <button onClick={handleClick}>Finish</button>
        </div>
      </St>
    );
}
