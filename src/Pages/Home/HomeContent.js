import './Home'
import Home from './Home'
import {SubContent, LatestContent, Latestarticle, Articlecontent, Post, Lateststories, LatestStoriestitle} from './Home'
import image from '../../image/moun.jpg'
import image3 from '../../image/img3.jpg'
import png from '../../image/arrow.png'
import png1 from '../../image/arrow-side.png'

export function HomeContent(props){    
    return(
        <div>
            <Home></Home>
            <SubContent headName = "The Latest" />
            
            {/* Latest Content */}
            <div className='latestcontent'>
                <LatestContent content="Joshua Tree Overnight Adventure" subtext="" />
                <LatestContent content="Joshua Tree Overnight Adventure" subtext="" />
                <LatestContent content="Joshua Tree Overnight Adventure" subtext="" />
            </div>

            < Latestarticle Articlehead = "Latest Articles" />
            
            
           <div id='ArticleContent'>
                <div >
                <Articlecontent ArticleTile="Taj Mahal" />
                <Articlecontent ArticleTile="Taj Mahal" />
                <Articlecontent ArticleTile="Taj Mahal" />
                <Articlecontent ArticleTile="Taj Mahal" />
                <div id="loadArticle">
                    <img src={png} alt='' className='downArrow' />
                    <div>LOAD MORE</div>
                </div>
                <div className='p'>
                    <img src = {image3} alt=' ' className='postimg' />
                    
                </div>
            </div>
                <div >
                    <div className='ad'><span id='ad'>Advertistement</span></div>

                    <div className='post'>Top Posts</div>
                    <hr className='subhr' id='hr'/>

                    <div><img src={image} alt='' className='img'/></div>
                    <h2 className='postTitle'>Catch waves with an adventure guide</h2>
                    <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

                    <Post travel = "Travel" day = "/ january 14 2023"></Post>
                    <Post travel = "Travel" day = "/ january 14 2023"></Post>
                    <Post travel = "Travel" day = "/ january 14 2023"></Post>
                    
                </div>
           </div>

           <LatestStoriestitle title="Latest Stories"></LatestStoriestitle>
            
            <div id='LatestStories'>
                <Lateststories tech = "TECH" day ="/ TODAY AT 11:54"></Lateststories>
                <hr className='middle-hr'/>
                <Lateststories tech = "TECH" day ="/ TODAY AT 11:54"></Lateststories>
                <hr className='middle-hr'/>
                <Lateststories tech = "TECH" day ="/ TODAY AT 11:54"></Lateststories>
            </div>

            <hr className='LSHR'/>

            <div id='view-more'>
                <span>VIEW MORE</span>
                <img src={png1} alt=''/>
            </div>

        </div>
    )
}

export default HomeContent

// import './Home.css'
// import { useState, useEffect } from 'react'


// const HomeContent = () => {
//     const [data, setData] = useState([])

//     const FetchApi = () => {
//         return fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=90b5566f6c314946a71f7e0be8d307c4")
//             .then((response) => {
//                 return response.json();
//             })

//             .then((res) => {
//                 setData(res?.articles)

//             })
//     }

//     // console.log(data)
//     useEffect(() => {
//         FetchApi()
//     }, [])

//     return (
//         <>
//             {
//                 data.slice(0, 1).map((item, index ) => (
//                     <div className='imgs' key={index}>

//                         <div className='gridimg1'>
//                             <div className='title'>{item?.title}</div>
//                             <img src={item?.urlToImage} alt='image1' className='image1' />
//                         </div>
//                         <div className='fleximg'>
//                             {
//                                 data.slice(1, 3).map((item , index) => (

//                                     <div className='grid-img2' key={index}>
//                                         <div className='title'>{item?.title}</div>
//                                         <img src={item?.urlToImage} alt='image1' className='image2' />
//                                     </div>


//                                 ))
//                             }
//                         </div>
//                     </div>
//                 ))
//             }
//         </>
//     )
// }


// // Latest Content
// export function Subcontent(props) {
//     return (
//         <div>
//             <h2 className='subcontent'>{props.headName}</h2>
//             <hr className='subhr' />
//         </div>
//     )
// }

// export function Latestcontent(props) {

