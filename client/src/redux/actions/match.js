import axios from "axios";

export function loading() {
  return { type: "MATCH_STATUS_LOADING" };
}
export function failed() {
  return { type: "MATCH_STATUS_FAILED" };
}

export function createMatch(input){
  return async (dispatch) => {
    dispatch(loading());
  try{
   const {data} = await axios.post(`match/newMatch`, input)
   console.log(data)
   if (data){
    dispatch({ type: "GET_MATCH", payload: data });
   }
  } catch (err){
    dispatch(failed());
    console.log(err);
  }
}
}


export function editMatch(input, matchId){
  return async (dispatch) => {
    dispatch(loading());
  try{
   const {data} = await axios.put(`match/${matchId}`, input)
   console.log(data)
   if (data){
    dispatch({ type: "GET_MATCH", payload: data });
   }
  } catch (err){
    dispatch(failed());
    console.log(err);
  }
}
}


export function getMatchById(matchId){
  return async (dispatch) => {
    dispatch(loading());
  try{
   const {data} = await axios.get(`match/${matchId}`)
   console.log(data)
   if (data){
    dispatch({ type: "GET_MATCH", payload: data });
   }
  } catch (err){
    dispatch(failed());
    console.log(err);
  }
}
}


export function getAllMatches(){
  return async (dispatch) => {
    dispatch(loading());
  try{
    const { data } = await axios.get(`match/all`)
    if (data){
     dispatch({ type: "ALL_MATCHES", payload: data });
    }
  } catch (err){
    dispatch(failed());
    console.log(err);
  }
}
}


export function getAllMatchesByUser(userId){
  return async (dispatch) => {
    dispatch(loading());
  try{
   const {data} = await axios.get(`users/${userId}/matches`)
   console.log(data)
   if (data){
    dispatch({ type: "ALL_MATCHES_BY_USER", payload: data });
   }
  } catch (err){
    dispatch(failed());
    console.log(err);
  }
}
}

export function changeWins(points, userId, matchId) {
  return async (dispatch) => {
    try {
      const user = {
        userId,
        points
      };
      const { data } = await axios.put(`match/points/${matchId}`, user)
      dispatch({ type: "GET_MATCH", payload: data });
    } catch (err) {
      dispatch(failed());
      console.log(err);
    }
  };
}