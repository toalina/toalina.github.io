import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

class AboutDetails extends React.Component {
  render () {
    return (
      <div className='about-details'>
        <div className='about-header'>
          <h1 className='header-title'>About the Violinist</h1>
        </div>
        <div className='about-feature-wrapper'>
          <div className='about-feature-image'>
            <img src='../assets/violin-bob-scoverski.jpg' alt='Alina at Fremont Abbey, by Bob Scoverski' />
            <p>Photo by Bob Scoverski</p>
          </div>
          <div className='about-feature-text'>
            <p>
              Professional musician with over 20 years of experience on violin, studio recording and live performances. As a classically trained violinist, Alina has expanded her expertise across jazz, rock, pop, hip hop, experimental improvisation, and folk. She is well-versed across multiple genres and performs both acoustically and amplified (with a dialed-in pedalboard). She occasionally plays keys and sings, too.
            </p>
            <p> 
              See available <Link to='#services' className='link'>services</Link>, <Link to='/' className='link'>upcoming shows</Link>, and some <Link to='/media' className='link'>recorded performances</Link>.
            </p>
          </div>
        </div>
        <section className='about-list'>
          <h2>Notable Clients & Collaborators:</h2>
          <h3>Non-Orchestral</h3>
          <ul>
            <li>Fleet Foxes</li>
            <li>ODESZA</li>
            <li>Father John Misty</li>
            <li>Perfume Genius</li>
            <li>The Head and the Heart</li>
            <li>Ryuichi Sakamoto</li>
            <li>Wayne Horvitz</li>
            <li>Jherek Bischoff</li>
            <li>Sir Mix-A-Lot</li>
            <li>Macklemore</li>
            <li>Kygo</li>
            <li>Josh Groban</li>
            <li>Andrea Bocelli</li>
            <li>Michael Buble</li>
            <li>The Who</li>
            <li>Judy Collins</li>
            <li>Matt Cameron</li>
            <li>Duff McKagan</li>
            <li>Jeremy Enigk (of Sunny Day Real Estate)</li>
            <li>Leon Bridges</li>
            <li>Tomo Nakayama</li>
            <li>Built to Spill</li>
            <li>Pedro the Lion </li>
            <li>Amanda Palmer</li>
            <li>Mirah</li>
            <li>DJ Spooky</li>
            <li>Joshua Roman</li>
            <li>Byron Au Yong</li>
            <li>Degenerate Art Ensemble</li>
            <li>Passenger String Quartet</li>
            <li>Scrape</li>
            <li>Seattle Music Inc.</li>
            <li>Trans Siberian Orchestra</li>
            <li>Pickwick</li>
            <li>Ahamefule Oluo</li>
            <li>Laura Gibson</li>
            <li>Paul Kikuchi</li>
            <li>Game of Thrones</li>
            <li>DOTA 2 The International</li>
          </ul>
          
            
          <h3>Orchestral</h3>
          <ul>
            <li>Auburn Symphony Orchestra</li>
            <li>Seattle Chamber Orchestra</li>
            <li>Seattle Modern Chamber Orchestra</li>
            <li>Symphony Tacoma</li>
            <li>NOCCO (North Corner Chamber Orchestra)</li>
            <li>Lake Washington Symphony Orchestra</li>
            <li>Bellevue Philharmonic Orchestra</li>
            <li>Lake Union Civic Orchestra</li>
          </ul>
          <h3>Engineers</h3>
          <ul>
            <li>Erik Blood</li>
            <li>Phil Ek</li>
            <li>Jack Endino</li>
            <li>Martin Feveyear </li>
            <li>Christopher Colbert</li>
            <li></li>
          </ul>
          <h3>Recording Studios</h3>
          <ul>
            <li>London Bridge Studio</li>
            <li>Avast Recording Co.</li>
            <li>Hall of Justice Recording Studio</li>
            <li>Studio Litho</li>
            <li>Spectre Studios</li>
            <li>Studio X</li>
            <li>Bastyr University Chapel</li>
          </ul>
          <h2 name='services' id='services'>Hire Alina for:</h2>
          <ul>
            <li>Touring and live performances</li>
            <li>Recording sessions</li>
            <li>Music videos</li>
            <li>Commercial / television appearances</li>
            <li>Pit orchestra</li>
            <li>Weddings</li>
            <li>Private events / parties</li>
            <li>DJ and producer collaborations</li>
            <li>Contracting musicians</li>
          </ul>
        </section>

        <p><Link to='/contact'><i class='far fa-envelope fa-2x' /></Link></p>

        <p>Did you know Alina is also a <br /><NavLink className='link' to='/tech'>software developer</NavLink>?</p>
      </div>
    )
  }
}

export default AboutDetails
