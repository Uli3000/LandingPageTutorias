import { Box, Stack } from '@mui/material'
import './App.css'
import MyAppBar from './components/MyAppBar'
import TutorCard from './components/TutorCard'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { ImageCarousel } from './components/ImageCarousel'
import Footer from './components/Footer'
import { ContactForm } from './components/ContactForm'
import { Map } from './components/Map'

function App() {

  return (
    <>
      <MyAppBar />
      <Home />
      <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent={'center'} spacing={2} margin={3}>
        <TutorCard name='Juan Carlos' subject='Matematicas' gender='male' />
        <TutorCard name='Benito Juarez' subject='Historia' gender='male' />
        <TutorCard name='Maria Gonzales' subject='Quimica' gender='female' />
        <TutorCard name='Estefania Martinez' subject='Computacion' gender='female' />
      </Stack>
      <AboutUs />
      <ImageCarousel />
      <div className='contactoInfo' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', marginTop: '2rem'}}>
      <Map />
      <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default App
