import styled from 'styled-components';


export const St = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7%;
min-height: 79vh;
display: flex;
flex-direction: column;

.container{
  display: flex;
  background-color: #D2D2D2;
flex-direction: column;
height: 70vh;
border: solid 1px #D2D2D2;
width: 50vw;
justify-content: space-around;
align-items: center;
border-radius:  4px;
padding: 2%;
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
  min-width: 10vw;
}
.errorForm{
  color: red;
  }
`