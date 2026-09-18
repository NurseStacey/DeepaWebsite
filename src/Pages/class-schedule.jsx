import { Outlet } from 'react-router';
import Banner from '../components/banner';
import '../styles/class-schedule.css';
import {useState, useEffect} from 'react';
import {SCHEDULED_DAYS,MOON_DAYS} from '../constants/scheduled-days';

export default function ClassSchedule()
{
    const [pageDate, setPageDate]=useState(new Date());
    const [allDaysThisMonth, setAllDaysThisMonth]=useState([]);
    const [localMoonDays, setLocalMoonDays]=useState([]);

    useEffect(()=>{
        let dayOne = new Date();
        dayOne.setDate(1);
        setPageDate(dayOne);

        let newMoonDays=[]
        MOON_DAYS.map((oneMoonDay)=>{
            newMoonDays.push(new Date(oneMoonDay))
        })

        setLocalMoonDays(newMoonDays)
    },[])

    useEffect(()=>{
        
        const IsMoonDay=(thisDay)=>{

            let returnValue=false;
            theseMoonDays.map((oneMoonDay)=>{
                if (oneMoonDay.getDate()===thisDay) returnValue= true;
            })
            return returnValue;
        }

        if (pageDate.getDate()!==1) return 
        let month = pageDate.getMonth();
        let year= pageDate.getFullYear();

        let lastDate = new Date(pageDate.getFullYear(), pageDate.getMonth()+1,0)
        let theseDays = [];

        for (let i = 0; i < pageDate.getDay(); i++){
            theseDays.push('');
        }
        let daysInMonth = lastDate.getDate();

        let startingScheduleObj =   [...SCHEDULED_DAYS.filter((oneSchedule)=>new Date(oneSchedule.startDate)<pageDate)].sort((a, b) =>new Date(b.startDate) - new Date(a.startDate))[0];

        let thisScheduledDays = [...SCHEDULED_DAYS].sort((a, b) =>new Date(a.startDate) - new Date(b.startDate));
        let firstDate=new Date(startingScheduleObj.startDate)

        let theseSchedules=[startingScheduleObj]
        thisScheduledDays.map((oneSchedule)=>{

            let thisDate=new Date(oneSchedule.startDate);
            if (thisDate>firstDate && thisDate<=lastDate)
                theseSchedules.push(oneSchedule);
        })

        let index = 0;
        let theseMoonDays = localMoonDays.filter((oneMoonDay)=>oneMoonDay.getFullYear()===year && oneMoonDay.getMonth()===month);
        

        let compareDate=new Date(theseSchedules[index+1].startDate);
        for (let i = 0; i < daysInMonth; i++){
            let thisDate=new Date(year, month, i+1);

            if (thisDate>compareDate && index<(theseSchedules.length-1)){
                index = index+1;
                
                if (index<(theseSchedules.length-1)) compareDate=new Date(theseSchedules[index+1].startDate);
            }
            
            if (IsMoonDay(i+1)) {           
                theseDays.push({
                    day:`${i+1}`,
                    title:'Moon Day'
                });        
            } else if (theseSchedules[index].whichDays.includes(daysOfWeek[thisDate.getDay()])) {
                
                theseDays.push({
                    day:`${i+1}`,
                    title:theseSchedules[index].title
                });
            } else {
                theseDays.push({
                    day:`${i+1}`,
                    title:'No Class'
                });                
            }

        }

        setAllDaysThisMonth(theseDays);
    },[pageDate])

    const changeMonth=(direction)=>{
        let nextDate = new Date(pageDate);
        nextDate.setMonth(nextDate.getMonth()+direction);

        setPageDate(nextDate);
    }

    const test=()=>{
        console.log(pageDate.getDay())
    }
        
    const daysOfWeek=[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

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
                                height='50px'/
                            >
                        </div>
                        <div 
                            className='date-div'
                        >
                            {pageDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
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
                            {daysOfWeek.map((oneDay)=>(
                                <div key={oneDay}>{oneDay}</div>
                            ))}   
                        </div>

                        <ol className='all-days-box'>
                            {allDaysThisMonth.map((oneDay, index)=>(
                                <li
                                    className='one-day'
                                    key={index}
                                >
                                    <div style={{display:'block'}}>
                                        <div className='one-day-text'>{oneDay.day}</div>
                                        <div className='day-title'>{oneDay.title}</div>
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