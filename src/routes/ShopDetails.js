import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class ShopDetails extends React.Component {
  render () {
    return (
      <div className='shop-details'>
        <h1 className='header-title'>Shop</h1>
        <div className='shop-details-intro'>
        <p>Welcome to my shop! To order any available face masks, send me a message including the following details:
          <ul>
            <li>Wear Preference</li>
            <li>Fabric Name</li>
            <li>Delivery method: Pick up // USPS Mail // Delivery (Seattle area only)</li>
          </ul>
        </p>
        </div>

        <section className='shop-section'>
        <div className='shop-details-section-wrapper' id='how-to-order'>
            <h2>How to Order</h2>
            <p>Email alina!</p>
            <p>Venmo or Paypal accepted</p>


          </div>






        </section>

      </div>
    )
  }
}

export default ShopDetails
