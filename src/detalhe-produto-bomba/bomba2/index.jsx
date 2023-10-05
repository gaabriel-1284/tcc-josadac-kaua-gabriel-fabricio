import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'



export default function Bomba2(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/images/bomba-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>ﾠ FILTRO SEM AREIA E<br/>BOMBA COM CARRINHO </h3>
                        <h5 className='descricao'>Aquecedor de alto desempenho e compacto; oferece um sistema interno <br /> exclusivo, altamente eficiente que mistura ar e gás,  permitindo o <br /> aquecimento rápido da    piscina ou spa; as taxas de eficiência <br /> energética fazem desteaquecedor a melhor solução tanto para piscina <br /> residencial como comercial, oferecendo conforto e economia; possui <br /> um sistema de ignição direta, que dispensa chama-piloto.</h5>

                        <h2 className='preco'>R$ 7.543.99</h2>

                        <button className='comprar'>COMPRAR AGORA</button>
                        <div className='estrelas'>
                            <img src="/assets/images/estrela1.png" alt="" />
                            <img src="/assets/images/estrela1.png" alt="" />
                            <img src="/assets/images/estrela1.png" alt="" />
                            <img src="/assets/images/estrela1.png" alt="" />
                            <img src="/assets/images/estrela2.png" alt="" />
                        </div>
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>


                    <img className='setaesquerda' src="/assets/images/setaesquerda.png" alt="" />

                        <div className='c1'>
                            <img className='imagizi' src="/assets/images/bomba-1.png" alt="" />
                            <h4 className='ds'>BOMBA FILTRANTE PISCINA</h4>
                            <h5 className='prc'>R$ 2.321,91</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/images/caminhao.png" alt="" />
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/images/bomba-3.png" alt="" />
                            <h4 className='ds'>KIT BOMBA CV MONOFÁSICA</h4>
                            <h5 className='prc'>R$ 4.186,09</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/images/caminhao.png" alt="" />
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/images/acessorio-4.png" alt="" />
                            <h4 className='ds'>DISPOSITIVO SODRAMAR INOX</h4>
                            <h5 className='prc'>R$ 74,70</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/images/caminhao.png" alt="" />
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/images/acessorio-5.png" alt="" />
                            <h4 className='ds'>DRENO ANTI BASE LATÃO</h4>
                            <h5 className='prc'>R$ 432,90</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/images/caminhao.png" alt="" />
                        </div>


                        <img className='setadireirta' src="/assets/images/setdireita.png" alt="" />
                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}