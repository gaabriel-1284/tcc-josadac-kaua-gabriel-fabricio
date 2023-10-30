import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Cabecalho from './cabecalho';
import Card from './card';
import Pedido from './meuspedidos';
import Cabecalho2 from './cabecalho2';
import Rodape from './rodape';
import Status from './statuspedido';
import Pagamento from './modopagamento';
import Informardados from './informardados';
import Viapaypal from './viapaypal';
import Viapix from './viapix';
import { Login } from './login';
import { Endereco } from './endereço';
import { Grafico } from './grafico';
import { Grafico2 } from './graficomensal';
import { Comentario } from './comentario';
import HomeAdm from './homeadm';
import Cadastro from './cadastroCliente';
import CadastroProduto from './ABC---PAGES---ADM/cadastro-produto';
import CabecalhoInicial from './cabecalho.inicial';
import ConsultaProduto from './ABC---PAGES---ADM/consultar-produto';
import Realizados from './PedidosRealizados';
import LoginAdmin from './ABC---PAGES---ADM/loginAdm/loginAdm';
import  MinhaConta  from './MinhaContaCliente';
import CabecalhoSemapi from './cabecalho-antes.Login';
import HomeLogin from './home-login-cadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomeLogin/>}/>
      <Route path='/realizados' element={<Realizados/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/cabecalho' element={<Cabecalho/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/pedido' element={<Pedido/>}/>
      <Route path='/cabecalho2' element={<Cabecalho2/>}/>
      <Route path='/rodape' element={<Rodape/>}/>
      <Route path='/statuspedido' element={<Status/>}/>
      <Route path='/pagamento' element={<Pagamento/>}/>
      <Route path='/informardados' element={<Informardados/>}/>
      <Route path='/paypal' element={<Viapaypal/>}/>
      <Route path='/pix' element={<Viapix/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/endereco' element={<Endereco/>}/>
      <Route path='/grafico' element={<Grafico/>}/>
      <Route path='/graficomensal' element={<Grafico2/>}/>
      <Route path='/comentario' element={<Comentario/>}/>
      <Route path='/homeadm' element={<HomeAdm/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/cadastroproduto' element={<CadastroProduto/>}/>
      <Route path='/cabecalhoinicial' element={<CabecalhoInicial/>}/>
      <Route path='/consultaproduto' element={<ConsultaProduto/>}/>
      <Route path='/loginadm' element={<LoginAdmin/>}/>
      <Route path='/minhaconta' element={<MinhaConta/>}/>
      <Route path='/cabecalhosemapi' element={<CabecalhoSemapi/>}/>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


