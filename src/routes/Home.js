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
                <h3>2026</h3>
                
                {/*Candlelight*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 16 Friday @ 6:15PM</h4>
                    <p className='show-text-link'>
                      
                      Candlelight - Fleetwood Mac
                      <br />
                      Arctic Club (Seattle, WA)
                      
                    </p>
                  </div>
                </div>
                {/*Candlelight*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 16 Friday @ 8:30PM</h4>
                    <p className='show-text-link'>
                      
                      Candlelight - Queen vs ABBA
                      <br />
                      Arctic Club (Seattle, WA)
                      
                    </p>
                  </div>
                </div>
                {/*Nordic Pop*/}
                
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 18 Sunday @ 2PM</h4>
                    <p className='show-text-link'>
                      <a href='https://nordicmuseum.org/events/nordic-pop-an-afternoon-of-music-for-all-ages' target='_blank' rel='noopener noreferrer'>
                      Nordic Pop, An Afternoon of Music for All Ages
                      <br />
                      National Nordic Museum (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*ASO */}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 25 Sunday @ 2:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202526-season/joyful-triumph' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - Joyful Triumph
                      <br />
                      Auburn Performing Arts Center (Auburn, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Paramount 2/4*/}
                
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 4 Wednesday @ 8PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.stgpresents.org/events/death-stranding-strands-of-harmony/' target='_blank' rel='noopener noreferrer'>
                      Death Stranding: Strands of Harmony
                      <br />
                      Paramount Theatre (Seattle, WA)
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
