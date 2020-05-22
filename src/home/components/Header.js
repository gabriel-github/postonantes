import  React  from 'react';
import  styled from 'styled-components';
import postoqualquer from './assets/postoqualquer.png';
import Menutoggle from './Menu'


const Header = styled.header`
position:relative;
background-color: #fed51b;
width: 100vw;
height:13vh;
display:flex;
justify-content:space-between;
nav{
    display:none;
}
@media(max-width:500px){
    height: 9.5vh;
}
@media(max-height:580px){
    height: 12vh;
    img{
    width:1.5em;
    height:1.5em;
    margin-left: 2.6em;
    display:flex; 
}
}
img{
    width:4.5em;
    height:4.5em;
    margin-left: 2.6em;
    display:flex; 
}
@media(max-width:900px){
    img{
        width:3.5em;
        height:3.5em;
        margin-left: 1.5em;
        margin-top:0.2em; 
    }
}
@media(max-width:400px){
    img{
        width:2.5em;
        height:2.5em;
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
}
@media(max-width:898px){
    p{
        padding-top: 1.2em;
    }
}
@media(max-width:700px){
    p{
        padding-top: 1.2em;
    }
}
@media(max-width:315px){
    p{
        padding-top: 1.5em;
    }
}
.divInvisivel{
    margin-right: 1.8em;
    width: 3em;
    margin-top: 0.3em;
}
@media(max-width:898px){
    .divInvisivel{
        margin-right: 1.4em;
    }

}
@media(max-width:700px){
    .divInvisivel{
        margin-right: 1.6em;
    }
}
@media(max-width:345px){
    .divInvisivel{
        margin-right: 1em;
    }
}
.menu-toggle{
    margin-right: 3.5em;
    width: 3em;
    margin-top: 1.5em;
}
.menu-toggle .one , .two , .three{
    background-color:#fff;
    width: 100%;
    height: 5px;
    margin: 5px;

    transition-duration:0.3s;

}
.menu.on {
        position: absolute;
        top:0;
        right: 0;
        bottom:0;
        z-index:10;
        font-weight: 600;

        width:10vw;
        height:40vh;

        display:flex;
        justify-content:center;
        align-items:center;

        background-color:#fed51b;
        box-shadow: 5px 5px  3px #253237 ;

}
@media(max-width:898px){
    .menu.on{
        width:20vw;
        height:30vh;
    }
}
@media(max-width:700px){
    .menu.on{
        width:26vw;
        height:30vh;
    }
}
@media(max-width:315px){
    .menu.on{
        width:30vw;
        height:30vh;
    }

    }
    .menu.on nav {
        display: block;
    }
    .menu.on .menu-toggle{
        position:absolute;
        right:0;
        top :15px;
    }
    .menu.on .menu-toggle .one{
        transform: rotate(45deg) translate(7px,9px);
    }
    .menu.on .menu-toggle .two{
        opacity:0;
    }
    .menu.on .menu-toggle .three{
        transform: rotate(-45deg) translate(5px, -8.5px);
    }
    .menu.on .menu-celular{
        display:block;
        text-align:center;
    }

    .menu.on nav ul{
        margin-top:30px;
        color:#fff;
    }
    .menu.on nav ul a{
        transition-duration:5s;
        margin-top:30px;
        padding-right:80px;
        color:#fff;
        font: normal 1.5rem Arial;
        line-height: 3rem;
    }
@media(max-width:898px){
    .menu-toggle{
        width: 2.5em;
        margin-right: 3em;
        margin-top: 1em;

    }

}
@media(max-width:700px){
    .menu-toggle{
        width: 3em;
        margin-right: 2.5em;
        margin-top: 0.8em;
        
    }
}
@media(max-width:315px){
    .menu-toggle{
        margin-right: 1.5em;
        margin-top: 0.8em;
        
    }
}

`;


export default function header(){
    
    return(
        <>
        <Header>

            <img src={postoqualquer} alt="logo"/>
            <p>
              POSTO  NANTES
            </p>

            <Menutoggle>

            </Menutoggle>
        </Header>
        </>
        
    );
}




