import  React  from 'react';
import promoNantes from './assets/promoNantes.jpg';
import promoNantes1 from './assets/promoNantes1.png';
import { Container, Promoção, Title } from './Content.style'

export default function content(){
    
    return(
        <>
            <Container> 
            <Promoção>  Promoções  <div/> </Promoção>
            <Title>
                <img src={promoNantes1} alt=""/>
                <img src={promoNantes} alt=""/>
                <img src={promoNantes} alt=""/>
                <img src={promoNantes1} alt=""/>
                <img src={promoNantes} alt=""/>
                <img src={promoNantes} alt=""/>
            </Title>  
            </Container>
        </>
    );
}
