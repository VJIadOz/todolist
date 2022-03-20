import React from 'react';
import Point from '../Point/Point.js'
import './MainContent.scss'

function MainField(props){

  function deletePoint(id){
      const currentPointIndex = props.pointsInfo.points.findIndex((value)=>value.id === id);
      let mas = [...props.pointsInfo.points];
      mas.splice(currentPointIndex, 1);
      props.pointsInfo.setPoints(mas);
  }
  
  function addNewTaskText(id, editText){
      const currentPointIndex = props.pointsInfo.points.findIndex((value)=>value.id === id);
      let mas = [...props.pointsInfo.points];
      mas[currentPointIndex].text = editText; 
      props.pointsInfo.setPoints(mas);
  }

  return (
    <div className={`MainContent`}>
      {props.pointsInfo.points.map((value)=>
        <Point
          key={value.id}
          id={value.id}
          info={{ theme: props.theme, pointsInfo: props.pointsInfo }}
          text={value.text}
          deletePoint = {deletePoint}
          addNewTaskText = {addNewTaskText}  
        />
      )}
    </div>  
  );
}

export default MainField;
