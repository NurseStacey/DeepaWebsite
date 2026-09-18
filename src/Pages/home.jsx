import { Outlet } from 'react-router';
import Banner from '../components/banner';

export default function HomePage(){
    return (
        <div >
            <Banner/>
            Home Page
            <Outlet />
        </div>
    )
}