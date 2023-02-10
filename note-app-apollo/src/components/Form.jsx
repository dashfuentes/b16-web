import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_NOTE } from '../graphql/Mutation';
import {useNavigate, Link, useLocation} from "react-router-dom"

function Form() {

  /* Global variables declarion block   */
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState( "" );
  const [content, setContent] = useState( "" );
  const [date, setDate] = useState( "" );
  /* Global variables declarion block   */

  /* Location store variables   */
  const getState = location.state;
  const noteId = getState && getState !== undefined ? getState._id : "";
  const titleNote = getState && getState !== undefined ? getState.title : "";
  const contentNote = getState && getState !== undefined ? getState.content : "";
  const dateNote = getState && getState !== undefined ? getState.date : "";
  /* Location store variables   */
  
    useEffect(() => {
      
      if ( getState ) {
        setTitle( titleNote );
        setContent( contentNote );
        setDate(dateNote)
      }

    }, [])
  
  


  //Declare the mutation fn
  const [createNote] =  useMutation(CREATE_NOTE, {})

  return (
  
    <form
      className="my-14"
      onSubmit={ async ( event ) => {
        event.preventDefault();
         await createNote( {
          variables: {title,content,date}
         } )
        navigate('/home')

      }}    
    >
    <div class="mb-6">
      <label for="title" class="block mb-2 text-sm font-medium text-white dark:text-white">Title</label>
        <input
          onChange={( event ) => {
            setTitle(event.target.value)
          } }
          type="text"
          value={title}
          id="title"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
    </div>
    <div class="mb-6">
      <label for="content" class="block mb-2 text-sm font-medium text-white dark:text-white">Content</label>
        <textarea
           onChange={( event ) => {
            setContent(event.target.value)
          } }
          type="text"
          id="content"
          value={content}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
    </div>
    <div class="mb-6">
      <label for="date" class="block mb-2 text-sm font-medium text-white dark:text-white">Date</label>
        <input 
           onChange={( event ) => {
            setDate(event.target.value)
          } }
          type="date"
          value={date}
          id="date"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
    </div>
 
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Note</button>
</form>

  )
}

export default Form