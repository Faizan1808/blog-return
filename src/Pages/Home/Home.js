import Navbar from "../../Components/Navbar/Navbar"
// import HomeContent from './HomeContent'
// import {Subcontent, Latestcontent, LatestArticle, ArticleContent, Posts, LatestStories, LatestStoriesTitle} from './HomeContent'
import image from '../../image/img.jpg'
import image2 from '../../image/img2.jpg'
import image3 from '../../image/img3.jpg'
// import png from '../../image/arrow.png'
// import png1 from '../image/arrow-side.png'
import './Home.css'
import Logo from "../../Components/Logo/logo"


// contents

function Home(){
    return(
        <>
            <Logo></Logo>
            <Navbar></Navbar>
            <div className='imgs'>
    
                <div className='gridimg1'><img src={image} alt='image1' className='image1'/></div>
                <div className='fleximg'>
                    <div className='gridimg2'><img src={image} alt='image1' className='image2'/></div>
                    <div className='gridimg2'><img src={image} alt='image1' className='image2'/></div>
                </div>
            </div>
        </>
    )
}

// Latest Content
export function SubContent(props){
    return(
        <div>
            <h2 className='subcontent'>{props.headName}</h2>
            <hr className='subhr'/>
        </div>
    )
}

export function LatestContent(props){
    return(
        <div  id='LC'>

            <div className=''><img src={image2} alt='image2' className='latestcontentimg'/>
            <h3>{props.content}</h3>
            <p>Gujarat is vastly underrated and it’s a mystery to us why the <br />region 
            isn’t more well-known as a tourist destination. It has a <br />plethora of temples and palaces</p>
            <p className='Travel' id='lc'>Travel <span> / january 14 2023</span></p>
            </div>

        </div>
    )
}


// Latest Articles

export function Latestarticle(props){
    return(
        <div>
            <h2 className='subcontent'>{props.Articlehead}</h2>
            <hr className='subhr'/>
        </div>
    )
}

export function Articlecontent(props){
    return(
        <div >
            <hr className='hr'/> 
                <div className='ArticleContent'>
                    <img src={image3} alt="image3" className='ArticleContentimg' />
                    <div className='AT'>
                    <h2 className='ArticleTile'>{props.ArticleTile}</h2>
                    <p className="para">The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture.</p>
                    <p className='Travel'>Travel <span> / january 14 2023</span></p>
                    </div>
                </div>
                              
        </div>
    )
}


// posts
export function Post(props){
    return(
        <div className='postContainer'>
            
            <hr id='post-hr' />
            <div className='pImg'>
                <img src={image3} alt="image3" className='pimg' />
                    <div id='AT'>
                        <h2 className=''>Taj Mahal</h2>
                        <p className='Travel'>{props.travel} <span id="travelDate"> {props.day}</span></p>
                    </div>
            </div>

        </div>
       
    )
}


export function LatestStoriestitle(props){
    return(
        <div id='LatestStoriesTitle'>
            <h1>{props.title}</h1>
            <hr className='subhr'/>
            <hr className='LSHR ' id='Latest-hr'/>
        </div>
    )
}

export function Lateststories(props){
    return(
        <div id='LatestStories'>
            
            <div>
                <h3>Catch waves with an adventure guide</h3>
                <p className='Latest-para'>The Taj Mahal is an ivory-white marble mausoleum on the <br /> south bank of the 
                    Yamuna river in the Indian city of Agra.<br /> It  was commissioned in 1632 by the Mughal emperor, <br />Shah Jahan (reigned from 1628 to 1658), 
                    to house the <br />tomb of his favourite wife, Mumtaz Mahal.
                </p>

                <p className='Tech'>{props.tech} <span id="Date"> {props.day}</span></p>
            </div>

        </div>
    )
}




export default Home



