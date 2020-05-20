import  React  from 'react';
import skol from './assets/skol.svg';
import brahma from './assets/brahma.svg';
import antarctica from './assets/antarctica.svg';
import brahmaRomarinho from './assets/brahmaRomarinho.svg';
import brahmaduplopuro from './assets/brahmaduplopuro.svg';
import skolRomarinho from './assets/skolRomarinho.svg';
import { Container, Produtos, Title } from './Content.style';

export default function content(){
    
    return(
        <>
            <Container> 
            <Produtos>  Produtos  <div/> </Produtos>
            <Title>
                <img src={brahmaduplopuro} alt="cerveja brahma duplo malte"/>
                <img src={brahma} alt="cerveja brahma"/>
                <img src={brahmaRomarinho} alt="cerveja brahma romarinho"/>
                <img src={skol} alt="cerveja skol"/>
                <img src={skolRomarinho} alt="cerveja skol romarinho"/>
                <img src={antarctica} alt="cerveja antarctica"/>
            </Title> 
            </Container>
        </>
    );
}
