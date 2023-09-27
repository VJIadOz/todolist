import { createRef, useState } from 'react'
import './Task.scss'

export default function Task(props){
    const [isEdit,setIsEdit] = useState(false)
    const inputRef = createRef(null)
    const startTimeRef = createRef(null)
    const endTimeRef = createRef(null) 
    const isMobileVersion = window.innerWidth <= 786

    function handleTap(event){
        let inputTime = event.currentTarget.children[1].firstChild.firstChild
        if(!props.value.isComplete){
            inputTime.focus()
            inputTime.scrollIntoView({behavior: "smooth", block: "start" })
        }
        props.editMobile.setIsEditedTask([props.value.id, inputTime])
    }

    if(!isEdit){
        return (
            <div onClick={(e)=>isMobileVersion && handleTap(e)} className={`Task ${props.value.isComplete ? "Task-complete" : props.darkTheme?"Task-dark":""}`}>
                <div className='editBtn_wrapper'>                       
                    <button disabled={props.value.isComplete} onClick={()=>setIsEdit(true)}>✎</button>
                </div>
                <div className='main_wrapper'>
                    <div className='text_wrapper'>
                        {!isMobileVersion ? 
                            <textarea ref={inputRef} disabled value={props.value.text}></textarea>
                        :
                            <textarea ref={inputRef}/>
                        }  
                    </div>
                    <div className='time_wrapper'>
                        <p><span>{props.value.timeStart}</span> -- <span>{props.value.timeEnd}</span></p>
                    </div>
                </div>
                <div className='twoBtn_wrapper'>
                    <button onClick={()=>props.deleteTask(props.value.id)}>🗑</button>
                    <button onClick={()=>{props.setCompelete(props.value.id)}} disabled={props.value.isComplete}>☑</button>
                </div>
            </div>
        )
    }else{
        return(
            <div className={`Task ${props.darkTheme?"Task-dark":""}`}>
                <div className='applyEditBtn_wrapper'>
                    <button onClick={()=>{
                        setIsEdit(false)
                        props.editTextTask(props.value.id, inputRef.current.value, startTimeRef.current.value, endTimeRef.current.value)
                    }}
                    >🗸</button>
                </div>
                <div className='main_wrapper'>
                    <div className='text_wrapper'>
                        <textarea ref={inputRef}></textarea>
                    </div>
                    <div className='time_wrapper'>
                        <input type="time" ref={startTimeRef} defaultValue={props.value.timeStart}/>
                        <input type="time" ref={endTimeRef} defaultValue={props.value.timeEnd}/>
                    </div>
                </div>
                <div className='cancelBtn_wrapper'>
                    <button onClick={()=>setIsEdit(false)}>✖</button>
                </div>
            </div>
        )
    }
}