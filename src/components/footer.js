import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import theme from '../theme'


const Footer = () => {
  return (
    <Container maxWidth="lg" component="footer" sx={{
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing(3)} 0`,
      [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(6)} 0`,
      }
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref legacyBehavior>
              <Typography variant="subtitle1" sx={{
                cursor: 'pointer'
              }}>
                Contact and help
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref legacyBehavior>
              <Typography variant="subtitle1" sx={{
                cursor: 'pointer'
              }}>
                Security tips
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref legacyBehavior>
              <Typography variant="subtitle1" sx={{
                cursor: 'pointer'
              }}>
                Post & Sell
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref legacyBehavior>
              <Typography variant="subtitle1" sx={{
                cursor: 'pointer'
              }}>
                Professional plan
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer