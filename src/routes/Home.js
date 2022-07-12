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
                <h3>2022</h3>
                {/*Tomo Nakayama*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>July 22 Fri</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Timber Fest (Carnation, WA)
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 5 Fri</h4>
                    <p className='show-text-link'>Tomo Nakayama
                    <br />
                    W Hotel (Seattle, WA)</p>
                  </div>
                </div>
                {/*Tomo Nakayama*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 6 Sat</h4>
                    <p className='show-text-link'>Tomo Nakayama, KEXP 50th Anniversary
                    <br />
                    KEXP at Seattle Center, Gathering Space (Seattle, WA)</p>
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
