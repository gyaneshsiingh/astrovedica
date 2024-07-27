import React from 'react'
 import "../home/home.css";
 import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

    
  const handleWhatsAppRedirect = (message) => {
    const pretext = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${9721409632}?text=${pretext}`;

    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
        setTimeout(() => {
            newWindow.close();
        }, 1000); 
    }
};

  
  return (
    <div className='Body'>
        <div className='Banner'>
             <img src = "./banner.png" alt = ""/> 
        </div>
        <div className="box-container">
        <h1>India's Best Astrologer</h1>
        <div className='grid'>
          <div className='grid-item' onClick={() => navigate('/contact')}>
            <img src="./talk1.png" alt="" />
            <p>Talk</p>
          </div>
          <div className='grid-item' onClick={() => navigate('/contact')}>
            <img src="./chat1.png" alt="" />
            <p>Chat</p>
          </div>
        </div>
      </div>
      <div className='box-container services-container'>
        <h1>Services</h1>
        <div className='services-grid'>
          <div className='services-grid-item' onClick={() => handleWhatsAppRedirect("I am interested in scheduling an appointment for a Vedic Astrology consultation. Could you please provide me with information regarding your availability and suitable time slots for [preferred date or range of dates]?")}>
            <img src="./horoscope1.png" alt="" />
            <p>Vedic Astrology</p>
          </div>
          <div className='services-grid-item' onClick={() => handleWhatsAppRedirect("I would like to learn more about Numerology and schedule a consultation. Please share your availability and suitable time slots for [preferred date or range of dates].")}>
            <img src="./love.png" alt="" />
            <p>Numerology</p>
          </div>
          <div className='services-grid-item' onClick={() => handleWhatsAppRedirect("I am looking for an auspicious time for an event and would like to schedule a Muhurta consultation. Please provide available dates and times for [preferred date or range of dates].")}>
            <img src="./Life.png" alt="" />
            <p>Muhurta</p>
          </div>
          <div className='services-grid-item' onClick={() => handleWhatsAppRedirect("I am interested in a Vastu consultation. Could you please share your availability and suitable time slots for [preferred date or range of dates]?")}>
            <img src="./saturn.png" alt="" />
            <p>Vastu</p>
          </div>
        </div>
      </div>
      <div className='box-container'>
        <h1>Expertises</h1>
        <div className='Expertise-grid'>
          <div className='Expertise-grid-item' onClick={() => handleWhatsAppRedirect("I need guidance on improving my Love and Relationship issues. Could we schedule a consultation? Please provide available dates and times for [preferred date or range of dates].")}>
            <img src="./heart.png" alt="" />
            <p>Love And Relationship</p>
          </div>
          <div className='Expertise-grid-item' onClick={() => handleWhatsAppRedirect("I am seeking advice on achieving Financial Stability. Could you please provide your availability and suitable time slots for [preferred date or range of dates]?")}>
            <img src="./finance1.png" alt="" />
            <p>Financial Stability</p>
          </div>
          <div className='Expertise-grid-item' onClick={() => handleWhatsAppRedirect("I am facing issues in my married life and would like to schedule a consultation. Please provide your availability and suitable time slots for [preferred date or range of dates].")}>
            <img src="./marriage2.png" alt="" />
            <p>Married Life Problem</p>
          </div>
          <div className='Expertise-grid-item' onClick={() => handleWhatsAppRedirect("I need guidance on my career and job situation. Could you please provide your availability and suitable time slots for [preferred date or range of dates]?")}>
            <img src="./office.png" alt="" />
            <p>Career And Job</p>
          </div>
        </div>
      </div>

     <div className='description-home'>
      <h1>Why Visit Us?</h1>
      <p>Explore profound astrological wisdom, receive personalized guidance, and unlock your true potential with our expert consultations.</p>
     </div>


     
 </div>
  )
}

export default Home