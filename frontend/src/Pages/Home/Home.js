import React from 'react';
import './Home.css';
import foto from "../../Images/banner.jpg";
import Slider from '../../Components/Slides';
import Seguridad from './Seguridad';
import Footer from '../../Components/Footer';
//console.log(foto);

const Home = () => {
  return (
    <div>
      <Slider/>
      {/*SECTION 1 INTRODUCTION*/}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Nuestra compañia</h3>
              <div className='underline mx-auto'></div>
              <p>
              Nuestro proyecto, dedicado a la seguridad en el distrito Tec, es una iniciativa apasionada que tiene como objetivo principal empoderar a la comunidad local a través del conocimiento y la información. En un mundo en constante cambio, creemos que la seguridad es fundamental para el bienestar de todos. Por eso, hemos desarrollado una herramienta de mapeo innovadora que brinda una visión clara y actualizada de la situación de seguridad en esta vibrante zona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 MISION VISION & VALUES*/}
      <Seguridad/>

      {/*SECTION 3 REDIRECCIÓN*/}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Utiliza nuestros servicios</h3>
              <div className='underline mx-auto'></div>
              <button className="btn btn-primary">Pruébalo ahora</button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}


export default Home;