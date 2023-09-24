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
                {/*Leanna Keith - Blood Sugar Rice*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>September 29 Friday</h4>
                    <p className='show-text-link'>
                      Leanna Keith - Blood Sugar Rice
                      <br />
                      Chapel Performance Space (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Sheridan Riley - Earshot Festival*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 12 Thursday @ 7PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.earshot.org/event/sheridan-riley/' target='_blank' rel='noopener noreferrer'>
                      Sheridan Riley - Earshot Jazz Festival
                      <br />
                      Chapel Performance Space (Seattle, WA)
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
                    <h4 className='show-text-date'>October 15 Sunday @ 2:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra
                      <br />
                      Auburn Performing Arts Center (Auburnm, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama - Rabbit Box*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 25 Wednesday</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Rabbit Box (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Matt Cameron / Wayne Horvitz*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 28 Saturday @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://theroyalroomseattle.com/event/matt-cameron-trio-wayne-horvitz-and-motel-7-featuring-matt-cameron/' target='_blank' rel='noopener noreferrer'>
                      Matt Cameron Trio // Wayne Horvitz and Motel 7 Featuring Matt Cameron
                      <br />
                      Royal Room (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
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
                    <h4 className='show-text-date'>November 4 Saturday @ 8PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.eventbrite.com/e/night-music-an-evening-of-music-and-movement-tickets-698161147787?aff=oddtdtcreator' target='_blank' rel='noopener noreferrer'>
                      Paige Barnes - Night Music: An evening of music and movement
                      <br />
                      Chapel Performance Space (Seattle, WA)
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
