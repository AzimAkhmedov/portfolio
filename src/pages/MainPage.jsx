import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../components/AnimatedLetters/AnimatedLetters'

const MainPage = () => {
  const [letter, setLetter] = useState('text-animate')
  const nameArray = ['z', 'i', 'm']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


  useEffect(()=>{
     setTimeout(()=>{
      setLetter('text-animate-hover')
    }, 4000)
  } , [])
  return (
    <div>

      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letter}>H</span>
            <span className={`${letter} _12`}>i,</span>
            <br />
            <span className={`${letter} _12`}>I'</span>
            <span className={`${letter} _12`}>m</span>
            <img src={Logo} alt="" />
            <AnimatedLetters letterClass={letter} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letter} strArray={jobArray} idx={22} />

          </h1>
          <h2>Front-end / React JS</h2>
          <Link to={'/contact'} className='flat-button'> Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage