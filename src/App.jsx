import React, { useState, useEffect } from 'react';
import Mariposa from './assets/mariposa_3.svg'
import ComillaApertura from './assets/comilla-apertura.svg'
import ComillaCierre from './assets/comilla-cierre.svg'
import Fire from './assets/fireLine.gif'
import Ondas from './assets/img_ondas01.svg'
import Ubi from './assets/ubi.png'
import Divisor from './assets/divisor.svg'
import Circulo from './assets/img_circuloContador01.svg'
import Regalos from './assets/glitter.jpg'
import Regalo from './assets/regalo.png'
import ImageGallery from "react-image-gallery";
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import "react-image-gallery/styles/css/image-gallery.css";
import './index.css';

function App() {


  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownDate = new Date("Nov 3, 2024 13:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766108/Pruebas/m6rrp4umqlnv0tlzhxln.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766108/Pruebas/uvg3wdsgqpsjmxhi8tfh.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766106/Pruebas/wugjv1l17uycuni2pjps.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766106/Pruebas/dztf952fsknmb99jst8o.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766106/Pruebas/rqu6vc4vrltedc0zwihd.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/gr6c5is4ne0hj0zcoqhq.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/bfd1yumhhcqluymf2od4.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/pnr75urzvksbtcrxmqud.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/yfgrbglsambp4wnuun9z.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/fgdzpvpfpg6kubn0pgxt.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/pu75datlvn6skuqiqsod.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/uaytyonjgelnq9ecydep.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/mo5m4ixkvaq6cjtr0gco.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/hg4pspbx1mmelufczhsa.jpg",
    },
    {
      original: "https://res.cloudinary.com/dwuycckui/image/upload/v1716766107/Pruebas/po0knwm6zxffzplmgpkk.jpg",
    },
  ];


  return (
    <div className='container'>
      <div className="header" style={{ backgroundImage: `url('https://images.pexels.com/photos/8014879/pexels-photo-8014879.jpeg')` }}>
        <img src={Mariposa} className="mariposa" alt="Mariposa" />
        <img src={Mariposa} className="mariposa2" alt="Mariposa" />
        <div className="header-content">
          <div className="date-container">
            <div className="line"></div>
            <h2 className="date">03.11.2024</h2>
            <div className="line"></div>
          </div>
          <h1 className='title'>Florencia Mis 15 años</h1>
          <p className='text'>
            <img src={ComillaApertura} className="comilla" alt="Comilla de apertura" />
            Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
            <img src={ComillaCierre} className="comilla" alt="Comilla de cierre" />
          </p>
        </div>
      </div>
      <img src={Ondas} className="ondas" alt="Ondas" />


      <img style={{ maxHeight: '200px', width: '100%' }} src={Fire} alt="Fire" />

      <div className="countdown" style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 700, fontSize: '25px', display: 'flex', justifyContent: 'center' }}>
        <div className="countdown-container" style={{ background: '#FEFEFE', borderRadius: '50%', width: '20rem', height: '20rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', paddingTop: '20px' }}>

          <h2>Falta</h2>
          <img src={Divisor} alt="Ondas" style={{ maxWidth: '40%' }} />

          <div style={{ position: 'relative' }}>
            <img src={Circulo} alt="Ondas" style={{ position: 'absolute', width: '120%', height: 'auto', left: -30, bottom: -70 }} />
            <div id="countdown-timer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <div className="countdown-item" style={{ borderRight: '1px solid #bfa880', paddingRight: '1rem' }}>
                <p style={{ color: '#212529' }}>{countdown.days}</p>
                <p style={{ color: '#bfa880' }}>Días</p>
              </div>
              <div className="countdown-item" style={{ borderRight: '1px solid #bfa880', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <p style={{ color: '#212529' }}>{countdown.hours}</p>
                <p style={{ color: '#bfa880' }}>Hs</p>
              </div>
              <div className="countdown-item" style={{ borderRight: '1px solid #bfa880', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <p style={{ color: '#212529' }}>{countdown.minutes}</p>
                <p style={{ color: '#bfa880' }}>Min</p>
              </div>
              <div className="countdown-item" style={{ paddingLeft: '1rem' }}>
                <p style={{ color: '#212529' }}>{countdown.seconds}</p>
                <p style={{ color: '#bfa880' }}>Seg</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div style={{ borderTop: '2px solid #c2bca1', marginTop: '40px' }}></div>

      <div className="details">
        <h2>Detalles del Evento</h2>
        <p><strong style={{ color: '#c2bca1' }}>Fecha:</strong> 03 de Noviembre de 2024</p>
        <p><strong style={{ color: '#c2bca1' }}>Horario:</strong> 13:00hs</p>
        <p><strong style={{ color: '#c2bca1' }}>Lugar:</strong> Chayito eventos</p>
        <p>
          <a href="https://maps.app.goo.gl/rHeYCUvvJCQPYtSB8" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid #c2bca1', padding: '10px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: '25px', height: '25px' }} src={Ubi} alt="Fire" />  <strong style={{ color: '#c2bca1' }}>
              Ubicación</strong>
          </a>
        </p>


      </div>

      <div style={{ borderTop: '2px solid #c2bca1', marginBottom: '40px' }}></div>


      <div style={{ width: '100%', margin: 'auto' }}>
        <ImageGallery
          items={images}
          autoPlay={true}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          showBullets={true}
          slideInterval={3000}
          slideDuration={1000}
          style={{ maxHeight: '200px' }}
        />
      </div>


      <div style={{ borderTop: '2px solid #c2bca1', marginTop: '20px' }}></div>

      <div style={{ backgroundImage: Regalos, display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'column', alignItems: 'center', zIndex: 999 }}>
        <h2>Regalos</h2>
        <CardGiftcardOutlinedIcon style={{ color: '#c2bca1', fontSize: '50px' }} />
        <p style={{ width: '80%', marginLeft: '20px', marginRight: '20px' }}>
          <span style={{ fontWeight: 700, color: 'white', width: '100%', }}>Tu presencia es mi mejor regalo, pero si queres bendecirme, podés hacerlo por este medio.</span>
          <p style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '2px solid #c2bca1',
            padding: '10px',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <strong style={{ color: '#c2bca1' }}>Datos bancarios</strong>
          </p>

        </p>
      </div>
      <div style={{ borderTop: '2px solid #c2bca1' }}></div>

      <div style={{ backgroundImage: Regalos, display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'column', alignItems: 'center', zIndex: 999 }}>
        <h2>Confirmación de Asistencia</h2>
        <ChecklistRtlOutlinedIcon style={{ color: '#c2bca1', fontSize: '50px' }} />
        <p style={{ width: '80%', marginLeft: '20px', marginRight: '20px' }}>
          <span style={{ fontWeight: 700, color: 'white', width: '100%', }}>Confirmar asistencia antes del...</span> <br />
          <span style={{ fontWeight: 700, color: 'white', width: '100%', }}>Valor de la tarjeta de adulto (Mayor de 20 años): $18.000</span>

        </p>
      </div>
      <div style={{ borderTop: '2px solid #c2bca1' }}></div>

      <div style={{ backgroundImage: Regalos, display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'column', alignItems: 'center', zIndex: 999, paddingBottom: '20px' }}>
        <h2>Vestimenta</h2>
        <CheckroomOutlinedIcon style={{ color: '#c2bca1', fontSize: '50px' }} />
        <p style={{ width: '80%', marginLeft: '20px', marginRight: '20px' }}>
          <span style={{ fontWeight: 700, color: 'white', width: '100%', }}>Elegante Sport</span> <br />
          <span style={{ fontWeight: 700, color: 'white', width: '100%', }}>PD: Llevar traje de baño, ropa comoda, etc. Ya que el predio cuenta con pileta y muchisimo espacio para disfrutar el día</span>

        </p>
      </div>
      <div>
        <img src={Ondas} className="ondasbottom" alt="Ondas" />

      </div>


    </div>
  );
}

export default App;
