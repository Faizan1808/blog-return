import { useNavigate } from "react-router-dom"
import { Post } from "../Home/Home"
import image from '../../image/moun.jpg'
import Navbar from "../../Components/Navbar/Navbar"
import '../../CSS/page.css'
import { Techdata } from './Data'
import Logo from "../../Components/Logo/logo"


function Technology(){
    console.log("Technology: ", Techdata)

    const nav = useNavigate()

    const handleNavigate = (id, item) =>{
        nav(`/Technology/${id}`,{ state: {item}})
        console.log(id)
    }
    return(
           <>
                <Logo></Logo>
                <Navbar></Navbar>
                <div id="Main-container">
           
                <div>
                        <h1 className='heading'>Technology</h1>

                        <div>
                            {
                                Techdata.map((item) =>{
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
                                })
                            }
                        </div>
                </div>

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

export default Technology




// function Technology(){
//     const [data, setData] = useState([])

//     const fetchData = () =>{
//         return fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=90b5566f6c314946a71f7e0be8d307c4')
//                     .then((response)=>{
//                         return response.json();

//                     })
//                     .then((res)=>{
//                         setData(res?.articles);
//                         console.log(res.articles)
//                     })
//     }

//     useEffect(() =>{
//         fetchData()
//     }, [])

//     const nav = useNavigate()

//     const handleNavigate = (id, item) =>{
//         nav(`/Technology/${id}`,{ state: {item}})
//         console.log(id)
//     }
//     return(
//            <>
//                 <Logo></Logo>
//                 <Navbar></Navbar>
//                 <div id="Main-container">
           
//                 <div>
//                         <h1 className='heading'>Technology</h1>

//                         <div>
//                             {
//                                 data.slice(0,7).map((item, index) =>{
//                                     return(
//                                         <>
                                            
//                                             <div key={index} className="holly">
//                                                 <img src={item?.urlToImage} alt="" className='image2' onClick={() => handleNavigate(item.id , item)}/>
//                                                 <div className="holly-content">
//                                                     <h3  onClick={() => handleNavigate(item.id , item)}>author: {item?.author}</h3>
                                                    
//                                                         <br/>

//                                                     <p className="api-content"  onClick={() => handleNavigate(item.id , item)}>{item?.title} </p>

//                                                     <p className="Published">{item?.publishedAt}</p>
//                                                 </div>
//                                             </div>
                                            
//                                             <hr className="api-hr"/>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </div>
//                 </div>

//                     <div id="Api-post-main">
//                         <div className='post' id="Api-post">Top Posts</div>
//                         <hr className='subhr' id='hr'/>

//                         <div><img src={image} alt='' className='img'/></div>
//                         <h2 className='postTitle'>Catch waves with an adventure guide</h2>
//                         <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

//                         <Posts></Posts>
                       
//                         <br/> <br/> 
//                         <div className='ad'><span id='ad'>Advertistement</span></div>
//                     </div>
//                 </div>

//            </>
        
//     )
// }

// export default Technology