import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './detail.css'

function Detail() {
  return (
    <>
    <Navbar/>
    <div className='details-container'>
        <div className="details">
            <div className="left-detail">
                <div>
                <img id='photo-link' src="https://i0.wp.com/media.zeinaskitchen.se/2017/01/29541044_874036196125961_7591093746887057773_n.jpg?fit=550%2C550&ssl=1" alt="Dish Photo"/>
                <form id='comment-form'>
                    <label htmlFor="">Add Comment</label>
                    <textarea name="" id="" placeholder='Comment Here !'></textarea>
                    <label htmlFor="">Rate the recipe !</label>
                    <select name="" id="star-selection">
                        <option value="1Star">1 Stars
                        </option>
                        <option value="2Stars">2 Stars
                        </option>
                        <option value="3Stars">3 Stars
                        </option>
                        <option value="4Stars">4 Stars
                        </option>
                        <option value="5Stars">5 Stars
                        </option>
                    </select>
                    <input type="submit" value="Submit" id='submit-comment'/>
                </form>
                </div>
                
            </div>
            <div className="right-detail">
                <div className="recipe-detail">
                    <div className="info">
                        <h2>Dish Name :</h2>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="info">
                    <h2>Ingrediants :</h2>
                        <p>asdaa</p>
                    </div>
                    <div className="info">
                    <h2>Steps :</h2>
                        <p>asdaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Detail