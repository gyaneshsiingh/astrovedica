import React from 'react';
import "../contact/slot.css";

const Contact = () => {

  const phoneNumber = '9721409632';
  const pretext = encodeURIComponent('I hope this message finds you well. I am interested in scheduling an appointment for an astrological consultation through your website. Could you please provide me with information regarding your availability, and suitable time slots for [date or range of dates]?');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${pretext}`;

  const handleBookAppointment = () => {
      const newWindow = window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      if (newWindow) {
          setTimeout(() => {
              newWindow.close();
          }, 1000); 
      }
  };

  return (
      <div className='slot-container'>
         
          <div className='description'>
          <div className='slot-image'>
              <img src="Astro.jpg" alt="Astrologer" />
          </div>
              <h2> Anjani Kumar</h2>
              <p>With over 20 years of experience, Anjani Kumar is a renowned expert in Vedic astrology, palmistry, and numerology. His accurate predictions and compassionate guidance offer insights into career, relationships, health, and finances, helping you navigate life's challenges with confidence..</p>
              

              <button onClick={handleBookAppointment}>Book Appointment</button>
          </div>
      </div>
  )
}

export default Contact;