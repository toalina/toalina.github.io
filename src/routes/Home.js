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
                <h3>2025</h3>
                {/*PSQ - Kaylee Cole*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 17 Thursday @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://tickets.thetripledoor.net/eventperformances.asp?evt=2117' target='_blank' rel='noopener noreferrer'>
                      Kaylee Cole & Passenger String Quartet - Cole Does King
                      <br />
                      Triple Door (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Traver Gallery*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 19 Saturday @ 2:30-5PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.travergallery.com/exhibitions/preston-singletary-in-person-artist-talk-special-performance-project-2/' target='_blank' rel='noopener noreferrer'>
                      Preston Singletary + Rituals of Becoming 
                      <br />
                      Traver Gallery (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Swan Lake*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 25 Friday @ 7PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.stgpresents.org/events/state-ballet-theatre-of-ukraine-live-symphony-orchestra-swan-lake/' target='_blank' rel='noopener noreferrer'>
                      State Ballet Theatre of Ukraine & Live Symphony Orchestra - Swan Lake
                      <br />
                      The Paramount Theatre (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*NOCCO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 26 Saturday @ 2PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.nocco.org/upcoming-events/2025/4/26/revel' target='_blank' rel='noopener noreferrer'>
                      NOCCO - Revel
                      <br />
                      Seattle First Baptist Church (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*NOCCO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>April 27 Sunday @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.nocco.org/upcoming-events/2025/4/27/revel' target='_blank' rel='noopener noreferrer'>
                      NOCCO - Revel
                      <br />
                      Blessed Sacrament Church (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Blessed Sacrament*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 3 Saturday @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.blessed-sacrament.org/light' target='_blank' rel='noopener noreferrer'>
                      Song of Light
                      <br />
                      Blessed Sacrament Church (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*ASO - Ode to Joy*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 4 Sunday @ 2:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202425-season/may' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - Ode to Joy
                      <br />
                      Federal Way Performing Arts and Event Center (Federal Way, WA)
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
