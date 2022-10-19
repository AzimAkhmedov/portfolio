import { useEffect, useState } from 'react'
import {
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faGithub,
    faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [loader , setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    useEffect(()=>{
          setLoader(false)
    },[])
    return loader?(<Loader type='pacman' />): (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Begginer in Software dev and growing everyday)
                    </p>
                    <p align="LEFT">
                        I'm keen on web-dev and exactly in Front-end, but also going to learn Node js (Express, Back-end)
                    </p>
                    <p>
                        I'm freshman in  Akfa University (Tashkent)
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color="green" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="grey" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default About