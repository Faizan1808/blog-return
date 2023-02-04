// imports
import { useParams, useLocation } from "react-router-dom"
import face from '../../image/faceLogo.png'
import insta from '../../image/instagram.svg'
import fb from '../../image/facebook.svg'
import yt from '../../image/youtube.svg'
import twitter from '../../image/twitter.svg'

export const FitnessData = [
    {
        "id": 1,
        "name": "Onmanorama.com",
        "author": "Dr. Dhanasekaran VK",
        "title": "It's important to know misconceptions shrouding cancer treatment | Lifestyle Health | English Manorama - Onmanorama",
        "description": "Some people believe that alternative medicines are more effective than conventional cancer treatments like chemotherapy or radiation therapy.",
        "url": "https://www.onmanorama.com/lifestyle/health/2023/02/04/know-misconceptions-shrouding-cancer-treatment.html",
        "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2021/7/25/cancer-therapy-c.jpg",
        "publishedAt": "2023-02-04T06:11:47Z",
        "content": "There are several misconceptions surrounding cancer treatment in Kerala. These are not false notions persisting in Kerala alone, but the whole of India. Undoubtedly, the misconceptions are engendered… [+3089 chars]"
    },
    {
        "id": 2,
        "name": "Biospectrumindia.com",
        "author": null,
        "title": "Biotech startup Mynvax advances studies on indigenous vaccines for influenza and COVID-19 - BSI bureau",
        "description": "Clinical trials to start for influenza vaccine candidate this year in Australia",
        "url": "https://www.biospectrumindia.com/news/20/22587/biotech-startup-mynvax-advances-studies-on-indigenous-vaccines-for-influenza-and-covid-19-.html",
        "urlToImage": "https://www.biospectrumindia.com/uploads/articles/shutterstock_117541078-22587.jpg",
        "publishedAt": "2023-02-04T06:03:33Z",
        "content": "Biotech startup Mynvax, incubated at the Indian Institute of Science (IISc) in Bengaluru, has developed an adjuvant subunit-based vaccine against SARS-CoV-2 which is now ready for pre-clinical trials… [+1261 chars]"
    },
    {
        "id": 3,
        "name": "Hindustan Times",
        "author": "ANI",
        "title": "How age and sex influence our body clocks: Study - Hindustan Times",
        "description": "The human body runs on a finely tuned clock synchronized to the 24-hour cycle of Earth's rotation, known as the circadian clock, which controls various physiological processes such as the sleep-wake cycle, hormone production, and metabolism. | Health",
        "url": "https://www.hindustantimes.com/lifestyle/health/how-age-and-sex-influence-our-body-clocks-study-101675488808424.html",
        "urlToImage": "https://images.hindustantimes.com/img/2023/02/04/1600x900/_084e0fa0-a7f0-11e7-92d8-206e76e802d4_1675489091430_1675489091430.jpg",
        "publishedAt": "2023-02-04T05:41:05Z",
        "content": "The circadian clock, which controls many physiological processes such as the sleep-wake cycle, hormone production, and metabolism, is a highly calibrated clock synced to the 24-hour cycle of Earth's … [+2940 chars]"
    },
    {
        "id": 4,
        "name": "The Indian Express",
        "author": "Dr Niti Krishna Raizada",
        "title": "These cutting-edge technologies have revolutionised cancer care in India - The Indian Express",
        "description": "In India, the burden of cancer is rising as well, and newer technologies are being developed to improve the diagnosis, treatment and management of cancer patients.",
        "url": "https://indianexpress.com/article/lifestyle/health/cutting-edge-technologies-cancer-care-india-8421884/",
        "urlToImage": "https://images.indianexpress.com/2023/02/cancer-detection.jpg",
        "publishedAt": "2023-02-04T04:50:22Z",
        "content": "Cancer is one of the leading causes of death worldwide and its incidence has increased in recent years with lifestyle changes being an important factor. In India, the burden of cancer is rising as we… [+3369 chars]"
    },
    {
        "id": 5,
        "name": "YouTube",
        "author": null,
        "title": "World Cancer Day | Call to make treatment accessible - eNCA",
        "description": "Cancer has stolen many lives. Many only discover they have the disease when it's too late. Today is World Cancer Day and the Health Department will be raisin...",
        "url": "https://www.youtube.com/watch?v=PkLHrSYdelw",
        "urlToImage": "https://i.ytimg.com/vi/PkLHrSYdelw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogZShlMA8=&rs=AOn4CLCmXyvVGopRIBlwjWh4McK5GUCA5Q",
        "publishedAt": "2023-02-04T04:36:39Z",
        "content": null
    },
    {
        "id": 6,
        "name": "Jagran.com",
        "author": "Priyanka Munshi",
        "title": "Five Signs That You Have A Weak Immune System - Jagran English",
        "description": "",
        "url": "https://english.jagran.com/lifestyle/five-signs-that-you-have-a-weak-immune-system-10063745",
        "urlToImage": "https://imgeng.jagran.com/images/2023/feb/immune-system1675484111422.jpg",
        "publishedAt": "2023-02-04T04:14:39Z",
        "content": "FOR KEEPING health, you need a powerful immune system. Comparatively speaking, those with weakened immune systems are more susceptible to illness. The immune system can be negatively impacted by exce… [+1934 chars]"
    },
    {
        "id": 7,
        "name": "Www.epw.in",
        "author": null,
        "title": "The Everyday Wars on World Agri-cultures | Economic and Political Weekly - Economic and Political Weekly",
        "description": "The Agricultural Dilemma: How Not to Feed the World by Glenn Davis Stone, Oxon, UK: Routledge, 2022; pp 232, price not mentioned (UK Edition) (hardback).",
        "url": "https://www.epw.in/journal/2023/5/book-reviews/everyday-wars-%C2%A0world-agri-cultures.html",
        "urlToImage": "http://www.epw.in/sites/default/files/epw-logo.png",
        "publishedAt": "2023-02-04T02:31:32Z",
        "content": "Our real dilemma is how to unthink (emphasis mine) the entrenched belief that we will starve without new tricks from scientists and input industries when in reality we have been locked on a treadmill… [+1096 chars]"
    },
    {
        "id": 8,
        "name": "Mirchi.in",
        "author": "Mirchi",
        "title": "What is Oral Cancer and what is its cure? - Mirchi Plus",
        "description": "India is the Oral Cancer capital of the World. The number of Oral Cancer in India are more than the total cancer seen the World over. The reason is only one – Tobacco.  This is how it can be cured and prevented. To know more about healthy lifestyle, download …",
        "url": "https://mirchi.in/stories/lifestyle/what-is-oral-cancer-and-what-is-its-cure/97588794",
        "urlToImage": "https://static.mirchi.in/thumb/imgsize-20274,msid-97588794,width-800,height-450,resizemode-1/97588794.jpg",
        "publishedAt": "2023-02-04T01:30:00Z",
        "content": "India\r\n is theOral Cancer\r\n capital of theWorld\r\n. The number ofOral\r\n Cancer in India are more than the total cancer seen the World over. The reason is only one Tobacco\r\n. India is the highest consu… [+3469 chars]"
    },
        
]


const FitData = () =>{

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
                {/* <h4 >FOR MORE INFO CLICK ON BELOW Link: <br/> <br/>
                <a href={data.url}>"{data.url}"</a>
                </h4> */}

        <div className="footter">
            <img src={face} alt="Logo" className="face-logo"/>
            <div  className="foot-left">
                <h3>Written By</h3>
                <span>{data?.author}</span>
                <span>Jan 28, 2019 · 10 min read</span>
            </div>
        </div>
            <hr/>
            </div>
        </>
    )
}

export default FitData

