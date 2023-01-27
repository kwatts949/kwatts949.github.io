import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
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
          I'm Kay, I'm a Full Stack Software Developer who has taken an extended
          career break to raise my children for the past 11 years, but parenting
          and home-educating aside, I've also been working on my skills so I can
          return to the workforce.
        </p>
        <p>
          In 2020, I decided to rediscover my love of learning and do another
          degree in Chemistry. Prior to that I had been self-studying A-Level
          Maths in my free-time. Come 2022, full of confidence and ambition from
          two years of successful, intensive learning, I realised what I really
          love most about science is problem-solving and using computers to
          solve complex problems, like protein-folding a la DeepMind. This
          encouraged me to take the plunge into exploring coding as a career
          option and I quickly discovered that coding really suited my
          particular skills. For me, being a good developer is to have the mind
          of a scientist with the heart of an artist, and I think this describes
          me perfectly! With this in mind, I applied for a software engineering
          course, and the rest, as they say is history!
        </p>
        <p>
          Having graduated from Makers, I am keen to further my knowledge and
          expand my skillset. I have continued to learn, creating small
          projects, studying a course in REACT, learning TypeScript and will
          soon be starting an evening class in Web Development with Code First
          Girls. My goal is to make a meaningful impact in the world through
          coding and to serve as an advocate and inspiration for
          underrepresented groups, particularly women, to encourage others to
          pursue careers in technology
        </p>

        <p>
          Coding is a constantly evolving field that allows me to learn
          something new every day, to exercise my problem-solving abilities, and
          to tap into my creativity. I am eager to join a forward-thinking,
          technology-driven company where I can continue to learn and grow, and
          to see what we can accomplish together.
        </p>
      </div>
    </div>
  )
}

export default About
