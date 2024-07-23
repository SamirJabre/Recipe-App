import React from 'react'
import './create.css'
import Navbar from '../../Components/Navbar/Navbar'

function Create() {
  return (
    <>
    <Navbar/>
    <div className="create-recipe-container">
        <div className="create-recipe">
            <div className="left-side">
              <div className="add-image">
                <input type="file" />
              </div>
            </div>
            <div className="right-side">
              <div className="add-recipe">
                <form id='recipe-form'>
                  <label htmlFor="">Recipe Name*</label>
                  <input type="text" />
                  <label htmlFor="">Recipe Ingrediants*</label>
                  <input type="text" />
                  <label htmlFor="">Steps*</label>
                  <textarea name="" id=""></textarea>
                  <button>Create Recipe</button>
                </form>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Create