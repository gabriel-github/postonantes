import React from 'react';
import styled from 'styled-components';
import Group from './assets/Group.png';
import {MdLocationOn} from "react-icons/md";



const Footer = styled.footer`
position: absolute;
 footer{ 
   @media(max-width: 315px){
     width: 90vw ;
     justify-content:center;
     align-items:center;
   }
    color:#ffff;
    display:flex;
    height: 6vh;
    width:100vw; 
    background-color:#281431;
    justify-content: space-between;
    align-items:center;

    .endereco{
      font-size:1.2rem;
      min-width:20vw;
      height:18vh;
      font-weight:500;
      display:flex;
      flex-direction: column;
      margin-left:0.8em;
      align-items:center;
      margin-bottom:2em;
      border-radius: 0.5em;
      padding-left:0.9em;
      margin-top:13em;
      a{
        font-size:1.8rem;
        padding-top: 0.3em;
        padding-left: 0;
        justify-self:start;
        align-self:start;
        margin-left:3.1em;
        color: #ff1d0b;
        font-weight: bold;
        @media(max-width:1085px){
          margin-left:2em;
        }
        @media(max-width:966px){
          margin-left:1.4em;
        }
        @media(max-width:890px){
          margin-left:3.5em;
        }
        @media(max-width:790px){
          margin-left:2.2em;
        }
        @media(max-width:700px){
          margin-left:1.2em;
        }
        @media(max-width:579px){
          margin-left:0.5em;
        }
        @media(max-width:567px){
          margin-left:0.4em;
        }
        @media(max-width:524px){
          margin-left:0.2em;
        }

      }
    }

    .direitos{
      display:inline-block;
      font-size:1.0rem;
      color:#ffff;
      align-items:center;
      margin-top:30em;
    }

    .horario{
      font-size:1.2rem;
      max-width:20vw;
      min-width:20vw;
      height:18vh;
      font-weight:500;
      display:flex;
      flex-direction:column;
      margin-right:1.5em;
      margin-top:19em;
      align-items:center;
      margin-bottom:2em;
      border-radius: 0.5em;
      padding-left:0.9em;
    }
 }

`;



export default function footer() {
  return (
      <>
          <Footer>  
            <footer>
              <div className="endereco">
                <br/>
                <br/>           
                Rua Clementino  ,10- Centro<br/>
                n°  10 <br/>
                Bairro Centro<br/>
                (18) 99814-4700<br/>
                <a href="https://www.google.com/maps/place/Posto+Nantes/@-22.6189138,-51.240967,17z/data=!4m8!1m2!3m1!2sPosto+Nantes!3m4!1s0x0:0x5544f3769f35fc53!8m2!3d-22.6162553!4d-51.2396839"> Localização <MdLocationOn/></a>
              </div>

              <div className="direitos">
                Posto Nantes @2020 Todos os direitos reservados
              </div> 
              <div className="horario">
              Funcionamento de segunda a domindo das 
              9:00 am às 20:00 pm
              </div>
            </footer>
          </Footer> 
      </>
  );
}

