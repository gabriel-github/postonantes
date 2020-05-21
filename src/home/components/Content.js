import  React  from 'react';
import diesel from './assets/diesel.svg';
import etanol from './assets/etanol.svg';
import gasolina from './assets/gasolina.svg';
import { Container, Combustivel, Title } from './Content.style'

export default function content(){
    
    return(
        <>
            <Container> 
            <Combustivel>  Combustivel  <div/> </Combustivel>
            <Title>
                <img src={etanol} alt="combustivel etanol "/>
                <img src={gasolina} alt="combustivel gasolina"/>
                <img src={diesel} alt="combustivel diesel"/>
            </Title> 
            </Container>
        </>
    );
}
