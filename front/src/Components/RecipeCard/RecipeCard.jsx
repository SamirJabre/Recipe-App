import React from 'react'
import './recipecard.css'
import {useNavigate} from 'react-router-dom'

function RecipeCard({title,description,image}) {
  let navigate=useNavigate()
  return (
    <div className="recipe-container">
        <div className="content">
            <img id='photo-link' src={image} alt="Dish Photo" />
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={()=>navigate('/detail')}>More Details</button>
            
        </div>
    </div>
  )
}

export default RecipeCard