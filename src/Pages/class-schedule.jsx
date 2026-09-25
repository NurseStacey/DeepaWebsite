import { Outlet } from 'react-router';
import Banner from '../components/banner';
import '../styles/class-schedule.css';
import {useState, useEffect} from 'react';
import AxiosInstance from '../utils/axios';
import {weekDays} from '../constants/all-date-info';

export default function ClassSchedule()
{
    const [allDaysThisMonth, setAllDaysThisMonth]=useState([]);
    
    const [thisDate, setThisDate]=useState({
        month:1,
        year:3000,
        thisDate:new Date(),
        thisMonthStr:'January'
    })

    const test=()=>{
        console.log(allDaysThisMonth)
    }
    const getCalendar = async ()=>{
        try{
            const response = await AxiosInstance.get(`calendar/get-calendar-days/${thisDate['month']}/${thisDate['year']}/`);
            setAllDaysThisMonth(response.data['these_days']);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        let today=new Date();
        setThisDate({
            month:today.getMonth()+1,
            year:today.getFullYear(),
            thisDate:today,
            thisMonthStr:today.toLocaleString('default',{month:'long'})
        })

        getCalendar();
    },[])
    
    useEffect(()=>{getCalendar();},[thisDate])

    const changeMonth=(direction)=>{
        let nextDate =thisDate.thisDate;
        
        nextDate.setMonth(nextDate.getMonth()+direction);
        setThisDate({
            month:nextDate.getMonth()+1,
            year:nextDate.getFullYear(),
            thisDate:nextDate,
            thisMonthStr:nextDate.toLocaleString('default',{month:'long'})
        })        
    }

    return (
        <div style={{margin:0, padding:0}}>
            <Banner/>
         
                <div className='sub-title '>Class Schedule</div>
                   <div className='top-row'>
                        <div
                            style={{
                                cursor:'pointer'
                            }}
                            onClick={()=>changeMonth(-1)}
                        >
                            <img 
                                src='src/images/left-cheveron.png'
                                width='50px'
                                height='50px'/>
                        </div>
                        <div 
                            className='date-div'
                        >
                            {`${thisDate.thisMonthStr}, ${thisDate.year}`}
                        </div>
                        <div
                            style={{
                                cursor:'pointer'
                            }}
                            onClick={()=>changeMonth(1)}
                        >
                            <img 
                                src='src/images/right-cheveron.png'
                                width='50px'
                                height='50px'/>                        
                        </div>                        

                    </div>

                    <div 
                        className='calendar-box'
                    >
                        <div className='days-labels'>
                            {weekDays.map((oneDay)=>(
                                <div key={oneDay}>{oneDay}</div>
                            ))}   
                        </div>

                    
                        <ol className='all-days-box'>
                            {allDaysThisMonth.map((oneDay, index)=>(
                                (oneDay.day<0)?
                                <li 
                                    key={oneDay.day}
                                    className='no-day-box'>
                                    
                                </li>:
                                <li
                                    className='one-day'
                                    key={index}
                                >
                                    <div style={{display:'block'}}>
                                        <div className='one-day-text'>{oneDay.day}</div>
                                        <div className='day-title' style={{color:oneDay.color}}>{oneDay.title}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>                        


                    </div>           
                    <button onClick={test}>test</button> 
            <Outlet />
        </div>
    )
}
