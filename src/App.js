import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TopBar from './component/top-bar';
import { incrementQuantity, decrementQuantity, addToCart } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalComp from './component/modal';

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});
  const { testData, cart } = useSelector((state) => state.counter);
  const handleViewItem = (data) => {
    setItem(data);
    setOpen(true);
  };

  return (
    <div className='App'>
      <ModalComp open={open} handleOpen={setOpen} item={item} />
      <Box sx={{ width: '90%', ml: '5%' }}>
        <TopBar />
        <ToastContainer />
        <Grid container spacing={2}>
          {testData.map((data, i) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={data.id}
              >
                <Card>
                  <CardMedia
                    sx={{ height: 140, cursor: 'pointer' }}
                    image={data.image}
                    onClick={() => handleViewItem(data)}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      sx={{ textAlign: 'center' }}
                    >
                      {data.title}
                    </Typography>
                  </CardContent>
                  <Box>
                    <Typography variant='h4' color='text.secondary' sx={{}}>
                      ${data.amount}
                    </Typography>
                  </Box>
                  <CardActions
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Button
                      size='small'
                      sx={{
                        bgcolor: '#ff0100',
                        color: 'white',
                        '&:hover': { bgcolor: '#ff0090' },
                      }}
                      onClick={() => dispatch(decrementQuantity(i))}
                    >
                      <RemoveIcon />
                    </Button>
                    <Typography sx={{ px: 1 }}>{data.quantity}</Typography>
                    <Button
                      size='small'
                      onClick={() => dispatch(incrementQuantity(i))}
                      sx={{
                        bgcolor: '#008001',
                        color: 'white',
                        '&:hover': { bgcolor: '#005001' },
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </CardActions>
                  <Button
                    variant='outlined'
                    sx={{ my: 2 }}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          item: data.title,
                          quantity: data.quantity,
                          price: data.amount,
                        })
                      )
                    }
                  >
                    ADD TO CART
                  </Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
