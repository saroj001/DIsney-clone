import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import { HiHome,HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical,HiChevronLeft,HiChevronRight } from "react-icons/hi";
import HeaderItem from './HeaderItem';

export default function Header() {
  const [toggle,setToggle]=useState(false);
  const menu= [
    {
      name: 'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    }
  ]
  const name= [
    {
      name:'Saroj',
      age:'20'
    },
    {
      name:'Bishmita',
      age:'18'
    },
    {
      name:'Sabita',
      age:'25'
    }
  ]
  return (
    <div className='flex items-center gap-2 md:gap-8 justify-between p-5'>
      <div className='flex items-center gap-4 md:gap-8'>
        <div className="logo"><img src={logo} alt="Disney Plus" className='w-[90px] md:w-[115px] lg:w-[130px] object-cover' /></div>
        <div className='hidden md:flex gap-4 md:gap-8'>
          {menu.map((item)=>(
              <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-2 md:gap-5'>
          {menu.map((item,index)=>index<3&&(
              <HeaderItem name={''} Icon={item.icon} />
          ))}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle?<div className="absolute pt-4 ">
              <div className="p-4 border-[1px] border-grey-700 bg-[#121212]">
                {menu.map((item,index)=>index>2&&(
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
              </div>
              {/* htpps://api.themoviedb.org/3/movie/550?api_key=cfaad08655a123f6334be8acee2d225a */}
            </div>:null}
          </div>
        </div>
      </div>
      <div className='rightSection'>
        <img src="data:image/jpeg;base64,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" alt="Avatar" className='w-[40px] h-[40px] rounded-full object-full' />
      </div>
    </div>
  )
}
