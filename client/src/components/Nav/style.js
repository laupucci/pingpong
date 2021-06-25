import styled from 'styled-components';


export const St = styled.div`
position: fixed;
top: 0;
width: 100vw;
height: 8vh;
background-color: #D2D2D2;
display: flex;
justify-content: space-between;
align-items: center;

.active {
  background-color: #1779ba;
  color: #e6e6e6;
  border-radius: 2px
}

.right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style:none;
  width: 36vw;
  margin-right: 3%;
}
a{
color: #1779ba;
text-decoration: none;
}
li{
color: #1779ba;
text-decoration: none;
width: 10vw;
justify-content: center;
height: 4vh;
padding: 1%;
list-style: none
}
`