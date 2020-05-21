import  styled from 'styled-components';

export const Container = styled.div`
padding-bottom: 4em;
width:100vw;
`;

export const Combustivel = styled.div`
font-size: 2.6rem;
width:5.6em;
color:white;
margin-left:8%;
margin-top:2%;
@media(max-width:500px){
  margin-top:4%;
}
div{
  border-bottom: solid 1px #ffff;
  width:100%;
}
`
export const Title = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
justify-content:center;
align-items:center;
img{
  width:90%;
  max-width:980px;
  height:40vh;
  border-radius:1%;
  margin:auto;
  margin-top:4.5vh;
}

`;