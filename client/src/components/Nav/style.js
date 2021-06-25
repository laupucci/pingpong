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
  justify-content: space-between;
  align-items: center;
  list-style:none;
  width: 36vw;
}
a{
text-decoration: none;
width: 10vw;
justify-content: center;
height: 4vh;
}
`