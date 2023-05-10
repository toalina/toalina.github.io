import React from 'react'
import { Link } from 'react-router-dom'

class EtcDetails extends React.Component {
  render () {
    return (
      <div className='etc-details'>
        <h1 className='header-title'>Etc.</h1>
        <div className='etc-image'>
          <img src='../assets/alina-ferry-2.jpg' alt='Alina on Bainbridge Ferry' />
        </div>

        <div className='etc-text-wrapper'>
          <p>Alina is a modern day Renaissance woman: A musician. A linguist (Bachelors of Arts in Linguistics). An educator (Masters of Arts in Teaching English). A software developer. A sewist. A baker. A maker. A strategic eater. A lifelong learner. A bilingual bicultural human.</p>
          <p>See her perform <Link to='/' className='link'>violin</Link> at an upcoming show, read about her <Link to='/about' className='link'>experience</Link> as a musician, watch and listen to <Link to='/media' className='link'>music</Link> she has performed on, check out her <a href='https://www.instagram.com/alinasew/' target='_blank' rel='noopener noreferrer' className='link'>sewing projects</a>, and learn about her work as a <Link to='/tech' className='link'>software developer</Link>.
          </p>
        </div>
      </div>
    )
  }
}

export default EtcDetails
