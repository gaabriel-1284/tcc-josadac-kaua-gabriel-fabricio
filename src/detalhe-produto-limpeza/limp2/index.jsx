import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Limp2(){




    return(
        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/limpeza2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>LIMPA BORDAS HTH - 1 LITRO</h3>
                        <h5 className='descricao'>O Limpa Bordas HTH é um produto de limpeza desenvolvido especialmente para remover sujeira impregnada nas bordas de piscinas de fibra, vinil ou azulejo. Sua fórmula contém tensoativo biodegradável e possui uma ação detergente que é própria para este tipo de superfície. O produto é fácil de usar: basta aplicar o produto em uma esponja, esfregar as bordas e enxaguar com a água da própria piscina. Não é necessário enxaguar o produto com água corrente, pois ele não deixa resíduos.</h5>

                        <h2 className='preco'>R$320,00</h2>

                        <button className='comprar'>COMPRAR AGORA</button>
                      
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/limpeza1.png" alt="" />
                            <h4 className='ds'>REFLETOR R125</h4>
                            <h5 className='prc'>R$ 345,90</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        <div className='c2'>
                        <img className='imagizi' src="/assets/image/limpeza3.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER LED'S G</h4>
                            <h5 className='prc'>R$390,00</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        <div className='c3'>
                        <img className='imagizi' src="/assets/image/limpeza4.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER SMD G</h4>
                            <h5 className='prc'>R$330,00</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        <div className='c4'>
                        <img className='imagizi' src="/assets/image/limpeza5.png" alt="" />
                            <h4 className='ds'>REFLETOR SLIM LED'S</h4>
                            <h5 className='prc'>R$150,00</h5>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='cmn' src="/assets/image/caminhao.png" alt="" />
                        </div>


                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}