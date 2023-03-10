import React from 'react'
import { Link } from 'react-router-dom'

class PastShows extends React.Component {
  render () {
    return (
      <div className='past-shows'>
        <div>
          <section>
            <h1 className='header-title shows-list-title'>
              Past Shows
            </h1>
            <div className='shows-list-container'>
              <div className='shows-list'>
                <h3>2023</h3>
                {/*Paul Kikuchi - Omoide*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 26 Sun</h4>
                    <p className='show-text-link'><a href='https://www.seattlerep.org/audience-programs/upcoming-events/past-events/what-is-home-japanese-american-stories-from-omoide/' target='_blank' rel='noopener noreferrer'>
                      Paul Kikuchi's In Shadows Performance
                      <br />
                      Seattle Repatory Theater Poncho Forum
                      </a>
                    </p>
                  </div>
                </div>
                {/*ASO-January*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 25 Sat</h4>
                    <p className='show-text-link'>
                      Auburn Symphony Orchestra
                      <br />
                      Federal Way Performing Arts Center
                    </p>
                  </div>
                </div>
                {/*Tomo*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 8 Wed</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Rabbit Box (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Jan 31 Tues</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet
                      <br />
                      Seattle Aquarium (Private Event)
                    </p>
                  </div>
                </div>
                {/*ASO-January*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Jan 29 Sun @ 2:30PM</h4>
                    <p className='show-text-link'>
                      Auburn Symphony Orchestra
                      <br />
                      Auburn Performing Arts Center
                    </p>
                  </div>
                </div>
                {/*PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Jan 20 Fri</h4>
                    <p className='show-text-link'>
                      Passenger String Quartet
                      <br />
                      Showbox SODO (Private Event)
                    </p>
                  </div>
                </div>

                <h3>2022</h3>
                {/*Nutcracker*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Dec 10 Sat 2PM</h4>
                    <p className='show-text-link'>
                      Nutcracker / Emerald Ballet Theatre / Emerald Ballet Theatre Orchestra
                      <br />
                      Northshore Performing Arts Center (Bothell, WA)
                    </p>
                  </div>
                </div>
                {/*Lee Oskar*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Oct 22 Sat</h4>
                    <p className='show-text-link'>
                      Lee Oskar / Passenger String Quartet
                      <br />
                      Northshore Performing Arts Center (Bothell, WA)
                    </p>
                  </div>
                </div>
                {/*Cumulus*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Oct 21 Fri</h4>
                    <p className='show-text-link'>
                      Cumulus CD Release Show
                      <br />
                      Fremont Abbey (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Auburn Symphony Orchestra*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Oct 10 Sun</h4>
                    <p className='show-text-link'>
                      Auburn Symphony Orchestra
                      <br />
                      Auburn Performing Arts Center
                    </p>
                  </div>
                </div>
                {/*Michael Buble*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Sept 28 Wed</h4>
                    <p className='show-text-link'>
                      Michael Buble
                      <br />
                      Climate Pledge Arena (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Michael Buble*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Sept 27 Tues</h4>
                    <p className='show-text-link'>
                      Michael Buble
                      <br />
                      Moda Center (Portland, OR)
                    </p>
                  </div>
                </div>
                {/*John Van Deusen*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Sept 16 Fri</h4>
                    <p className='show-text-link'>
                      John Van Deusen / Passenger String Quartet
                      <br />
                      Emerald City Trapeze Arts (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Tomo Nakayama*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Sept 8 Thurs</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Triple Door (Seattle, WA)
                    </p>
                  </div>
                </div>
                {/*Head and the heart*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 12 Fri + 13 Sat</h4>
                    <p className='show-text-link'>
                      The Head and the Heart / Passenger String Quartet
                      <br />
                      Marymoor Park
                    </p>
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
                    <h4 className='show-text-date'>July 22 Fri</h4>
                    <p className='show-text-link'>
                      Tomo Nakayama
                      <br />
                      Timber Fest (Carnation, WA)
                    </p>
                  </div>
                </div>
                {/*Auburn Symphony Orchestra*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>July 7 Thurs</h4>
                    <p className='show-text-link'>Auburn Symphony Orchestra
                    <br />
                    Benaroya Hall (Seattle, WA)</p>
                  </div>
                </div>
                {/*Tomo Nakayama*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>June 3 Fri</h4>
                    <p className='show-text-link'>Tomo Nakayama
                    <br />
                    Tractor Tavern (Seattle, WA)</p>
                  </div>
                </div>
                {/*Seattle Peace Chorus*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 30 Mon</h4>
                    <p className='show-text-link'>Seattle Peace Chorus, Mozart Requium Singalong
                    <br />
                    Seattle Center, Intiman Courtyard (Seattle, WA)</p>
                  </div>
                </div>
                {/*PSQ & Goodnight Suzie*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 22 Sun</h4>
                    <p className='show-text-link'>Passenger String Quartet w/ Goodnight Suzie
                    <br />
                    Bake's Place (Bellevue, WA)</p>
                  </div>
                </div>
                {/*Jim Knapp Memorial / Scrape*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>May 9 Mon</h4>
                    <p className='show-text-link'>Scrape, Jim Knapp Celebration
                    <br />
                    Chapel Performance Space at Good Shepherd Center (Seattle, WA)</p>
                  </div>
                </div>
                {/*Lee Oskar / PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>March 11 Fri</h4>
                    <p className='show-text-link'><a href='https://tickets.thetripledoor.net/eventperformances.asp?evt=1868' target='_blank' rel='noopener noreferrer'>Passenger String Quartet w/ Lee Oskar
                    <br />
                    The Triple Door (Seattle, WA)</a></p>
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

                <h3>2021</h3>
                {/*Andrea Bocelli*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Nov 3 Wed</h4>
                    <p className='show-text-link'><a href='https://climatepledgearena.com/event/andrea-bocelli/' target='_blank' rel='noopener noreferrer'>Andrea Bocelli
                    <br />
                    Climate Pledge Arena (Seattle, WA)</a></p>
                  </div>
                </div>

                {/*Tomo CD release show*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Sept 18 Sat</h4>
                    <p className='show-text-link'><a href='https://do206.com/events/2021/9/18/tomo-nakayama-tickets' target='_blank' rel='noopener noreferrer'>Tomo Nakayama (CD Release Show)
                    <br />
                    Neptune Theater (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Downtown Summer Sounds w/ Puget Sound Strings*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 1 Sun</h4>
                    <p className='show-text-link'><a href='https://downtownseattle.org/events/downtown-summer-sounds/' target='_blank' rel='noopener noreferrer'>
                      Downtown Summer Sounds w/ Puget Sound Strings
                    <br />
                    Westlake Park (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Downtown Summer Sounds w/ Puget Sound Strings*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>July 18 Sun</h4>
                    <p className='show-text-link'><a href='https://downtownseattle.org/events/downtown-summer-sounds/' target='_blank' rel='noopener noreferrer'>
                      Downtown Summer Sounds w/ Puget Sound Strings
                    <br />
                    Westlake Park (Seattle, WA)</a></p>
                  </div>
                </div>

                <h3>2020</h3>
                {/*Chris Icasiano CD Release*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 29 Sat</h4>
                    <p className='show-text-link'><a href='http://originarts.com/artists/artist.php?Artist_ID=180' target='_blank' rel='noopener noreferrer'>Chris Icasiano CD Release Show
                    <br />
                    Wing Luke Museum (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Scrape*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 13 Thurs 8PM</h4>
                    <p className='show-text-link'><a href='https://www.facebook.com/events/479052759449646/' target='_blank' rel='noopener noreferrer'>Scrape
                    <br />
                    Chapel Performance Space at Good Shepherd Center (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Kaley Eaton*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 21 Fri</h4>
                    <p className='show-text-link'><a href='http://www.kaleylaneeaton.com/' target='_blank' rel='noopener noreferrer'>Kaley Eaton: Cornish Faculty Composer Concert
                    <br />
                    Cornish College of Arts (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*NOCCO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 23 Sun 7:30PM</h4>
                    <p className='show-text-link'><a href='https://www.nocco.org/20192020-season' target='_blank' rel='noopener noreferrer'>North Corner Chamber Orchestra
                    <br />
                    Seattle Town Hall (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*NOCCO*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Feb 22 Sat 2PM</h4>
                    <p className='show-text-link'><a href='https://www.nocco.org/20192020-season' target='_blank' rel='noopener noreferrer'>North Corner Chamber Orchestra
                    <br />
                    Youngstown Cultural Arts Center (Seattle, WA)</a></p>
                  </div>
                </div>

                {/*Tomo / Ings*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>January 23 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.eventbrite.com/e/hygge-party-with-ings-tomo-nakayama-sophia-duccini-fremont-abbey-tickets-79282655557' target='_blank' rel='noopener noreferrer'>Hygge Party w/ ings, Tomo Nakayama
                    <br />
                    Fremont Abbey (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Dessa / PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Jan 18 Sat</h4>
                    <p className='show-text-link'><a href='https://www.thecrocodile.com/e/dessa-with-string-quartet-75410311271/' target='_blank' rel='noopener noreferrer'>Dessa w/ String Quartet
                    <br />
                    The Crocodile (Seattle, WA)</a></p>
                  </div>
                </div>


                <h3>2019</h3>
                {/*Emerald Theater Nutcracker*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Dec 15 Sun (2PM)</h4>
                    <p className='show-text-link'><a href='http://npacf.org/the-nutcrackerupcoming-concerts-2' target='_blank' rel='noopener noreferrer'>The Nutcracker w/ Emerald Theatre Ballet Orchestra
                    <br />
                    Northshore Performing Arts Center (Bothell, WA)</a></p>
                  </div>
                </div>

                {/*Emerald Theater Nutcracker*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Dec 14 Sat (2PM)</h4>
                    <p className='show-text-link'><a href='http://npacf.org/the-nutcrackerupcoming-concerts-2' target='_blank' rel='noopener noreferrer'>The Nutcracker w/ Emerald Theatre Ballet Orchestra
                    <br />
                    Northshore Performing Arts Center (Bothell, WA)</a></p>
                  </div>
                </div>
                {/*Ings CD Release*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Nov 16 Sat</h4>
                    <p className='show-text-link'><a href='https://www.eventbrite.com/e/ings-album-release-ashley-eriksson-lake-guest-ballard-homestead-tickets-73881727235' target='_blank' rel='noopener noreferrer'>Ings Album Release Show
                    <br />
                    Ballard Homestead (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Ampersand*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Nov 7 Thurs (6PM)</h4>
                    <p className='show-text-link'><a href='https://forterra.org/event/ampersand-live-2019' target='_blank' rel='noopener noreferrer'>Ampersand Live w/ Tomo Nakayama
                    <br />
                    The Moore Theater (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Cabinet of Dr. Caligari*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Oct 31 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.theroyalroomseattle.com/' target='_blank' rel='noopener noreferrer'>Live Soundtrack to Silent Film: The Cabinet of Dr. Caligari
                    <br />
                    The Royal Room (Seattle, WA)</a></p>
                  </div>
                </div>

                {/*The Who*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Oct 19 Sat</h4>
                    <p className='show-text-link'><a href='https://www.thewho.com/tour/' target='_blank' rel='noopener noreferrer'>The Who
                    <br />
                    T-Mobile Park (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Josh Groban*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 25 Sun</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                    <br />
                    Chateau Ste Michelle Winery (Woodinville, WA)</a></p>
                  </div>
                </div>
                {/*Josh Groban*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 24 Sat</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                  <br />
                  Chateau Ste Michelle Winery (Woodinville, WA)</a></p>
                  </div>
                </div>
                {/*Josh Groban*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 22 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                  <br />
                  McMenamin's Edgefield Amphitheater (Troutdale, OR)</a></p>
                  </div>
                </div>
                {/*Josh Groban*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 20 Tues</h4>
                    <p className='show-text-link'><a href='https://www.joshgroban.com/tour' target='_blank' rel='noopener noreferrer'>Josh Groban
                  <br />
                  Les Schwab Amphitheater (Bend, OR)</a></p>
                  </div>
                </div>
                {/*Levi Gillis*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 16 Fri</h4>
                    <p className='show-text-link'><a href='http://levigillis.com/' target='_blank' rel='noopener noreferrer'>Levi Gillis
                  <br />
                  Chapel Performance Space at the Good Shepherd Center (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 9 Fri</h4>
                    <p className='show-text-link'><a href='https://www.andrewjoslynmusic.com/passenger-string-quartet/' target='_blank' rel='noopener noreferrer'>Passenger String Quartet
                  <br />
                  Downtown Seattle</a></p>
                  </div>
                </div>
                {/*Scrape*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>Aug 1 Thurs</h4>
                    <p className='show-text-link'><a href='https://www.facebook.com/ScrapeMusic/' target='_blank' rel='noopener noreferrer'>Scrape
                  <br />
                  Chapel Performance Space at the Good Shepherd Center (Seattle, WA)</a></p>
                  </div>
                </div>
                {/*Mark Lanegan / PSQ*/}
                <div className='show-container'>
                  <div className='show-icon-wrapper'>
                    <img src='assets/violin.svg' alt='Violin Icon made by freepik.com from www.flaticon.com' className='icon-violin' />
                  </div>
                  <div className='show-text-wrapper'>
                    <h4 className='show-text-date'>July 12 Sat</h4>
                    <p className='show-text-link'><a href='http://artisthome.org/timber-outdoor-music-festival-lineup-announcement/' target='_blank' rel='noopener noreferrer'>Mark Lanegan & The Passenger String Quartet
                  <br />
                  Timber Music Festival (Carnation, WA)</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='home-contact-text'>
          <Link to='/contact' className='link pulse'>Say Hello <i class='fas fa-heart fa-spin fa-lg' /></Link>
        </div>
      </div>
    )
  }
}

export default PastShows

