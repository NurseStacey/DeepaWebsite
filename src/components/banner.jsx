import {WEBSITE_URL} from '../constants/website-constants';
import { NavLink, Link } from "react-router";
import {useNavigate} from 'react-router-dom';

export default function Banner(){
    const navigate=useNavigate();     
    return(
        <div className='banner-main'>
            <div 
                style={{cursor:'pointer'}}
                onClick={()=>navigate('/')}
                className='home-link'
            >

                <img 
                    src='src/images/logo.jpg'
                    width='50px'
                    height='50px'/>
                <div>Deepa's Ashtanga Yoga</div>

            </div>
            <div className='banner-menu'>
                <NavLink
                to="/"
                className='nav-link'
                >
                    <div className='banner-menu-item'>Home</div>
                </NavLink>  

                <NavLink
                to="/about"
                className='nav-link'
                >
                    <div className='banner-menu-item'>About</div>
                </NavLink>     

                
                <NavLink
                    to="/class-schedule"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>Class Schedule</div>
                </NavLink>       
                
                <NavLink
                    to="/getting-started"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>Getting Started</div>
                </NavLink>                   
                <NavLink
                    to="/ashtanga"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>What Is Ashtanga</div>
                </NavLink>                       
                <NavLink
                    to="/new-to-ashtanga"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>New To Ashtanga</div>
                </NavLink>                       
                
            </div>
            
        </div>
    )
}