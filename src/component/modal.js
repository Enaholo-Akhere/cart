import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComp = ({open, handleOpen, item }) => {
    const handleClose = () => {
        handleOpen(false)
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h6' id='modal-modal-title' component='h2'>
            {item.title}
          </Typography>
          <Typography variant='h3' id='modal-modal-title'  component='h2'>
            ${item.amount}
          </Typography>
          <Typography variant='body1' id='modal-modal-description' sx={{ mt: 2 }}>
            {item.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComp;