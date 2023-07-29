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
                {/*Erin Jorgensen Fest*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 3 Thursday</h4>
                    <p className='show-text-link'><a href='hhttps://www.erinjorgensenfestival.com/august-4.html' target='_blank' rel='noopener noreferrer'>
                      Erin Jorgensen Fest - Sew and Tell! (A non-musical mini class)
                      <br />
                      18th & Union Theater - 1406 18th Ave (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama - SLU Block Party*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 10 Thursday</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama - South Lake Union Block Party
                      <br />
                      SLU Discovery Center (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*PSQ - Sonic Guild*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>August 12 Saturday</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet - Sonic Guild 
                      <br />
                      TBD (Seattle, WA)
                    </p>
                  </div>
                </div>
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
