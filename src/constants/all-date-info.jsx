
export const makeDate=(dateStr)=>{
    let temp=dateStr.split('/');
    return {
        day:parseInt(temp[1]),
        month:parseInt(temp[0]),
        year:parseInt(temp[2]),
        dateObj:new Date(dateStr)
    }
}

export const ALL_DATE_INFO={
    pageDate:new Date(),
    moonDays:[],
    specialDates:[],
    scheduledDays:[],
    currentMonth:function(){
        return this.pageDate.getMonth();
    },
    currentYear:function(){
        return this.pageDate.getFullYear();
    },
    isValid:function(){
        return (this.scheduledDays.length!==0)
    },
    getLastDate:function(){
        return new Date(this.pageDate.getFullYear(), this.pageDate.getMonth()+1,0);
    },
    isMoonDay:function(thisDay){
        let returnValue=false;
        
        return (this.moonDays.find((oneMoonDay)=>{
            oneMoonDay.month===thisDay.month &&  oneMoonDay.day=== thisDay.day && oneMoonDay.year===thisDay.year
            
        })!== undefined)
   
    },
    getStartingObj:function(){
        return [...this.scheduledDays.filter((oneSchedule)=>oneSchedule.startDate.dateObj<this.pageDate)].at(-1);
    },
    getTheseScheduledDays:function(){
        if (this.scheduledDays.length===0) return []
        let return_value=[this.getStartingObj()]

        this.scheduledDays.map((oneScheduledDay)=>{
            if (
                oneScheduledDay.startDate.month===(this.pageDate.getMonth()+1) &&
                oneScheduledDay.startDate.year===this.pageDate.getFullYear()
            ) return_value.push(oneScheduledDay)
        })
        return return_value
    },
    isMoonDay:function(month, day, year){
        
        return (this.moonDays.find((oneMoonDay)=>(
            oneMoonDay.day===day && oneMoonDay.month===(month+1) && oneMoonDay.year===year))!==undefined
        )

    },
    getSpecialDay:function(month, day, year){
        return this.specialDates.find((oneSpecialDay)=>(
            oneSpecialDay.date.day===day && oneSpecialDay.date.month===(month+1) && oneSpecialDay.date.year===year))
    }

}