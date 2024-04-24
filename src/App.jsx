import React from 'react'
import './App.css'
import Sessão from './components/Sessão'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Footer from './components/Footer'
import senailogo from './assets/senailogo.png'

function App() {
  return (
    <div className='Container'>
      <Header Header={senailogo}/>
      <Sessão Titulo="Dia da Familia" 
            Descricao="
            O Dia da Família na Escola é uma ocasião especial que celebra a parceria entre a escola, os alunos e suas famílias. É um dia dedicado a fortalecer os laços entre a comunidade escolar, promovendo interação, colaboração e aprendizado conjunto."
            HorárioSessão="20:12"
            DataSessão="12/12/2021"
            LocSessão="Rua dos Bobos, nº 0"/>
      <Galeria Img1={'imagemfamilia1.jpg'}
              Img2={'imagemfamilia2.jpg'}
              Img3={'imagemfamilia3.jpg'}
              Img4={'imagemfamilia1.jpg'}
              Img5={'imagemfamilia2.jpg'}
              Img6={'imagemfamilia3.jpg'}/>
      <Footer Nomealuno="Maria Eduarda Alves Veridiano" Turma="3B - ADS"/>
    </div>
  )
}

export default App
