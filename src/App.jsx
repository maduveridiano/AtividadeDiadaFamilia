import React from 'react'
import './App.css'
import Sessão from './components/Sessão'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Footer from './components/Footer'
import imagemfamilia1 from './assets/imagemfamilia1.jpg'
import imagemfamilia2 from './assets/imagemfamilia2.jpg'
import imagemfamilia3 from './assets/imagemfamilia3.jpg'
import senailogo from './assets/senailogo.png'

function App() {
  return (
    <div className='Container'>
      <Header Header={senailogo}/>
      <Sessão Titulo="Dia da Familia" 
            Descricao="Um dia para virmos para a escola e pipi popopo"
            HorárioSessão="20:12"
            DataSessão="12/12/2021"
            LocSessão="Rua dos Bobos, nº 0"/>
      <Galeria Img1={imagemfamilia1}
              Img2={imagemfamilia2}
              img3={imagemfamilia3}
              img4={imagemfamilia1}
              img5={imagemfamilia2}
              img6={imagemfamilia3}/>
      <Footer Nomealuno="Maria Eduarda Alves Veridiano" Turma="3B - ADS"/>
    </div>
  )
}

export default App
