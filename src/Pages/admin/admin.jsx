import MyInput from '../../components/widgets/my-input';
import MyButton from '../../components/widgets/my-button';
import MyDropdownText from '../../components/widgets/my-dropdown-text';
import MyCheckBoxes from '../../components/widgets/my-checkboxes';
import MyRadio from '../../components/widgets/my-radiobutton';
import {REFRESH_TOKEN, ACCESS_TOKEN,USER_NAME} from '../../constants/user-admin';
import {useNavigate} from 'react-router-dom';
import Banner from '../../components/banner';
import '../../styles/admin.css';
import {useEffect, useState} from 'react';
import {Months,weekDays} from '../../constants/all-date-info';
import AxiosInstance from '../../utils/axios';
import OneCalendarEntry from './one-calendar-entry';
import RepeatingEntry from './repeating-entry';

export default function Admin ()
{
    const [whichMonth, setWhichMonth]=useState('January');
    const [whichDay, setWhichDay]=useState('1');
    const [whichYear, setWhichYear]=useState(2026);
    const [yearsAvailable, setYearsAvailable]=useState([2026,2027,2028,2029])
    const [daysOfMonth, setDaysOfMonth]=useState([]);
    const [oneTitle, setOneTitle]=useState('');
    const [oneColor, setOneColor]=useState('Black');
    const [oneType, setOneType]=useState('One Time');
    const [daysOfWeek, setDaysOfWeek]=useState([]);
    const [currentRepeatingEntry, setCurrentRepeatingEntry]=useState({
        type:'Repeating',
        start_date:'2000-01-01',
        title:'class',
        color:'Black',
        which_days_list:[]
    });
    const [calendarEntries, setCalendarEntries]=useState([]);

    const oneWidgetStyle ={
        padding:'0 2%',
        height:'100px'
    }

    const test=()=>{console.log(currentRepeatingEntry)}

    const deleteRecord=async(id)=>{
        try{
            const response=await AxiosInstance.delete(`calendar/delete-entry/${id}/`);
            getRecords();

        }catch(err){
            alert('Not able to delete records');
        }       
    }

    const addNewRecord =async ()=>{

        let weekDaysNumber=0;
        let powerOfTwo=1;
        weekDays.map((oneWeekDay)=>{
            if (daysOfWeek.includes(oneWeekDay)) weekDaysNumber = weekDaysNumber+powerOfTwo;

            powerOfTwo=powerOfTwo*2
        })


        let dataToSend={
            type:oneType,
            start_date:`${whichYear}-${Months.findIndex(oneMonth=>oneMonth.month_name===whichMonth)+1}-${whichDay}`,
            title:oneTitle,
            color:oneColor,
            which_days:weekDaysNumber
        }

        if (oneType==='Moon Day') {
            dataToSend.title='Moon Day'
            dataToSend.color='gray'
        } else if (oneType==='Canceled'){
            dataToSend.title='Canceled'
            dataToSend.color='red'
        }

        try{
            const response=await AxiosInstance.post('calendar/new-calendar-entry/', dataToSend);
            setDefaults();
            getRecords();
        }catch(err){
            alert('Not able to create record');
        }
    }

    const navigate=useNavigate(); 
    const Logout=()=>{
        localStorage.setItem(ACCESS_TOKEN, '');
        localStorage.setItem(REFRESH_TOKEN, '');         
        localStorage.setItem(USER_NAME, '');     
        navigate('/admin')
    }

    const setDefaults=()=>{
        let dayOne = new Date();
        setWhichMonth(dayOne.toLocaleString('default', { month: 'long' }));
        setWhichDay(dayOne.getDate());
        setYearsAvailable(Array.from({length:4},(_,index)=>index+dayOne.getFullYear()));
        setWhichYear(dayOne.getFullYear());
        setOneColor('Black');
        setOneType('One Time');
        setDaysOfWeek([]);
    }

    const getRecords = async ()=>{
        try{
            const response=await AxiosInstance.get('calendar/get-all-calendar-entries/');
            setCalendarEntries(response.data);

        }catch(err){
            alert('Not able to get records');
        }        
        try{
            const response=await AxiosInstance.get('calendar/get-repeating-calendar/');
            setCurrentRepeatingEntry(response.data);

        }catch(err){
            alert('Not able to get records');
        }            
    }
    useEffect(()=>{
        setDefaults();
        getRecords();
    },[])

    useEffect(()=>{
        setDaysOfMonth(Array.from(
            { length: Months.find((one_month)=>one_month.month_name===whichMonth).number_days }
            , (_, index) => index + 1));
    },[whichMonth])

    return (
        <div className='admin-container'>
            <Banner/>
            <div className='sub-title '>Admin</div>
            <div className='new-entry-container'>
                <MyDropdownText
                    optionsList={Months.map((oneMonth)=>oneMonth.month_name)}
                    setSelectedOption={setWhichMonth}
                    selection={whichMonth}
                    disable={false}
                    style={oneWidgetStyle}
                />
                <MyDropdownText
                    optionsList={daysOfMonth}
                    setSelectedOption={setWhichDay}
                    selection={whichDay}
                    disable={false}
                    style={oneWidgetStyle}
                /> 

                <MyDropdownText
                    optionsList={yearsAvailable}
                    setSelectedOption={setWhichYear}
                    selection={whichYear}
                    disable={false}
                    style={oneWidgetStyle}
                />  
                <div>
                    <MyInput
                        labelText='Title'
                        handleChange={e=>setOneTitle(e.target.value)}
                        inputValue={oneTitle}
                        inputName='title'
                        inputType='text' 
                        inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px', marginBottom:'15px'}}

                        inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                    />
                    <MyInput
                        labelText='Color'
                        handleChange={e=>setOneColor(e.target.value)}
                        inputValue={oneColor}
                        inputName='title'
                        inputType='text' 
                        inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px'}}

                        inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                    />                    
                </div>
                <div >
                    <MyRadio
                        options={['Repeating', 'One Time','Moon Day', 'Canceled']}
                        optionsSelected={setOneType}
                        selection={oneType}
                        radioStyle={{height:'40px', margin:'0',marginBottom:'20px'}}
                    />

                    <MyCheckBoxes
                        options={weekDays}
                        setSelections={setDaysOfWeek}
                        selections={daysOfWeek}
                    />
                </div> 
            </div>
            <div  className='button-container'>
                <MyButton
                    button_function={addNewRecord}
                    button_text='Add New Record'
                />
                <MyButton
                    button_function={Logout}
                    button_text='Logout'
                />                                 
            </div>
            <div className='all-entries-containter'>
                <div className='sub-title '>Current Calendar Entries</div>
                <div className='repeating-entry'>
                    <RepeatingEntry 
                        currentRepeatingEntry={currentRepeatingEntry}
                        deleteRecord={deleteRecord}
                    />
                </div>
                    {calendarEntries.map((oneCalendarEntry)=>(
                        <div key={oneCalendarEntry.id}>
                            <OneCalendarEntry
                                thisEntry={oneCalendarEntry}
                                deleteRecord={deleteRecord}
                            />
                        </div>
                    ))}
            </div>
            <button onClick={test}>test</button>
        </div>
    )
}