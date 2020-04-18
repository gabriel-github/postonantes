import React from 'react';
import {createGlobalStyle} from 'styled-components'

 const Global = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
 *{
  margin:0;
  padding:0;
  outline:0;
  position: relative;
   
 }
    body{
        background-color:#04b5eb;
        font: 400 16px Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        overflow-y:auto;
        overflow-x:hidden;
    }
    html{
      font-size: 62.5%;
      background-color:#1a2b3b;
    }


    @media(max-width:900px){
      html{
        font-size:40%;
        img{
          width:2.5em;
          height:2.5em;
          margin-left: 3em;
        }
        header{
          height:10vh;
        }
      }
      @media(max-width:325px){
      html{
        font-size:36%;
      }
    
   }
   

}`
export default function global() {
  return (
    <Global>
    </Global>
  );
}