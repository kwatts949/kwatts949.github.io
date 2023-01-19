import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'a', 'y']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span> <br />
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
    </div>
  )
}

export default Home
