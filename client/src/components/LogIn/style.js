import styled from 'styled-components';


export const St = styled.div`
margin-top: 7%;
height: 76vh;
display: flex;
justify-content: center;
.container{
  margin-top: 5%;
  min-height: 36vh;
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
  margin-right: 15px;
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