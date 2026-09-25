import {useState} from 'react'
import MyInput from '../../components/widgets/my-input';
import MyButton from '../../components/widgets/my-button';
import {REFRESH_TOKEN, ACCESS_TOKEN,USER_NAME} from '../../constants/user-admin';
import {useNavigate} from 'react-router-dom';
import AxiosInstance from  '../../utils/axios';
import Banner from '../../components/banner';


export default function LoginPage ()
{
    const navigate=useNavigate(); 
    const [userName, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const handleFormSubmit =async  ()=>{
        let usernameToSend=userName.toLowerCase();
        console.log(usernameToSend)
        console.log(password)
        try{
            const response=await AxiosInstance.post("accounts/token/", {username:usernameToSend, password:password});
            console.log(response)
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);         
            localStorage.setItem(USER_NAME, usernameToSend);          
            } catch(error){
                console.log(error)
                alert('Bad password/username combination')
            }finally{
                navigate('/admin')
            }
    }

    return (
        <div>
            <Banner/>
            <div className='sub-title '>Login</div>

                <MyInput
                    labelText='Username'
                    handleChange={e=>setUserName(e.target.value)}
                    inputValue={userName}
                    inputName='username'
                    inputType='text'
                />

                <MyInput
                    labelText='Password'
                    handleChange={e=>setPassword(e.target.value)}
                    inputValue={password}
                    inputName='password'
                    inputType='password'
                />            
                
                <MyButton
                    button_function={handleFormSubmit}
                    button_text='Login'
                />            
        </div>
    )
}