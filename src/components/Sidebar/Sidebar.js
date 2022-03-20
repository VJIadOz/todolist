import React, { useState } from 'react'
import './Sidebar.scss'

function Sidebar(props) {

    const [id, setId] = useState(0);

    return(
        <div className={`Sidebar ${props.themeInfo.theme === "light" ? "Sidebar_light" : "Sidebar_dark"}`}>
            <div className={`newTaskButton ${props.themeInfo.theme === "light" ? "newTaskButton_light" : "newTaskButton_dark"}`}
                onClick={()=>{
                    let mas = [...props.pointsInfo.points];
                    mas.push({text: "__________", id: id});
                    props.pointsInfo.setPoints(mas);
                    setId(id+1);
                }}>
                <div className={`newTaskButtonPlus ${props.themeInfo.theme === "light" ? "newTaskButtonPlus_light" : "newTaskButtonPlus_dark"}`}> </div>
            </div>

            <div className="ThemeButton" 
                onClick={()=>{
                    if(props.themeInfo.theme === "light"){
                        document.querySelector("body").style.background = "linear-gradient(45deg, #09033a, rgb(14, 63, 100))"
                        document.querySelector("body").style.backgroundRepeat = "no-repeat"
                        document.querySelector("body").style.backgroundAttachment = "fixed"
                        props.themeInfo.setTheme("dark")
                    } else {
                        document.querySelector("body").style.background = "linear-gradient(45deg, #3fe7af, 60%, white)"
                        document.querySelector("body").style.backgroundRepeat = "no-repeat"
                        document.querySelector("body").style.backgroundAttachment = "fixed"
                        props.themeInfo.setTheme("light")
                    }
                }}>
                <p className="ThemeSign">{props.themeInfo.theme === "light" ? "☾": "☼"}</p>
            </div>

        </div>
    );
}

export default Sidebar;