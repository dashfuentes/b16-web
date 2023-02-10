import React, {useEffect} from 'react'
import noteImg from '../assets/simple-notes.png'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_NOTES } from '../graphql/Queries';
import {Link} from "react-router-dom"


function Home() {

    //Execute the query function before render
    useEffect(() => {
      getNotes()
    }, [])
    

    //Call the get notes query from the backend API 
    const [getNotes, { data, error }] = useLazyQuery( GET_NOTES );

    if ( data ) {
        console.log(data)
    }
    
  return (
      <div className='flex'>
          {data && data.getNotes.map( ( { _id, title, content, date } ) => (
              

            <Link
              data-id= {_id}
              to="/create-note"
              state={{_id: _id, title:title,content:content, date:date}}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="rounded-t-lg" src={noteImg} alt="" />
              </a>
              <div className="p-5">
                   
                          <div className="w-72"> <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3> </div>
                         
                  
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
              
              </div>
            </Link>
          ))}
       
          
    </div>
  )
}

export default Home