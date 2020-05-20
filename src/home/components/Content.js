import  React  from 'react';
import promo from './assets/promo.svg';
import { Container, Combustivel, Title } from './Content.style'

export default function content(){
    
    return(
        <>
            <Container> 
            <Combustivel>  Combustivel  <div/> </Combustivel>
            <Title>
                <img src={promo} alt="promoções do posto de gasolina"/>
                <img src={promo} alt="promoções do posto de gasolina"/>
                <img src={promo} alt="promoções do posto de gasolina"/>
                <img src={promo} alt="promoções do posto de gasolina"/>
                <img src={promo} alt="promoções do posto de gasolina"/>
                <img src={promo} alt="promoções do posto de gasolina"/>
             
            </Title> 
            </Container>
        </>
    );
}
