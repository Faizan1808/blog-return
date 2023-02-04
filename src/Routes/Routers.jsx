import './Routes.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
// import Home from '../Pages/Home/Home'
import HomeContent from '../Pages/Home/HomeContent'
import Index from '../Pages/Bollywood/index'
import Hollywood from '../Pages/Hollywood'
import Technology from '../Pages/Technology'
import Fitness from '../Pages/Fitness'
import Science from '../Pages/Science'

// import Common from '../Pages/Demo/Index'
// import CommonFunction from '../Utility/CommonFunction'
import BollywoodData from '../Pages/Bollywood/Data'
import HollywoodData from '../Pages/Hollywood/Data'
import TechnologyData from '../Pages/Technology/Data'
import FitData from '../Pages/Fitness/Data'
import ScienceData from '../Pages/Science/Data'




const Routers = () =>{

    return(
        <BrowserRouter>
            <Routes>    

                {/* Routes */}
                <Route path='/' element={<HomeContent/>}/>
                <Route path= "/Bollywood" element= {<Index />} />
                <Route path= "/Technology" element= {<Technology />} />
                <Route path= "/Hollywood" element= {<Hollywood />} />
                {/* <Route path= "/Common" element= {<Common />} /> */}
                <Route path= "/Fitness" element= {<Fitness />} />
                <Route path= "/Science" element= {<Science />} />


                {/* Dynamic Routes */}
                <Route path={`/Technology/:id`} element = {<TechnologyData />} />
                <Route path={`/Hollywood/:id`} element = {<HollywoodData />} />
                <Route path={`/Bollywood/:id`} element = {<BollywoodData />} />
                <Route path={`/Fitness/:id`} element = {<FitData />} />
                <Route path={`/Science/:id`} element = {<ScienceData />} />


            </Routes>
        </BrowserRouter>
    )
}

export default Routers