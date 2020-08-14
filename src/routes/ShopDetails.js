import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class ShopDetails extends React.Component {
  render () {
    return (
      <div className='shop-details'>
        <h1 className='header-title'>Shop</h1>
        <div className='shop-details-intro'>
          <div className='shop-intro-image'>
            <img src='../masks/yellow_gingham_ties.jpg' alt='Yellow gingham mask with ties' />
          </div>
          <p>Wear a mask. Add a filter. COVID-19 doesn't care who you are.</p>
        </div>
        <ul id='shop-menu'>
          <li>Jump to:</li>
          <li>
            <Link to='#features' className='link'>Mask Features</Link>
          </li>
          <li>
            <Link to='#how-to-order' className='link'>How to Order</Link>
          </li>
          <li>
            <Link to='#gallery' className='link'>Gallery</Link>
          </li>
        </ul>

        <section className='shop-section'>
          <div className='shop-details-section-wrapper' id='intro'>
            <h2>Alinagami Mask</h2>
            <div className='mask-prices'>
              <h4>$17 / mask</h4>
              <h5>+ $3 by mail (Support USPS) or by delivery (Seattle area only)</h5>
              <h5>+ $0 for pick up (Capitol Hill neighborhood)</h5>
              <h6>Venmo and PayPal accepted</h6>
            </div>
            <p>All masks are final sale and may not be returned or exchanged.</p>
          </div>

          <div className='shop-details-section-wrapper' id='features'>
          <h2>Mask Features</h2>
            <div class="carousel js-flickity">
              <div class="carousel-cell">
                <img src='../masks/gray_dots_ties.jpg' alt='Gray dots mask with ties' />
              </div>
              <div class="carousel-cell">
                <img src='../masks/gray_dots_ties_inside.jpg' alt='Gray dots mask with ties inside' />
              </div>
              <div class="carousel-cell">
                <img src='../masks/gray_dots_filter.jpg' alt='Gray dots mask filter opening' />
              </div>
              <div class="carousel-cell">
                <img src='../masks/gray_dots_loops.jpg' alt='Gray dots mask with ear loops' />
              </div>
              <div class="carousel-cell">
                <img src='../masks/gray_dots_loops_closeup.jpg' alt='Gray dots mask with loops close up' />
              </div>
            </div>

            <h6>See <Link to='#gallery' className='link'>[Gallery]</Link> for available mask fabrics.</h6>


            <ul className='shop-details-list'>
              <li>Reusable, non-medical face mask.</li>
              <li>100% cotton, washed and pressed.</li>
              <li>Easy access pocket for filter.</li>
              <li>Double-layered construction.</li>
              <li>Box shape for comfort between nose and mouth.</li>
              <li>Adjustable ear loops or tie on cords.</li>
              <li>Removable nose and chin wires.</li>
              <li>Machine washable.</li>
              <li><Link to='/mask' className='shop-link'>[Instructions]</Link> for wear and care and filter recommendations.</li>
              <li>Eyeglasses and somewhat yawn friendly. (Yes, I tested yawning, enough space for a 50% yawn. If you're yawning at 100%, you should probably be at home.)</li>
            </ul>
          </div>

          <div className='shop-details-section-wrapper' id='how-to-order'>
            <h2>How to Order</h2>
            <h5>Send Alina an email at <a href="mailto: alina.to@gmail.com" target="_blank" rel="noopener noreferrer" class="shop-link">[alina.to@gmail.com]</a> with the following info:</h5>

            <ul className='shop-details-list'>
              <li>Fabric Name: See <Link to='#gallery' className='link'>[Gallery]</Link></li>
              <li>Wear Preference: Ear Loops // Ties</li>
              <li>Delivery Method: Mail // Delivery // Pick Up</li>
              <li>Number of Mask(s)</li>
            </ul>

            <h5>You can also send a message to <a href="https://www.instagram.com/alinasew" target="_blank" rel="noopener noreferrer" class="shop-link">[@alinasew]</a> on Instagram</h5>

          </div>

          <div className='shop-details-section-wrapper' id='gallery'>
            <h2>Gallery</h2>
            <p>
              Currently available mask fabrics. Mask availability may vary as this section is not updated immediately.
              <br/>
              Please refer to <Link to='#how-to-order' className='link'>[How to Order]</Link> to contact Alina to place order. Thank you!
            </p>
            <div className="gallery-row-wrapper">

              <div className='shop-image gallery-image'>
                <img src='../masks/world_travel_ties.jpg' alt='World travel mask with ties' />
                <p>World Travel</p>
              </div>

              <div className='shop-image gallery-image'>
                <img src='../masks/world_travel_filter.jpg' alt='World travel mask filter' />
                <p>World Travel</p>
              </div>

              <div className='shop-image gallery-image'>
                <img src='../masks/mint_gingham.jpg' alt='Mint gingham mask' />
                <p>Mint Gingham</p>
              </div>

              <div className='shop-image gallery-image'>
                <img src='../masks/gray_squiggly.jpg' alt='Gray squiggly mask' />
                <p>Gray Squiggly</p>
              </div>

              <div className='shop-image gallery-image'>
                <img src='../masks/80s_summer_loops.JPG' alt='80s summer with loops' />
                <p>80s Summer</p>
              </div>

              <div className='shop-image gallery-image'>
                <img src='../masks/80s_summer_loops_folded.jpg' alt='80s summer with loops folded' />
                <p>80s Summer</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default ShopDetails
