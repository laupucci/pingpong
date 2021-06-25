import styled from 'styled-components';


export const St = styled.div`
margin-top: 7%;
height: 76vh;
display: flex;
justify-content: center;
margin-bottom: 1.2%;
.container{
  display: flex;
  flex-direction: column;
  min-height: 57vh;
  width: 55vw;
  justify-content: center;
  align-items: center;
}
.inp{
  min-height: 18vh;
  display: flex;
  flex-direction: column;
  font-size: 28px;
}
input{
  height: 7vh;
  width: 35vw;
  border: solid 1px #1779ba;
  padding: 1%;
}
.btn{
  background-color: #1779ba;
  cursor: pointer;
  color: #D2D2D2;
  border: none;
  border-radius: 2px;
  height: 10vh;
  min-width: 20vw;
}

.errorForm{
  color: red;
  font-size: 12px;
  }
`