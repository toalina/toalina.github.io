import React from 'react'
import { Link } from 'react-router-dom'

class EtcDetails extends React.Component {
  render () {
    return (
      <div className='etc-details'>
        <h1 className='header-title'>Etc.</h1>
        <div className='etc-image'>
          <img src='../alina-ferry-2.jpg' alt='Alina on Bainbridge Ferry' />
        </div>

        <div className='etc-text-wrapper'>
          <p>Alina is a modern day Renaissance woman. A Jack/Jane/Jill of all trades. A strategic eater. She holds a Bachelors of Arts in Linguistics and a Masters of Arts in Teaching English. Stay tuned to learn more about her passions as a baker and a home goods creator.</p>
          <p>In the meantime, you can see her perform <Link to='/' className='link'>violin</Link> at an upcoming show, read about her <Link to='/about' className='link'>experience</Link> as a musician, watch and listen to <Link to='/media' className='link'>music</Link> she has performed on, and learn about her work in the <Link to='/tech' className='link'>tech</Link> industry.
          </p>
        </div>
      </div>
    )
  }
}

export default EtcDetails
