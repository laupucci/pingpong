import styled from 'styled-components';


export const St = styled.div`
margin-top: 7%;
margin-bottom: 4%;
min-height: 76vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 3%;
justify-content: center;
align-items: center;

.container{
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100%;
border: solid 1px #1779ba;
margin: 0 2%;
}
.users{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.usersUl{
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

}
li{
  margin: 0 2%
}

ul{
  list-style: none;
}
`