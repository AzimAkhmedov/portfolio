// import {  useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import { useEffect, useState } from 'react'
import LogoS from '../../assets/images/line.png'
import './index.scss'

const LogoSVG = () => {
  const [active, setActive] = useState('off')
  // const bgRef = useRef()
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()
  useEffect(() => {
    setTimeout( ()=>{
      setActive('on')
    }, 1000)
  },[])
  useEffect(() => {
    console.log(active);
  },[active])
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 4,
  //       opacity: 1,
  //       zIndex: -2
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //       zIndex: -2

  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //       zIndex: -2

  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //       zIndex: -2

  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container">
      <img
        src={LogoS}
        className={active}
        alt="JavaScript,  Developer"
      />

    </div>
  )
}

export default LogoSVG