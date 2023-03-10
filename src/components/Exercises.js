import React,{useEffect,useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material/';

import {exercisesOptions,fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  return (
    <Box id="exercises"
       sx={{mt:{lg:'110px'}}}
       mt="50px"
       p="20px"
       >
        <Typography variant="h3" mb="46px">
          showing results
        </Typography>
        <Stack direction="row" sx={{gap:{lg:'110',xs:'50px'}}}
        flexwrap="wrap" justifyContent="center">
          {exercises.map((exercise,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
          </Stack>
    </Box>
  )
}

export default Exercises