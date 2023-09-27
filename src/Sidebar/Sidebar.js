import { createRef, useEffect, useState } from 'react'
import './Sidebar.css'

export default function Sidebar(props){
    const startTimeRef = createRef(null)
    const endTimeRef = createRef(null)
    const activeTask = props.listTasks.find(value => value.id === props.editMobile.isEditedTask[0])

    return(
    <>
        {!props.editMobile.isEditedTask[0] ?
            <aside className={`Sidebar ${props.themeInfo.darkTheme ? "Sidebar-dark" : ""}`}>
                <div className='btn' onClick={props.addNewTask}>
                    <span>+</span>
                </div>
                <div className='btn' onClick={()=>{props.themeInfo.setDarkTheme(!props.themeInfo.darkTheme)}}>
                    <span>{props.themeInfo.darkTheme ? "☼" : "☾"}</span>
                </div>
            </aside>
            :
            <footer className={`Sidebar ${props.themeInfo.darkTheme ? "Sidebar-dark" : ""}`}>
                <div className='btn' onClick={()=>{
                    if(!activeTask.isComplete){
                        props.editTextTask(props.editMobile.isEditedTask[0], props.editMobile.isEditedTask[1].value, startTimeRef.current.value, endTimeRef.current.value)
                    }
                    props.editMobile.setIsEditedTask([])
                    }}>
                    <span>✓</span>
                </div>
                {!activeTask.isComplete &&
                    <>
                        <div className='btn'
                            onClick={()=>{
                                props.setCompelete(props.editMobile.isEditedTask[0])
                                props.editMobile.setIsEditedTask([])
                            }}>
                            <span>☑</span>
                        </div>
                        <div className='inputTime_wrapper'>
                            <input type="time" ref={startTimeRef} defaultValue={activeTask.timeStart}/>
                            <input type="time" ref={endTimeRef} defaultValue={activeTask.timeEnd}/>
                        </div>
                    </>
                }
                <div className='btn' 
                    onClick={()=>{
                        props.deleteTask(props.editMobile.isEditedTask[0])
                        props.editMobile.setIsEditedTask([])
                    }}>
                    <span>✖</span>
                </div>
            </footer>
        }
    </>
    )
}