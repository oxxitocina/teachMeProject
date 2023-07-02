import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: '1000', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <CircularProgress />
    </Box>
  );
}