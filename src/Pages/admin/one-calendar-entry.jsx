import MyButton from '../../components/widgets/my-button';

export default function OneCalendarEntry({
    thisEntry,
    deleteRecord
})
{
    return(
        <div className='one-entry-containter'>
            <div className='one-entry-item'>{thisEntry.title}</div>
            <div className='one-entry-item'>{thisEntry.start_date}</div>
            <MyButton
                button_function={()=>deleteRecord(thisEntry.id)}
                button_text='Delete'
                button_style={{margin:'0'}}
            />      
        </div>
    )
}