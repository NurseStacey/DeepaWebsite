import MyButton from '../../components/widgets/my-button';

export default function RepeatingEntry({
    currentRepeatingEntry,
    deleteRecord
})
{
    return(
        <div className='repeating-entry-container'>
            <div className='one-repeating-entry-item'>{currentRepeatingEntry.title}</div>
            <div className='one-repeating-entry-item'>{currentRepeatingEntry.start_date}</div>
            {currentRepeatingEntry.which_days_list.map((oneDay)=>(<div className='one-repeating-entry-item'>{oneDay}</div>))}
            <MyButton
                button_function={()=>deleteRecord(thisEntry.id)}
                button_text='Delete'
                button_style={{margin:'auto 3%'}}
            />                  
        </div>
    )
}