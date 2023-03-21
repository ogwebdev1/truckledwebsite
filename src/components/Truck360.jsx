import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../style/model360.module.css'

export default function Truck360() {
  return (
    
    <section className={style.container}>
    <h1>Truck LED</h1>
    <div className={style.contain360main}>
      <div className='test'>
        <ThreeSixty
            amount={19}
            imagePath="img360/"
            fileName="truck{index}.jpeg"
            spinReverse
            autoplay={19}
            loop={1}
        />
        </div>
    </div>
    </section>
        
  )
}
