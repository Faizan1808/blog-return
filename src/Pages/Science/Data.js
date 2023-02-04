// imports
import { useParams, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import back from '../../image/back-arrow.png'
import face from '../../image/faceLogo.png'
import insta from '../../image/instagram.svg'
import fb from '../../image/facebook.svg'
import yt from '../../image/youtube.svg'
import twitter from '../../image/twitter.svg'

export const SciData = [
    
    {
    "id": 1,
    "name": "Adda247.com",
    "author": "piyush",
    "title": "SpaceX Awarded shared NASA contract worth up to $100 million - Adda247",
    "description": "Space Exploration Technologies Corp. is part of a payload contract NASA has awarded for as much as $100 million over a decade. Elon Musk’s rocket launch and satellite operator will share the contract for unspecified “commercial payload processing services” wi…",
    "url": "https://currentaffairs.adda247.com/spacex-awarded-shared-nasa-contract-worth-up-to-100-million/",
    "urlToImage": "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/02/04114906/29017456-0-image-a-122_1590868546905-1568x942.jpg",
    "publishedAt": "2023-02-04T06:19:20Z",
    "content": "Space Exploration Technologies Corp. is part of a payload contract NASA has awarded for as much as $100 million over a decade. Elon Musks rocket launch and satellite operator will share the contract … [+769 chars]"
    },
    {
    "id": 2,
    "name": "Tech Explorist",
    "author": "Amit Malewar",
    "title": "Scientists discovered a new type of ice that could change understanding of water - Tech Explorist",
    "description": "The newly discovered ice is amorphous.",
    "url": "https://www.techexplorist.com/new-type-ice-change-understanding-water/56631/",
    "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/02/new-type-of-ice.jpg",
    "publishedAt": "2023-02-04T06:12:47Z",
    "content": "Water ice has many crystalline phases, along with a few amorphous structures. Amorphous ice, although rare on Earth, is the primary type found in space. They govern several cosmological processes and… [+4872 chars]"
    },
    {
    
    "id": 3,
    "name": "Thenewsmill.com"
    ,
    "author": "ANI",
    "title": "New study sheds light on how 'Earth's thermostat' regulates climate - TheNewsMill",
    "description": "Weathering is the process by which rocks, rain, and carbon dioxide help govern the Earth's climate over thousands of years, much like a thermostat. A new study performed by Penn State scientists could help us better understand how this thermostat reacts to te…",
    "url": "https://thenewsmill.com/2023/02/new-study-sheds-light-on-how-earths-thermostat-regulates-climate/",
    "urlToImage": "https://thenewsmill.com/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?is_home=0&is_front_page=0&object_type=post&post_id=69491&object_id=69491&img=https%253A%252F%252Fthenewsmill.com%252Fwp-content%252Fuploads%252F2023%252F02%252Fnew-study-sheds-light-on-how-earths-thermostat-regulates-climate.jpg",
    "publishedAt": "2023-02-04T03:31:29Z",
    "content": "Weathering is the process by which rocks, rain, and carbon dioxide help govern the Earth’s climate over thousands of years, much like a thermostat. A new study performed by Penn State scientists coul… [+4747 chars]"
    },
    
    {
   
    "id": 4,
    "name": "Business Insider India"
    ,
    "author": "Morgan McFall-Johnsen",
    "title": "The green comet and Mars will appear side-by-side next weekend. Spot them together in the sky. - Business Insider India",
    "description": "A green comet and Mars will appear side-by-side in the night sky on February 10 and 11.It's a good opportunity to spot the comet in the early evening, maybe",
    "url": "https://www.businessinsider.in/science/news/the-green-comet-and-mars-will-appear-side-by-side-next-weekend-spot-them-together-in-the-sky-/articleshow/97592454.cms",
    "urlToImage": "https://www.businessinsider.in/photo/97592454/the-green-comet-and-mars-will-appear-side-by-side-next-weekend-spot-them-together-in-the-sky-.jpg?imgsize=110056",
    "publishedAt": "2023-02-04T00:57:00Z",
    "content": "A green comet shooting past Earth for the first time since the Ice Age is about to skim right past Mars in the night sky.\r\nThe green comet and the red planet will be visible side-by-side across the N… [+1967 chars]"
    },
    {
    
    "id": 5,
    "name": "Giantfreakinrobot.com"
    ,
    "author": "Jonathan Klotz",
    "title": "NASA Rover Just Collected Samples For Proof Of Ancient Life On Mars - Giant Freakin Robot",
    "description": "NASA's Perseverance rover has collected soil samples from Mars but now starts the hardest part of the mission.",
    "url": "https://www.giantfreakinrobot.com/ent/nasa-rover-life-mars.html",
    "urlToImage": "https://www.giantfreakinrobot.com/wp-content/uploads/2022/09/mars-perseverance-rover.jpeg",
    "publishedAt": "2023-02-03T23:35:35Z",
    "content": "NASA's Perseverance rover has created the first soil deposit on Mars and now comes the hardest part: getting it back home.\r\nBy Jonathan Klotz\r\n| Published 6 mins ago\r\nNASA’s Perseverance rover just a… [+3013 chars]"
    },
    
    {
    
    "id": 6,
    "name": "Space Ref"
    ,
    "author": "Keith Cowing",
    "title": "Kolkata, India As Seen From Space By Copernicus Sentinel-2 - Space Ref",
    "description": "Kolkata, formerly Calcutta, is featured in this optical image, captured by the Copernicus Sentinel-2 mission.",
    "url": "https://spaceref.com/earth/kolkata-india-as-seen-from-space-by-copernicus-sentinel-2/",
    "urlToImage": "https://spaceref.com/wp-content/uploads/2023/02/Earth_from_Space_Kolkata_India-972x1024.jpg",
    "publishedAt": "2023-02-03T22:57:21Z",
    "content": "Kolkata, formerly Calcutta, is featured in this optical image, captured by the Copernicus Sentinel-2 mission.\r\nZoom in to explore this image at its full 10 m resolution or click on the circles to lea… [+1123 chars]"
    },
    {
    
    "id": 7,
    "name": "ANI News"
    ,
    "author": null,
    "title": "Molecular machines might treat fungal infections: Study - ANI News",
    "description": "Thanks to nanoscale drills activated by visible light, the stubborn athlete's foot infection that an estimated 70% of people experience at some point in their lives may become much easier to treat.",
    "url": "https://www.aninews.in/news/science/molecular-machines-might-treat-fungal-infections-study20230204040550",
    "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230203223044.jpg",
    "publishedAt": "2023-02-03T22:35:00Z",
    "content": "Washington [US], February 4 (ANI): Thanks to nanoscale drills activated by visible light, the stubborn athlete's foot infection that an estimated 70% of people experience at some point in their lives… [+3677 chars]"
    },
    
]


const ScienceData = () =>{

    const params = useParams();
    const location = useLocation();
    console.log("details", params, location)

    const data = location.state.item
    // console.log(data)

    return(
        <>
            <div id='logo'>
                <h3 className='therotate'>The</h3>
                <h1 className='siren'>Siren</h1>
                <button className="btn">Get Started</button>
            </div>
            <div key={data.id} className="main-Api">
      
                <h1>{data.title}</h1>
                
                <p className="logo-content">
                    <img src={face} alt="Logo" className="face-logo"/>
                    <div className="logo-cont">
                    <p><b>Author Name: {data.author}</b></p> 
                    <p className="time">Jan 25, 2023 · 10 min read</p>
                    </div>  
                    <img src={insta} alt="instagram" className="social-media" />
                    <img src={fb} alt="instagram" className="social-media" />
                    <img src={yt} alt="instagram" className="social-media" />
                    <img src={twitter} alt="instagram" className="social-media" />
                </p>
                
                <img src={data.urlToImage} alt="" id="api-img"/>
                
                <p className="content">{data.content} </p>
                
                <h3>Description: {data.description }</h3>
                <h4 >FOR MORE INFO CLICK ON BELOW Link: <br/> <br/>
                <a href={data.url}>"{data.url}"</a>
                </h4>

                {/* Back Button */}

                <button className="back">
                    <Link to={"/Bollywood"} >
                    <img src={back} alt="back" className="back-arrow"/>
                    Go Back</Link>
                </button>
            </div>
        </>
    )
}

export default ScienceData

