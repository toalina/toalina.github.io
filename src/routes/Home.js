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
                {/*PSQ - Shoreline Music Summit*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 11 Saturday @ 8PM</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet - Shoreline Music Summit
                      <br />
                      London Bridge Studios (Shoreline, WA)
                    </p>
                  </div>
                </div>
                {/*ASO - Oct 2025*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 12 Sunday @ 2:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202526-season/this-beautiful-earth' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - This Beautiful Earth
                      <br />
                      Auburn Performing Arts Center (Auburn, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Roman Goron - Earshot Jazz*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 19 Sunday @ 6PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.earshot.org/event/roman-goron-the-transient-arboretum/' target='_blank' rel='noopener noreferrer'>
                      Roman Goron - The Transient Arboretum
                      <br />
                      Town Hall - Forum (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Village Theatre - Brigadoon*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>October 25 Saturday @ 2PM & 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://villagetheatre.org/see-a-show/brigadoon' target='_blank' rel='noopener noreferrer'>
                      Village Theatre - Lerner and Loewe's Brigadoon 
                      <br />
                      Everett Performing Arts Center (Everett, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*KOTM - Whats going on fest*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 14 Friday @ 8PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.waynehorvitz.com/event/shmp-presents-whats-going-on-festival-at-the-royal-room-in-seattle-wa-5/' target='_blank' rel='noopener noreferrer'>
                      Kin of the Moon String Orchestra - What's Going On Fest
                      <br />
                      Good Shepherd Chapel Performance Space (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*PSQ - KEXP*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>November 16 Sunday @ 7PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.kexp.org/events/kexp-events/death-music-2025/' target='_blank' rel='noopener noreferrer'>
                      Passenger String Quartet - KEXP Presents Death & Music
                      <br />
                      Town Hall (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*ASO - Dec 2025*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>December 8 Monday @ 7PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202526-season/holiday-spectacular' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - Holiday Spectacular
                      <br />
                      Auburn Performing Arts Center (Auburn, WA)
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
