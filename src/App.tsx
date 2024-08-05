import { Stack } from '@mui/material'
import './App.css'
import MyAppBar from './components/MyAppBar'
import TutorCard from './components/TutorCard'
import { Home } from './components/Home'

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
    </>
  )
}

export default App
