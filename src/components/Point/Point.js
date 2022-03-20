import React, {useState} from 'react';
import './Point.scss'

function Point(props){
    const info = props.info;
    const [editText, setEditText] = useState();
    const [editVersion, setEditVersion] = useState(false);
    const [finishedStyle, setFinishedStyle] = useState(false);

    return(
        <div className={`point ${finishedStyle ? "finishedPoint" : info.theme === "light" ? "point_light" : "point_dark"}`}>
            {!editVersion
                ?
                <div className="pointMainVersion">

                    <div className="fieldForEditButton">
                        <div className={`editButton ${finishedStyle ? "editButton_finished" : "editButton_notFinished"}`}
                            onClick={()=>{
                                if(!finishedStyle){
                                    setEditText(props.text);
                                    setEditVersion(true);
                                }
                            }}>
                            <p>✎</p>
                        </div>
                    </div>
            
                    <div className="fieldForTextTask">
                        <textarea wrap="soft" disabled className={`textTask ${finishedStyle ? "textTask_finishedStyle" : ""}`}>{props.text}</textarea>
                    </div>
                    
                    <div className="fieldFor_DeleteCancelfinished_Buttons">
                        {!finishedStyle
                        ?
                            <div className="deleteButton" onClick={()=>{props.deletePoint(props.id)}}>
                                <p>🗑</p>
                            </div>
                        :
                            <div className="deleteCancelButtons">
                                <div title="Delete task" className="deleteFinishedButton" onClick={()=>{props.deletePoint(props.id)}}>
                                    <p>🗑</p>
                                </div>
                                <div title="Cancel finish" className="cancelFinishedButton" onClick={()=>{setFinishedStyle(false)}}>
                                    <p>✖</p>
                                </div>
                            </div>
                        }  
                    </div>
                        
                    <div className="fieldForFinishedButton">
                        <div className={`finishedButton ${finishedStyle ? "finishedButton_finished" : "finishedButton_notFinished"}`} onClick={()=>{setFinishedStyle(true)}}>
                            <p>☑</p>
                        </div>
                    </div>
                </div>
                :
                <div className="pointEditVersion">

                    <div className="fieldForInput">
                        <input
                            autoFocus
                            className="input"
                            type="text"
                            value={editText==="__________" ? editText.slice(10) : editText}
                            onChange={(e) => setEditText(e.target.value)} 
                            onKeyPress={(event)=>{
                                if(event.code === "Enter") {
                                    props.addNewTaskText(props.id, editText);
                                    setEditVersion(false);
                                }
                            }} 
                        />
                    </div>
                    
                    <div className="fieldForButtons">
                        <div className="buttonsPoint">

                            <div title="Apply changes" className="apply" >
                                <p className="applyText" onClick={(e)=>{
                                    props.addNewTaskText(props.id, editText);
                                    setEditVersion(false);
                                }}>🗸</p>
                            </div> 

                            <div title="Cancel сhanges" className="cancel" >
                                <p className="cancelText" onClick={()=>{
                                   setEditVersion(false)
                                }}>✖</p>
                            </div>

                        </div>
                        
                    </div>
                      
                </div>
            
            }
            
        </div>
    );
    
}

export default Point;