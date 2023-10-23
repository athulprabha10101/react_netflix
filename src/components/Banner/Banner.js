import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../Consts/Constants'

function Banner() {
        const [movie, setMovie] = useState()
        useEffect(()=>{
            axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
                
                const mvindex = Math.floor(Math.random() * 20) + 1
                setMovie(response.data.results[mvindex])
            })
        },[])
    

    return (
    
        <div className="banner"
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`  }}
        >
            <div className="content">
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className="banner-buttons">
                    <button className="button">PLAY</button>
                    <button className="button">My list</button>
                </div>
                    <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
  )
}

export default Banner