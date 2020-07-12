import React from 'react'

class ContactDetails extends React.Component {
  render () {
    return (
      <div className='contact-details'>
        <h1 className='header-title'>Contact</h1>
        <div className='contact-details-wrapper'>
          <div className='contact-image-wrapper'>
            <img src='../alina-jerrys.jpg' alt='Alina To at Jerrys' />
            <p>Photo by Christopher Staples</p>
          </div>
          <div className='contact-text-wrapper'>
            <p><i class='far fa-envelope' /><a href='mailto:someone@yoursite.com?subject=Mail from Our Site'>alina.to@gmail.com</a></p>
            <p><i class='fab fa-instagram' /><a href='https://www.instagram.com/geniuspluslove/' target='_blank' rel='noopener noreferrer'>Instagram</a></p>
            <p><i class='fas fa-bread-slice' /><a href='https://www.instagram.com/alinadough/' target='_blank' rel='noopener noreferrer'>Alina Dough</a></p>
            <p><i class='fab fa-linkedin' /><a href='https://www.linkedin.com/in/alinato/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
            <p><i class='fab fa-github' /><a href='https://github.com/toalina' target='_blank' rel='noopener noreferrer'>Github</a></p>
            <p>Based in 206.
              <br />
              Raised in 360.
              <br />
              Roots in 852.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDetails
