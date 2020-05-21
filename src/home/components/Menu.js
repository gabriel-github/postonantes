import React,{useState} from 'react';


function Menutoggle() {


  const [classe,setClasse] = useState({
    classediv : false,

  })
  const [divInvisivel,setDivInvisivel] = useState({
    divinvisivel : false,
  })

  const minhaDivInvisivel = divInvisivel.divinvisivel;
  const menuToggle = classe.classediv;
  return (
        <div className="divInvisivel">
           <div className={menuToggle? 'menu on' : 'menu'} 
            onClick={() => setClasse({classediv: !menuToggle})}
            >
                <div className='menu-toggle'>
                <div className='one'> </div>
                <div className='two'> </div>
                <div className='three'> </div>

                <nav>
                    <div className='menu-celular'>
                    <ul>
                        <a className='link1' href="/Produtos" > Produtos</a>
                        <a className='link2' href="/Promoções"> Promoções</a>
                    </ul>   
                    </div>
                </nav>
            </div>
            </div>
        </div>
            
           

  );
}

export default Menutoggle;