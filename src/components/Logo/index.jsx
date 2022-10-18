import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../assets/images/logo.svg'
import './index.scss'

const LogoSVG = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 4,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}

        alt="JavaScript,  Developer"
      />
       <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}

        alt="JavaScript,  Developer"
      />

      <svg width="559pt" height="897pt" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path fill="none" ref={outlineLogoRef} d="M22,-27C29.2,-20.2,36.2,-13.9,37.7,-6.5C39.3,1,35.3,9.6,30.4,17.1C25.5,24.5,19.5,31,11.5,35.6C3.5,40.3,-6.6,43.2,-14.4,40.1C-22.2,37.1,-27.7,28.1,-29.8,19.5C-32,11,-30.9,2.9,-29.6,-5.3C-28.3,-13.5,-26.6,-21.7,-21.7,-28.9C-16.7,-36.2,-8.3,-42.5,-0.5,-42C7.4,-41.4,14.8,-33.9,22,-27Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="1" stroke="url(#sw-gradient)"></path>
        </g>
      </svg>

    </div>
  )
}

export default LogoSVG