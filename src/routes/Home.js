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
                <h3>2024</h3>
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
                {/*PSQ - Aquarium*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 8 Thurs</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet - Seattle Aquarium Benefit
                      <br />
                      Seattle Aquarium (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*SMCO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 10 Sat @ 2:30PM</h4>
                    <p className='show-text-link'>
                      Seattle Metropolitan Chamber Orchestra
                      <br />
                      Century Ballroom (Seattle, WA)
                    </p>
                  </div>
                </div>
                
                 {/*Auburn Symphony Orchestra*/}
                 <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 16 Fri @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202324-season/chamberfeb' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - BRAVO Series String Quartet
                      <br />
                      Postmark Center for the Arts (Auburn, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Tomo - Skate Rink*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 23 Fri</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Southgate Roller Rink (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*ASO - Lights Camera Action*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>February 24 Sat @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202324-season/pops' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - Lights, Camera, Action!
                      <br />
                      Federal Way Performing Arts and Event Center (Federal Way, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*Sharon Williams*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 1 Fri @ 7:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.seattlesymphony.org/en/benaroyahall/bh-calendar/2023-2024/23sharon-nyree-williams' target='_blank' rel='noopener noreferrer'>
                      An Evening with Sharon Nyree Williams
                      <br />
                      Illsley Ball Nordstrom Recital Hall - Benaroya Hall (Seattle, WA)
                      </a>
                    </p>
                  </div>
                </div>
                {/*LWSO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 4 Mon @ 10AM / 11:30AM</h4>
                    <p className='show-text-link'>
                      Lake Washington Symphony Orchestra - Education Concerts
                      <br />
                      Overlake Christian Church (Redmond, WA)
                    </p>
                  </div>
                </div>
                {/*LWSO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 5 Tues @ 10AM / 11:30AM</h4>
                    <p className='show-text-link'>
                      Lake Washington Symphony Orchestra - Education Concerts
                      <br />
                      Overlake Christian Church (Redmond, WA)
                    </p>
                  </div>
                </div>
                {/*Kaley Lane Eaton*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 15 Fri @ 8PM</h4>
                    <p className='show-text-link'>
                      Kaley Lane Eaton Album "Lookout" Release Show
                      <br />
                      Chapel Performance Space at Good Shepherd Center (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*ASO - A Sea Symphony by Ralph Vaughan Williams*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 4 Sat @ 8PM</h4>
                    <p className='show-text-link'>
                      Auburn Symphony Orchestra - A Sea Symphony by Ralph Vaughan Williams
                      <br />
                      St. James Catheral (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*ASO - A Sea Symphony by Ralph Vaughan Williams*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 5 Sun @ 2:30PM</h4>
                    <p className='show-text-link'>
                      <a href='https://www.auburnsymphony.org/202324-season/may' target='_blank' rel='noopener noreferrer'>
                      Auburn Symphony Orchestra - A Sea Symphony by Ralph Vaughan Williams
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
