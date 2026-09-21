import { Outlet } from 'react-router';
import Banner from '../components/banner';
import '../styles/class-schedule.css';
import {useState, useEffect} from 'react';
import {SCHEDULED_DAYS,SPECIAL_DATES,MOON_DAYS} from '../constants/scheduled-days';
import {ALL_DATE_INFO,makeDate} from '../constants/all-date-info';

export default function ClassSchedule()
{
    const [allDaysThisMonth, setAllDaysThisMonth]=useState([]);
    const [allDateInfo, setAllDateInfo]=useState(ALL_DATE_INFO);

    useEffect(()=>{

        let dayOne = new Date();
        dayOne.setDate(1);


        let newMoonDays=[]
        MOON_DAYS.map((oneMoonDay)=>{
            newMoonDays.push(makeDate(oneMoonDay));
        })

        let newSpecialDates=[]
        SPECIAL_DATES.map((oneSpecialDay)=>{
            newSpecialDates.push({
                date:makeDate(oneSpecialDay.date),
                title:oneSpecialDay.title
            })
        })

        let newScheduledDays=[]
        SCHEDULED_DAYS.sort(
            (a, b) =>new Date(a.startDate) - new Date(b.startDate)).map((oneScheduleDay)=>{
                newScheduledDays.push({
                    whichDays:oneScheduleDay.whichDays,
                    title:oneScheduleDay.title,
                    startDate:makeDate(oneScheduleDay.startDate),
                })
            })

        setAllDateInfo({...allDateInfo,
            ...{
                pageDate:dayOne,
                moonDays:newMoonDays,
                specialDates:newSpecialDates,
                scheduledDays: newScheduledDays
            }});

    },[])

    useEffect(()=>{
        if (!allDateInfo.isValid()) return;
 
        let month = allDateInfo.currentMonth();
        let year= allDateInfo.currentYear();

        let lastDate = allDateInfo.getLastDate()

        let theseDays = [];

        for (let i = 0; i < allDateInfo.pageDate.getDay(); i++){
            theseDays.push({
                    day:-1*i-1,
                    title:''
                });
        }
        let daysInMonth = lastDate.getDate();
        let theseScheduledDays = allDateInfo.getTheseScheduledDays();

        let index = 0;
        let compareDate=lastDate;
  
        try
        {
            compareDate=theseScheduledDays[index+1].startDate.dateObj;
        }catch(err){
            
        }

        for (let day = 1; day < (daysInMonth+1); day++){
            let thisDate=new Date(year, month,day);
            if (thisDate>compareDate && index<(theseScheduledDays.length-1)){
                index = index+1;
                if (index<(theseScheduledDays.length-1)) compareDate=new Date(theseScheduledDays[index+1].startDate);
            }

            let specialDay = allDateInfo.getSpecialDay(month, day, year)
            if (specialDay!==undefined){
                theseDays.push({
                    day:`${day}`,
                    title:specialDay.title
                });
            }else if (allDateInfo.isMoonDay(month, day, year)) {
                theseDays.push({
                    day:`${day}`,
                    title:'Moon Day'
                });
            }else if (theseScheduledDays[index].whichDays.includes(daysOfWeek[thisDate.getDay()])) {
                theseDays.push({
                    day:`${day}`,
                    title:theseScheduledDays[index].title
                });
            } else {
                theseDays.push({
                    day:`${day}`,
                    title:'No Class'
                });                
            }                
        }

        for (let i =  lastDate.getDay()+1; i < 7; i++){
            theseDays.push({
                    day:-10*i-10,
                    title:''
                });
        }        
        setAllDaysThisMonth(theseDays);

    },[allDateInfo])

    const changeMonth=(direction)=>{
        let nextDate = new Date(allDateInfo.pageDate);
        nextDate.setMonth(nextDate.getMonth()+direction);
        setAllDateInfo({
            ...allDateInfo,
            ...{pageDate:nextDate},
        })
    }

    const test=()=>{
        console.log(allDateInfo.specialDates)
        console.log(allDateInfo.getSpecialDay(8,6,2026))
        
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
                                height='50px'/>
                        </div>
                        <div 
                            className='date-div'
                        >
                            {allDateInfo.pageDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
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

                        {(allDaysThisMonth===null)?<></>:
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
                                            <div className='day-title'>{oneDay.title}</div>
                                        </div>
                                    </li>
                                ))}
                            </ol>                        
                        }

                    </div>           
                    <button onClick={test}>test</button>
            <Outlet />
        </div>
    )
}