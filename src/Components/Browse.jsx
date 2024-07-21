import React from 'react'
import '../Styles/browse.css'

function Browse() {
  return (
    <div className="recipe-container">
        <div className="content">
            <img id='photo-link' src="https://i0.wp.com/media.zeinaskitchen.se/2017/01/29541044_874036196125961_7591093746887057773_n.jpg?fit=550%2C550&ssl=1" alt="Dish Photo" />
            <h1>Dish Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam iure vel nostrum sed hic. Minus libero a recusandae nihil.</p>
            <button>More Details</button>
            
        </div>
    </div>
  )
}

export default Browse