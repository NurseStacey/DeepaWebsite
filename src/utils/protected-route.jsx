import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import AxiosInstance from './axios';
import {REFRESH_TOKEN, ACCESS_TOKEN} from '../constants/user-admin';
import {useState, useEffect} from 'react';

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized]=useState(null)

    useEffect(()=>{

        auth().catch(()=>setIsAuthorized(false))
    },[])
    
    const refreshToken = async()=>{
        const localRefreshToken=localStorage.getItem(REFRESH_TOKEN)
        console.log(localRefreshToken)
        try{
            const response=await AxiosInstance.post('/accounts/token/refresh/',{
                refresh:localRefreshToken,
            })
            console.log(response)
            if (response.status===200) {

                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch(error){
            console.log(error);
            setIsAuthorized(false);
        }
    }

    const auth=async()=>{
        const token=localStorage.getItem(ACCESS_TOKEN);

        if(!token){
            setIsAuthorized(false)
            return
        }
        const decoded=jwtDecode(token);

        const tokenExpiration=decoded.exp;

        const now=Date.now()/1000;

        if(tokenExpiration===undefined) alert('token undefined')

        if (tokenExpiration<now || tokenExpiration===undefined){
            await refreshToken();
        }else {
            setIsAuthorized(true);
        }
    }
    if (isAuthorized===null){
        return <div>Loading...</div>
    }
    return isAuthorized ? children:<Navigate to='/'/>
}
export default ProtectedRoute