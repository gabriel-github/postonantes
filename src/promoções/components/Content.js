import  React  from 'react';
import promo from './assets/promo.svg';
import { Container, Promoção, Title } from './Content.style'

export default function content(){
    
    return(
        <>
            <Container> 
            <Promoção>  Promoções  <div/> </Promoção>
            <Title>
                <img src={promo} alt="Bebidas"/>
                <img src={promo} alt="Bebidas"/>
                <img src={promo} alt="Bebidas"/>
                <img src={promo} alt="Bebidas"/>
                <img src={promo} alt="Bebidas"/>
                <img src={promo} alt="Bebidas"/>
            </Title> 
            </Container>
        </>
    );
}
