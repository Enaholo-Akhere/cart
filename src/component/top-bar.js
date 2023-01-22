import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';

const TopBar = () => {
  const { cart } = useSelector((state) => state.counter);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 3, p: 2 }}>
      <Box sx={{ flexGrow: -1 }}>
        <Typography
          sx={{
            bgcolor: cart.length < 1 ? 'red' : 'green',
            color: 'white',
            borderRadius: 10,
          }}
        >
          {cart.length}
        </Typography>
        <AddShoppingCartIcon />
      </Box>
    </Box>
  );
};

export default TopBar;
