import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const ShopGallery = props => (
  <div className='shop-details-section-wrapper' id='gallery'>
    <h2>Gallery</h2>
    <div className="shop-details-text-wrapper">
        <p>
        <strong>Currently available mask fabrics.</strong>
        <br/>
        Follow <a href="https://www.instagram.com/alinasew" target="_blank" rel="noopener noreferrer" className="shop-link">[@alinasew]</a> on Instagram for new mask fabrics and volumes announcements.
        <br/>
        Please refer to <Link to='#how-to-order' className='shop-link'>[How to Order]</Link> to place an order. Thank you!
        </p>
    </div>
    <div className="gallery-row-wrapper">
      <div className='shop-image gallery-image'>
        <img src='../masks/green_biscuits.jpg' alt='Green biscuits mask with ear loops' />
        <p>Green Biscuits</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/green_biscuits_inside.jpg' alt='Green biscuits mask filter' />
        <p>Green Biscuits</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/yellow_little_triangles_ties.jpg' alt='Yellow little triangles mask with ties' />
        <p>Yellow Little Triangles</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/yellow_little_triangles_inside.jpg' alt='Yellow little triangles mask filter' />
        <p>Yellow Little Triangles</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/magenta_matsuri.jpg' alt='Magenta matsuri mask' />
        <p>Magenta Matsuri</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/magenta_matsuri_filter.jpg' alt='Magenta matsuri  mask filter' />
        <p>Magenta Matsuri</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/gray_spots_ties.jpg' alt='Gray spots mask with ties' />
        <p>Gray Spots</p>
      </div>
      <div className='shop-image gallery-image'>
        <img src='../masks/gray_spots_filter.jpg' alt='Gray spots mask filter' />
        <p>Gray Spots</p>
      </div>
    </div>
  </div>
)

export default ShopGallery
