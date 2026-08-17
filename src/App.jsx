
import './App.css'
import events from './eventsData.json'
import { PageBoard } from './PageBoard/PageBoard'
import Title from './Title/Title'

function App() {

  return (
    <>
    <Title />
    <PageBoard events={events} />
    </>
  )
}

export default App
