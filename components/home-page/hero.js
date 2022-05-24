import React from 'react'
import Image from 'next/image'
import s from './hero.module.css'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.image}>
                <Image src="/images/site/lobster.jpg" alt="My Pic" width={300} height={300} />
            </div>
            <div className="h1div">
            <h1>Hi, I&apos;m Agus</h1>
          <div className='h4div'><h4>im hidden</h4></div>  
            </div>
         
            <p>I blog about web development, especially frontend frameworks like React</p>

        </section>
    )
}

export default Hero