import { Outlet } from 'react-router';
import Banner from '../components/banner';

export default function HomePage(){
    return (
        <div >
            <Banner/>
                <div className='main-content'>
                    <div className='sub-title '>Home Page</div>
                </div>
            <Outlet />
        </div>
    )
}