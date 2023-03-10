import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <div className='image-wrapper'>
          <img src='../assets/violin-desk-sm.jpg' alt='Violin desk with Totoro' />
        </div>
        <div>
          <section>
            <h1 className='header-title shows-list-title'>
              Upcoming Shows
            </h1>
            <div className='shows-list-container'>
              <div className='shows-list'>
                <h3>2023</h3>

                {/*Seattle Chamber Orchestra*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 6 Wed</h4>
                    <p className='show-text-link'>
                      Seattle Chamber Orchestra
                      <br />
                      Plymouth Church (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama - Buffalo Daughter*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>June 3 Sat</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama (Opening for Buffalo Daughter)
                      <br />
                      Substation (Seattle, WA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to='/past' className='link'>See Past Shows</Link>
          </section>
        </div>
        <div className='home-contact-text'>
          <Link to='/contact' className='link pulse'>Say Hello <i class='fas fa-heart fa-spin fa-lg' /></Link>
        </div>
      </div>
    )
  }
}

export default Home
