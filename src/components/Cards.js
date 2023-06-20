import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
      <div className='cards'>
        <h1>Have a look at these extraordinary destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='Discover a concealed waterfall deep within the Amazon Jungle.'
                label='Adventure'
                path='/services'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Enjoy a luxurious private cruise journey amidst the captivating islands of Bali.'
                label='Luxury'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Embark on a voyage across the Atlantic Ocean, exploring unexplored territories.'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img-4.jpg'
                text=' Playing Football on Top of the Himalayan Mountains is an unforgettable'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride the camels through the Sahara Desert and experince a guided camel tour like never before.'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

export default Cards;
