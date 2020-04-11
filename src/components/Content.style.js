import  styled from 'styled-components';

export const Container = styled.div`
padding-bottom: 4em;
width:100vw;
`;

export const Promoção = styled.div`
font-size: 2.6rem;
width:5.1em;
color:white;
margin-left:8%;
margin-top:2%;
@media(max-width:500px){
  margin-top:3.5%;
}
div{
  border-bottom: solid 1px #ccc;
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
background-color:white;
border-radius:1%;
margin-top: 7.5vh;
margin:auto;
margin-top:4.5vh;
:hover{
  box-shadow: 7px 7px  5px #442851 ;
}
}

`;