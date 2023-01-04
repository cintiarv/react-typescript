import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'



interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}

const initialState = [{
  nick:'cin',
  avatar:'https://i.pravatar.cc/150?u=cin',
  subMonths:4
}]

function App() {
const [subs, setSubs] = useState<AppState['subs']>([])
const [newSubsNumber, newSetSubsNumber] = useState<AppState['newSubsNumber']>(0)

useEffect(() => {
  setSubs(initialState)
  /* fetch('url')
  .then(res=>res.json())
  .then(subs => {
    setSubs(subs)
  }) */
}, [])

  return (
    <div className="App">
      <h1>subs</h1>
      <List subs={subs} />
      <Form onNewSub={setSubs} />
    </div>
  )
}

export default App
