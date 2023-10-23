import './Post.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../Consts/Constants'
import React, {useEffect,useState} from 'react'
import YouTube from 'react-youtube'

function Post(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
    }).catch(err=>{
      console.log("Network error form catch block in POST.js");
    })
  })

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('No data in array');
      }
    }).catch(error=>{
      if (error.response && error.response.status === 404){
        console.log("Resource not found");
      }else{
        console.log(error.response.status + "error !!");
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((movie)=>
            <img onClick={()=>handleMovie(movie.id)} key={movie.backdrop_path} className={props.isSmall ? 'poster-small' :'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
          )}
            
            
        </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default Post