import React from 'react'
import "./ListItem.css"
const ListItem = () => {

  const categories = [
    "All", "Music", "React routers", "Computer Programming", "Movies", "old songs","News","Mixes","live","Dubbing","Cricket","Science fiction", "Supervillain" , "Anderoid", "Data structures", "Gaming", "mixes", "Javascript","Computer Security"
  ]

  return (
    <div className='mt-2 ml-4 flex border-red-900 h-auto items-center overflow-x-scroll hide-scroll-bar'>
      {
        categories.map((category)=>{
          return (
            <div key={category} className='border-b-2 border-gray-200 py-2 px-4 bg-gray-200 mx-1 hover:bg-gray-300 duration-300 cursor-pointer p-y-0  rounded-xl whitespace-nowrap py-[5px]  text-sm font-medium'>{category}</div>
          )
        })
      }
    </div>
  )
}

export default ListItem
