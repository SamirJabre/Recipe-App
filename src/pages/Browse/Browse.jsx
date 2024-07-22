import React, {useEffect} from 'react'
import './browse.css'
import gsap from 'gsap'
import Navbar from '../../Components/Navbar/Navbar'
import RecipeCard from '../../Components/RecipeCard/RecipeCard'

function Browse() {

  useEffect(()=>{
    fetch('http://localhost/Recipe-Backend/API/getrecipes.php')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("errorr occurd"))
  },[])
  

  return (
    <>
    <Navbar/>
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    </>
  )
}

export default Browse