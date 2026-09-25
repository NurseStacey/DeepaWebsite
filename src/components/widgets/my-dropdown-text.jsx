import {useState, useEffect} from 'react'

export default function MyDropdownText({
    optionsList,
    setSelectedOption,
    selection,
    style,
    disable,
})
{
    const [inputText, setInputText]=useState("")
    const [matchingList,  setMatchingList]=useState([])

    useEffect(() => {
        setMatchingList(optionsList);
    }, [optionsList]);

    const selectionClicked=(item)=>{
        if (disable) return

        setSelectedOption(item)        
    }

    const handleChange = (e)=>{
        if (disable) return
        let thisText=e.target.value
        let newMatchingList=[]

        optionsList.map((oneItem)=>{
            if (oneItem.toLowerCase().includes(thisText)){
                newMatchingList.push(oneItem)
            }
        })
        setMatchingList(newMatchingList)
        
        if (newMatchingList.length === 1){
            setSelectedOption(newMatchingList[0])
        } else {
            setSelectedOption("")    
        }
    }

    useEffect(()=>{
        setInputText(selection);
    },[selection])

    const Test=()=>{console.log(selection )}

    return(
        <div
            style={{
                width:"150px",
                height:"250px",
                fontSize:"14px",
                font:"arial",
                display:"block",
                // border:"1px solid black",
                ...style
            }}>
            <input
                type="text"
                onChange={handleChange}
                value={inputText}
                style={{
                    width:"100%",
                    boxSizing: "border-box",
                    height:'20px'
                }}
                />
            <div
                style={{
                    width:"100%",
                    overflowY:"scroll",
                    height:'100%'
                }}
            >
                {matchingList.map((oneItem)=>
                    (oneItem!==undefined) ?
                    <div
                        key={oneItem}
                        onClick={()=>selectionClicked(oneItem)}
                        style={{
                            textAlign:"left",
                            cursor:"pointer",
                            backgroundColor: (selection===oneItem) ? 'green' : 'white'
                        }}
                        >
                        {oneItem}
                    
                    </div> :<></>
                )} 
            </div>
        </div>
    )
}