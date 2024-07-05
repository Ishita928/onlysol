import React, { useState } from 'react';
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Fitness() {

  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box >
      <Link to="/">
<button className="bg-blue-200 text-red-500 font-bold py-2 px-4 rounded ml-[75rem] mt-[1rem]">BACK</button>
</Link>
       <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
       <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}
