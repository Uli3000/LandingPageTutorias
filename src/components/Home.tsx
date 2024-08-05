import { Container, Fab, Stack, Typography } from '@mui/material'
import Atropos from 'atropos/react'
import { Navigation } from '@mui/icons-material'

export const Home = () => {
    return(
        <Container sx={{ background: 'linear-gradient(0deg, rgba(25,25,25,1) 0%, rgba(99,111,156,1) 100%)', height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center',flexWrap: 'wrap' }} maxWidth='xl' >
        <Stack className='homeStack' sx={{ backgroundColor: 'rgba(0, 0, 35, .02)', width: {md: '10%', lg: '50%'}, height: '33%', borderRadius: '3%', textAlign: 'center' }} direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Typography fontWeight={'bold'} color={'powderblue'} variant='h3'>Bienvenido a nuestra pagina!</Typography>
          <Typography color={'silver'} variant='subtitle1'> Aqui podras conocer un poco mas sobre nosotros y nuestras increibles <b>Tutorias</b></Typography>
          <Fab variant="extended">
            <Navigation sx={{ mr: 1 }} />
            Descubre mas...
          </Fab>
        </Stack>
        <Atropos className='homeImage'
          shadow={false}
          alwaysActive
        >
          <img width='100%' height='100%' src='personImage.png' />
        </Atropos>
      </Container>
    )
}