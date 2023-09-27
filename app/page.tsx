import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h1" align="center" mt={4}>
          Welcome to Bank of Trayt
        </Typography>
        <Typography variant="h2" align="center" mt={8}>
          Initiate a new Direct Deposit to earn 5% for 36 Months!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          LinkComponent={Link}
          href="/enrollment"
          sx={{ mt: 6, mx: 'auto' }}
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
