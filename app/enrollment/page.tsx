import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DirectDepositEnrollmentForm from '@components/forms/DirectDepositEnrollmentForm';

const EnrollmentPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h2" component="h1" align="center" mt={8}>
          New Direct Deposit Enrollment
        </Typography>
        <DirectDepositEnrollmentForm />
      </Box>
    </Container>
  );
};

export default EnrollmentPage;
