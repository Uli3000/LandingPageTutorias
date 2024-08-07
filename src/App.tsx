import { Stack } from '@mui/material'
import './App.css'
import MyAppBar from './components/MyAppBar'
import TutorCard from './components/TutorCard'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { ImageCarousel } from './components/ImageCarousel'
import Footer from './components/Footer'

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
      <Footer />
    </>
  )
}

export default App
