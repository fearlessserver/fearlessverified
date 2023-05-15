import React from 'react'
import "./header.css";
import people from "../../assets/people.png"
import fear from "../../assets/fear.png"

const Header = () => {
  return (
    <div className='big3__header section__padding' id='home'>
      <div className='big3__header-content'>
        <h1 className='gradient__text'>Let's Create Something amazing with Fearless Graphics</h1>
        <p>Fearless Graphics gives you 0% anxiety for you designs</p>

        <div className='big3__header-content__input'>
          <input type="email" placeholder="Your Email Address"/>
          <button type='button'>Get started</button>
        </div>

        <div className='big3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access to visit in last 24 hours</p>
        </div>
      </div>
      <div className='big3__header-image'>
          <img src={fear} alt="fear" />
        </div>
    </div>
  )
}

export default Header