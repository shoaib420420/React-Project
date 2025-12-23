import React from 'react';
import { useParams } from 'react-router-dom';

const Main = () => {
    const {id} = useParams();   
  return (
    <div className='bg-dark w-100 h-100 text-white'>
        <h1>id = {id}</h1>
    </div>
  )
}

export default Main