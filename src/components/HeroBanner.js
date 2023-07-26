import React from 'react'
import {Box,Stack,Typography,Button,Divider } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import { DisplaySettings } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs:"70px"},
      ml: {sm: '50px'}
    }} position="relative" p="24px">
      <Typography fontFamily= "Oswald, sans-serif" color="#0E6655" fontWeight="700"
        sx={{fontSize: {lg: '44px', xs:'40px'}}}
        mb='33px' mt='30px'
      >
        PATIENCE, <br/> BELIEVE AND<br /> CONSISTENCY
      </Typography>
      <Divider
        sx={{
          mt:'0',
          mb:'20px',
          ml:'0',
          mr:'0' // You can adjust the margin to control spacing around the divider
        }} />
      <Typography fontSize='22px'
      lineHeight='35px' mt={2} mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='success' href='#exercises'
        sx={{padding:'10px 15px'}}>
        Explore
      </Button>
      <Typography 
        fontWeight={600}
        color='#0E6655'
        sx={{
          opacity: 0.1,
          display: {lg:'block', xs:'none'}
        }}
        fontSize='200px'
        marginTop='55px'
      >
        NO EXCUSES
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner