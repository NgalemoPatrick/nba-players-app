import React from 'react'
import {useState, useEffect} from 'react'
import post from '../api/post';
import axios from 'axios';


const url = `https://www.balldontlie.io/api/v1/players`
const Player = () => {

    const [pdata, setPdata] = useState({});

    useEffect(() =>{

        const fetchPost = async () => {

            try {
                const response = await axios.get(url);
                setPdata(response.data);
                console.log(pdata.data[4]);

            }catch(err){
                console.log(err.response);
            }
        }
    fetchPost();    
    
  },[])

  

  return (
    <section>
        <h1>PLayers section</h1>
        <h1>{pdata.data[4].team.city}</h1>

    </section>
  )
}

export default Player