//     const [data, setData] = useState([])

//     const FetchApi = () => {
//         return fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=90b5566f6c314946a71f7e0be8d307c4")
//             .then((response) => {
//                 return response.json();
//             })

//             .then((res) => {
//                 setData(res?.articles)

//             })
//     }
//     // console.log(data)

//     useEffect(() => {
//         FetchApi()
//     }, [])
//     return (

//         <>
//             <div id='LC'>
//                 {
//                     data.slice(0, 3).map((item, index) => (
//                         <div className='' key={index}><img src={item?.urlToImage} alt='image2' className='latestcontentimg' />
//                             <h3>{item?.title}</h3>
//                             <p>{item?.description}</p>
//                             <p className='Travel' id='lc'>{item?.source?.name} <span> {item.publishedAt}</span></p>
//                         </div>

//                     ))
//                 }
//             </div>
//         </>
//     )
// }


// // Latest Articles

// export function LatestArticle(props) {
//     return (
//         <div>
//             <h2 className='subcontent'>{props.Articlehead}</h2>
//             <hr className='subhr' />
//         </div>
//     )
// }

// export function ArticleContent(props) {
//     const [data, setData] = useState([])

//     const FetchApi = () => {
//         return fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=90b5566f6c314946a71f7e0be8d307c4")
//             .then((response) => {
//                 return response.json();
//             })

//             .then((res) => {
//                 setData(res?.articles)

//             })
//     }
//     // console.log(data)

//     useEffect(() => {
//         FetchApi()
//     }, [])
//     return (
//         <div >
//             <div className='ArticleContent'>
//                 {
//                     data.slice(3, 7).map((item ,index) => (

//                         <div key={index}>
//                             <hr className='hr' />
//                             <div className='ArticleContent-row' >
//                                 <img src={item?.urlToImage} alt='image2' className='ArticleContentimg' />
//                                 <div className='ArticlesContent-column'>
//                                     <h3>{item?.title}</h3>
//                                     <p>{item?.description}</p>
//                                     <p className='Travel' id='lc'>{item?.source?.name} <span> {item?.publishedAt}</span></p>
//                                 </div>
//                             </div>
//                         </div>


//                     ))
//                 }
//             </div>

//         </div>
//     )
// }


// // posts
// export function Posts(props) {

//     const [data, setData] = useState([])

//     const FetchApi = () => {
//         return fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=90b5566f6c314946a71f7e0be8d307c4")
//             .then((response) => {
//                 return response.json();
//             })

//             .then((res) => {
//                 setData(res?.articles)

//             })
//     }

//     // console.log(data)
//     useEffect(() => {
//         FetchApi()
//     }, [])
//     return (
//         <>
//             <div className='postContainer'>
//                 {
//                     data.slice(0, 3).map((item, index) => (
//                         <div key={index}>
//                             <hr id='post-hr' />
//                             <div className='pImg' >
//                                 <img src={item?.urlToImage} alt="image3" className='pimg' />
//                                 <div id='AT'>
//                                     <p className='title'>{item?.author}</p>
//                                     <p className='Travel'>{item?.source?.name} <br /> <span id="travelDate"> {item?.publishedAt}</span></p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }


// export function LatestStoriesTitle(props) {
//     return (
//         <div id='LatestStoriesTitle'>
//             <h1>{props.title}</h1>
//             <hr className='subhr' />
//             <hr className='LSHR ' id='Latest-hr' />
//         </div>
//     )
// }

// export function LatestStories(props) {
//     return (
//         <div id='LatestStories'>

//             <div>
//                 <h3>Catch waves with an adventure guide</h3>
//                 <p className='Latest-para'>The Taj Mahal is an ivory-white marble mausoleum on the <br /> south bank of the
//                     Yamuna river in the Indian city of Agra.<br /> It  was commissioned in 1632 by the Mughal emperor, <br />Shah Jahan (reigned from 1628 to 1658),
//                     to house the <br />tomb of his favourite wife, Mumtaz Mahal.
//                 </p>

//                 <p className='Tech'>{props.tech} <span id="Date"> {props.day}</span></p>
//             </div>

//         </div>
//     )
// }


// export default HomeContent