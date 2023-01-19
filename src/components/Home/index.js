import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'K', 'a', 'y']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br></br>
          <span className={`${letterClass} _13`}>i</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <h2>Full Stack Developer | REACT | JS | Ruby</h2>
        <Link to="/contact" className="flat-button">
          Get in touch!
        </Link>
      </div>
      <Logo/>
    </div>
  )
}

export default Home
