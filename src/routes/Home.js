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
                {/*PSQ - Lincoln Barr*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 24 Thurs</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet w/ Lincoln Barr 
                      <br />
                      Royal Room (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama - The Thing*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 25 Friday</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama - The Thing Festival
                      <br />
                      Port Townsend, WA
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama - Snohomish Block Party*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 26 Saturday</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama - Snohomish Block Party
                      <br />
                      Snohomish, WA
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama - Clock-out Lounge*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>September 8 Friday</h4>
                    <p className='show-text-link'>
                      <a href='https://clockoutlounge.com/event-detail/13404068/clock-out-lounge-presents-tomo-nakayama-w-tito-ramsey-wall-drugs/' target='_blank' rel='noopener noreferrer'>
                      Tomo Nakayama - Clock Out Lounge
                      <br />
                      Clock Out Lounge (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
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
                      Kerry Hall at Cornish (Seattle, WA)
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
                      Paige Barnes - Night Music
                      <br />
                      Chapel Performance Space (Seattle, WA)
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
