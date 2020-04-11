import  React  from 'react';
import  styled from 'styled-components';
import Group4 from './assets/Group4.svg';


const Header = styled.header`
position:relative;
background-color: #FFEC4E;
width: 100vw;
height:13vh;
display:flex;
justify-content: space-between;
@media(max-width:900px){
    height: 9.5vh;
}
img{
    width:4.5em;
    height:4.5em;
    margin-left: 2.6em;
    display:flex;
    
}
@media(max-width:1087px){
    img{
        width:3.5em;
        height:3.5em;
        margin-left: 1.5em;
        margin-top:0.2em; 
    }
}

p{
font-size:2.5rem;
justify-content:center;
align-items:center;
text-align:center;
font-weight: 700;
font-family: 'Nunito', sans-serif;
color: #442851;
padding-top:0.7em;
margin-left:-4.5em;
}
@media(max-width:898px){
    p{
        padding-top: 1.2em;
        margin-left: -4em;
    }
}
@media(max-width:700px){
    p{
        padding-top: 1.2em;
        margin-left: -4em;
    }
}
@media(max-width:315px){
    p{
        padding-top: 1.5em;
        margin-left: -4em;
    }
}
`;


export default function header(){
    return(
        <Header>
            <img src={Group4} alt="logo"/>

            <p>
              POSTO  NANTES
            </p>

            <br/>
        </Header>
        
    );
}




