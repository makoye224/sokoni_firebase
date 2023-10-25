import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, Container, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function LeftDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container style={{ backgroundColor: '#F0F0F0', minHeight: '900px' }}>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <br />
        <Box>
          <Button variant='secondary'>
            <Typography variant="h5">Filter Options</Typography>
          </Button>
          <br />
          <hr />
          <Box>
            <Button variant='secondary'>
              <Typography variant="h6">Price Range</Typography>
            </Button>
            <br />
            <Button variant='secondary'>Collection</Button>
            <br />
            <Button variant='secondary'>Category</Button>
            <br />
            <Button variant='secondary'>Size</Button>
            <br />
            <Button variant='secondary'>Color</Button>
            <br />
          </Box>
        </Box>
      </Box>
    </Container>
  );

  const anchor = 'left';

  return (
    <Container>
      <Box display='flex'>
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>
            <FilterListIcon />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      </Box>
    </Container>
  );
}
