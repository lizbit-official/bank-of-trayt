import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CompoundInterestCalculator from '@components/forms/CompoundInterestCalculator';

const CalculatePage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h2" component="h1" align="center" mt={8}>
          Compound Interest Calculator
        </Typography>
        <CompoundInterestCalculator />
      </Box>
    </Container>
  );
};

export default CalculatePage;
