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
                <p>(I am so grateful to be playing shows again!)</p>
                {/*Head and Heart / PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 26 Sat</h4>
                    <p className='show-text-link'>
                      Matty and Charity Gervais (The Head and the Heart) & The Passenger String Quartet
                      <br />
                      Manor House (Bainbridge Island)
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 5 Sat</h4>
                    <p className='show-text-link'><a href='https://www.showboxpresents.com/events/detail/422616' target='_blank' rel='noopener noreferrer'>Tomo Nakayama (opening for The Dip)
                    <br />
                    Showbox (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Lee Oskar / PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 11 Fri</h4>
                    <p className='show-text-link'><a href='https://tickets.thetripledoor.net/eventperformances.asp?evt=1868' target='_blank' rel='noopener noreferrer'>Lee Oskar & Passenger String Quartet
                    <br />
                    The Triple Door (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Grieves / Joslyn*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 30 Sat</h4>
                    <p className='show-text-link'><a href='https://grievesmusic.com/news/244337' target='_blank' rel='noopener noreferrer'>Grieves & Andrew Joslyn Orchestra
                    <br />
                    Crocodile Cafe (Seattle, WA)</a></p>
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
