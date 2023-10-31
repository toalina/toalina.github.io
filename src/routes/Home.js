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
              Future Shows
            </h1>
            <div className='shows-list-container'>
              <div className='shows-list'>
                <h3>2023</h3>
                {/*Johnaye Kendrick - Grounded*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 2 Thursday @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.earshot.org/event/johnaye-kendrick-grounded/' target='_blank' rel='noopener noreferrer'>
                      Johnaye Kendrick - Grounded - Earshot Jazz Festival
                      <br />
                      Raisbeck Auditorium (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Paige Barnes*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 4 Saturday</h4>
                    <p className='show-text-link'>
                      <a href='https://www.eventbrite.com/e/night-music-an-evening-of-music-and-movement-tickets-698161147787?aff=oddtdtcreator' target='_blank' rel='noopener noreferrer'>
                      Paige Barnes - Night Music: An evening of music and movement
                      <br />
                      Chapel Performance Space (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>

                {/*PSQ James Bond Winery*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 26 Sun</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet - James Bond Tribute
                      <br />
                      TBD
                    </p>
                  </div>
                </div>

                {/*John Van Deusen*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 1 Friday</h4>
                    <p className='show-text-link'>
                      <a href='https://www.eventbrite.com/e/john-van-deusen-featuring-the-passenger-string-quartet-at-brodniak-hall-tickets-717233052367' target='_blank' rel='noopener noreferrer'>
                      John Van Deusen featuring The Passenger String Quartet
                      <br />
                      Anacortes High School (Anacortes, WA)
                      </a>
                    </p>
                  </div>
                </div>

                {/*Nutcracker*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 2 Sat @ 2PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.emeraldballet.org/' target='_blank' rel='noopener noreferrer'>
                      Emerald Ballet Theatre Orchestra / Emerald Ballet Theatre presents Nutcracker
                      <br />
                      Northshore Performing Arts Center (Bothell, WA)
                      </a>
                    </p>
                  </div>
                </div>

                {/*Nutcracker*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 3 Sun @ 2PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.emeraldballet.org/' target='_blank' rel='noopener noreferrer'>
                      Emerald Ballet Theatre Orchestra / Emerald Ballet Theatre presents Nutcracker
                      <br />
                      Northshore Performing Arts Center (Bothell, WA)
                      </a>
                    </p>
                  </div>
                </div>

                {/*Jesse Butterworth*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 9 Sat</h4>
                    <p className='show-text-link'>
                      Jesse Butterworth w/ Passenger String Quartet
                      <br />
                      TBD (Seattle, wA)
                    </p>
                  </div>
                </div>
              
                <h3>2024</h3>

                {/*Tomo Sou'wester*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 6 Sat</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      The Sou'wester Lodge (Seaview, WA)
                    </p>
                  </div>
                </div>
                {/*Tomo Rollerrink*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 27 Sat</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Southgate Skate Rink
                    </p>
                  </div>
                </div>
                {/*Auburn Symphony Orchestra*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 28 Sun @ 2:30</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202324-season/january' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - Love and Legends
                      <br />
                      Auburn Performing Arts Center (Auburn, WA)
                      </a>
                    </p>
                  </div>
                </div>
                 {/*Auburn Symphony Orchestra*/}
                 <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 16 Fri</h4>
                    <p className='show-text-link'>
                      <a href='hhttps://www.auburnsymphony.org/202324-season/chamberfeb' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - BRAVO Series String Quartet
                      <br />
                      Postmark Center for the Arts (Auburn, WA)
                      </a>
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
