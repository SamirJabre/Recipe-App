import React, {useEffect} from 'react'
import './browse.css'
import gsap from 'gsap'
import Navbar from '../../Components/Navbar/Navbar'
import RecipeCard from '../../Components/RecipeCard/RecipeCard'
import { recipeRemote } from '../../data_source/remote/recipe'
import axios from 'axios'

function Browse() {
  const fetchRecipes=async()=>{
    await axios.get('http://localhost/Recipe-App/back/API/getrecipes.php')
    .then((result)=>{result.json()
      console.log(result);
    })
  }

  useEffect(async ()=>{
    fetchRecipes()
  },[])
  

  return (
    <>
    <Navbar/>
    <div className="recipe-display">
      <RecipeCard title={"TAboule"} description={"ASDKHJASFHGASK"}  image={"https://i0.wp.com/media.zeinaskitchen.se/2017/01/29541044_874036196125961_7591093746887057773_n.jpg?fit=550%2C550&ssl=1"}/>
      <RecipeCard title={"TAasddasdboule"} description={"ASDKHJASFHGASK"}  image={"https://i0.wp.com/media.zeinaskitchen.se/2017/01/29541044_874036196125961_7591093746887057773_n.jpg?fit=550%2C550&ssl=1"}/>
    </div>
    </>
  )
}

export default Browse