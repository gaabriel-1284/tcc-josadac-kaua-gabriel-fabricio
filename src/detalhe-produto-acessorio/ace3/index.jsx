import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Ace3(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/acessorio-3.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>PENEIRA SODRAMAR <br/> ARMAÇÃO METÁLICA</h3>
                        <h5 className='descricao'>Aquecedor de alto desempenho e compacto; oferece um sistema interno <br /> exclusivo, altamente eficiente que mistura ar e gás,  permitindo o <br /> aquecimento rápido da    piscina ou spa; as taxas de eficiência <br /> energética fazem desteaquecedor a melhor solução tanto para piscina <br /> residencial como comercial, oferecendo conforto e economia; possui <br /> um sistema de ignição direta, que dispensa chama-piloto.</h5>

                        <h2 className='preco'>R$ 35,10</h2>

                        <button className='comprar'>COMPRAR AGORA</button>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/acessorio-1.png" alt="" />
                            <h4 className='ds'>TAMPA FECHADA AUTOMÁTICO </h4>
                            <h5 className='prc'>R$50,40</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/acessorio-2.png" alt="" />
                            <h4 className='ds'>RALO QUEBRA ONDA LATÃO </h4>
                            <h5 className='prc'>R$ 76,50</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/acessorio-4.png" alt="" />
                            <h4 className='ds'>DISPOSITIVO SODRAMAR INOX</h4>
                            <h5 className='prc'>R$ 74,70</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/image/acessorio-5.png" alt="" />
                            <h4 className='ds'>DRENO ANTI BASE LATÃO</h4>
                            <h5 className='prc'>R$ 432,90</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>


                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}