// imports

import Navbar from "../../Components/Navbar/Navbar"
import { Post } from "../Home/Home"
// import BollywoodData from "./Data"
import { useNavigate } from "react-router-dom"
import image from '../../image/moun.jpg'
import '../../CSS/page.css'
import Logo from "../../Components/Logo/logo"
// import { useState, useEffect } from "react"
import { SciData } from "./Data"


function Science(){
    // console.log("data",SciData)

    const nav = useNavigate()

    const handleNavigate = (id, item) =>{
        nav(`/Science/${id}`,{ state: {item}})
    }
    return(

      <>
        <Logo />
        <Navbar />
        <div id="Main-container">
            <div>
                {/* Main container */}
                <h1 className='heading'>Bollywood</h1>
                < hr className="subhr"/>
                
                {SciData.map((item, index) =>{
                    return(
                        <>
                            
                            <div key={item.id} className="holly">
                                <img src={item.urlToImage} alt="" className='image2' onClick={() => handleNavigate(item.id , item)}/>
                                <div className="holly-content">
                                    <h3  onClick={() => handleNavigate(item.id , item)}>author: {item.author}</h3>
                                    
                                        <br/>

                                    <p className="api-content"  onClick={() => handleNavigate(item.id , item)}>{item.title} </p>

                                    <p className='published'>{item.publishedAt}</p>
                                </div>
                            </div>
                            
                            <hr className="api-hr"/>
                        </>
                    )
                })}     
            </div>

            {/* Right container*/}

            <div id="Api-post-main">
                <div className='post' id="Api-post">Top Posts</div>
                <hr className='subhr' id='hr'/>

                <div><img src={image} alt='' className='img'/></div>
                <h2 className='postTitle'>Catch waves with an adventure guide</h2>
                <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

                <Post travel = "Travel" day = "/ january 14 2023" />
                {/* <Posts travel = "Travel" day = "/ january 14 2023"></Posts>
                <Posts travel = "Travel" day = "/ january 14 2023"></Posts>    */}
                <br/> <br/> 
                <div className='ad'><span id='ad'>Advertistement</span></div>
            </div>
       </div>
      </>
    )
}

export default Science


