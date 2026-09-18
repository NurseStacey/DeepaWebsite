import {WEBSITE_URL} from '../constants/website-constants';
import { NavLink, Link } from "react-router";

export default function Banner(){
    return(
        <div className='banner-main'>
            <div className='home-link'>
                <a href={WEBSITE_URL}>
                    <img 
                        src='src/images/logo.jpg'
                        width='50px'
                        height='50px'/>
                    <div>Deepa's Ashtanga Yoga</div>
                </a>
            </div>
            <div className='banner-menu'>
                <NavLink
                to="/"
                className='nav-link'
                >
                    <div className='banner-menu-item'>Home</div>
                </NavLink>  

                <NavLink
                to="/"
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
                    to="/ashtanga"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>What Is Ashtanga</div>
                </NavLink>                       
                <NavLink
                    to="/ashtanga"
                    className='nav-link'
                 >
                    <div className='new-to-ashtanga'>New To Ashtanga</div>
                </NavLink>                       
                
            </div>
            
        </div>
    )
}