import React from 'react'
import SearchBar from './SearchBar'
import { Box, Typography } from '@mui/material'
import ProductList from './ProductList'
import { Container } from 'react-bootstrap'

const Home = () => {

  return (
    <>
    <Container>
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <ProductList/>
    </Box>
    <br />
    </Container> 
    </>
  )
}

export default Home