import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2';
const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';

function Slider() {
  const [movieList,setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth= window.innerWidth;
  useEffect(()=>{
    getTrendingVideos();
  },[])

  const getTrendingVideos=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      setMovieList(resp.data.results);
    })
  }
  const sliderLeft=(element)=> {
    element.scrollLeft-=screenWidth-110
  }
  const sliderRight=(element)=> {
    element.scrollLeft+=screenWidth-110
  }
  return (
    <div className='relative'>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderRight(elementRef.current)}/>
      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movieList.map((item)=>(
          <img src={IMAGE_BASE_URL+item.backdrop_path} alt={item.title} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 duration-100 ease-in' />
        ))}
      </div>
    </div>
  )
}

export default Slider
