import React, {useState} from 'react'
import './App.css';
import MainField from './components/MainContent/MainContent.js';
import Sidebar from './components/Sidebar/Sidebar.js'


export function App() {
  const [theme, setTheme] = useState('light');
  const [points, setPoints] = useState([]);
  const themeInfo = {theme: theme, setTheme: setTheme};
  const pointsInfo = {points: points, setPoints: setPoints};

  return (
    <div className="App">
      <MainField theme={theme} pointsInfo={pointsInfo}/>
      <Sidebar themeInfo={themeInfo} pointsInfo={pointsInfo}/>
    </div>
  );
}
