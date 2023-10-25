import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material'; // Change this import
import { Search} from '@mui/icons-material'; // Change this import
import LeftDrawer from './LeftDrawer';

const SearchBar = ({ onClearClick}) => {

    const[search, setSearch] = useState('')

    const onSearchClick = (e)=>{
        setSearch(e.target.value)
        console.log(search)
        setSearch('')
    }
  return (
    <>
    <TextField
          fullWidth
          variant="outlined"
          value={search}
          placeholder="Search Product"
          onChange={(e)=>{setSearch(e.target.value)}}
          InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                      <div onClick={onClearClick} style={{cursor: 'pointer'}}>
                          <LeftDrawer />
                      </div>
                  </InputAdornment>
              ),
              endAdornment: (
                  <InputAdornment position="end">
                      <IconButton onClick={onSearchClick}>
                          <Search />
                      </IconButton>
                  </InputAdornment>
              ),
          }} />
          </>
  );
};

export default SearchBar;