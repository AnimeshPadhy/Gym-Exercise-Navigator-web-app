import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
    
    <button className="btn btn-primary" style={{ marginLeft: '21px', fontSize: '14px',borderColor:'#E74C3C', borderRadius: '20px', textTransform: 'capitalize', backgroundColor: '#E74C3C', color: '#fff' }}>
        {exercise.bodyPart}
      </button>

      <button className="btn btn-primary" style={{ marginLeft: '21px', fontSize: '14px',borderColor:'#F1C40F', borderRadius: '20px', textTransform: 'capitalize', backgroundColor: '#F1C40F', color: '#fff' }}>
        {exercise.target}
      </button>

    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
