
import './App.css'
import { useState, useEffect } from 'react';
import api from './api/post'
import Title from './components/Title';
import Player from './components/Player';

function App() {

const [playerData, setPlayerData] = useState({});

const fechData = async () => {
  try {
    

  }catch(err){
    const response = await api.get('https://www.balldontlie.io/api/v1/players');
        setPlayerData(response.data);
        
        console.log(playerData);
        console.log(playerData.data[15].first_name);
  }
}
 useEffect(() =>{
    const fetchPost = async () => {
      try {
        
      }catch(err){
        console.log(err.response)
      }
    }
    fetchPost();
  },[])

  
  return (
    <div className="App">
      <Title />
      <Player playerData={playerData}/>
    </div>
  );
}

export default App;
