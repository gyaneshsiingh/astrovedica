import React from "react";
import "../footer/footer.css";
const footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
      <div className='footer-item'>
        <h3>Contact</h3>
        <p>anjaneekumar9@gmail.com</p>
        <p> 9876543210</p>
      </div>
      <div className='footer-item'>
        <h3>Quick Links</h3>
        <ul>
          <li><a href = "/">Home</a></li>
          <li><a href = "/">Contact</a></li>
          <li><a href = "/">About Us</a></li>
        </ul>
      </div>
      <div className='footer-item'>
        <h3>Social Links</h3>
        <ul>
          <li><a href = ""> <img src = "https://img.icons8.com/?size=100&id=13912&format=png&color=000000"/></a></li>
          <li><a href = "#"><img src = "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"/></a></li>
          <li><a href = "#"><img src = "https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=000000"/></a></li>
        </ul>
      </div>
    </div>
    <div className='footer-bottom'>
      <p>Astroved: 2024 Your company.All right reserved</p>
    </div>
  </div>
  )
}

export default footer;