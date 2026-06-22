import { FC, useState } from 'react';
import { Box, Grid, Modal, Fade } from '@mui/material';
import { galleryImages } from '../pageContent/Gallery';

const Gallery: FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleOpen = (fileName: string) => {
    setSelected(fileName);
    setOpen(true);
  };

  return (
    <>
      <Grid container spacing={1.5}>
        {galleryImages.map((img, index) => (
          <Grid item key={index} xs={6}>
            <Box
              onClick={() => handleOpen(img.fileName)}
              sx={{
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: 1,
                border: '1px solid rgba(201, 168, 76, 0.15)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  border: '1px solid rgba(201, 168, 76, 0.6)',
                  boxShadow: '0 0 16px rgba(201, 168, 76, 0.12)',
                },
              }}
            >
              <img
                src={`/${img.fileName}`}
                alt={img.alt ?? ''}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: '68px' }}
      >
        <Fade in={open} timeout={300}>
          <Box
            onClick={() => setOpen(false)}
            sx={{
              outline: 'none',
              maxWidth: '82vw',
              maxHeight: '78vh',
              border: '1px solid rgba(201, 168, 76, 0.4)',
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: '0 0 40px rgba(0,0,0,0.8)',
            }}
          >
            <img
              src={`/${selected}`}
              style={{ maxWidth: '82vw', maxHeight: '78vh', display: 'block', objectFit: 'contain' }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Gallery;
