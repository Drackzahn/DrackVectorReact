import './App.css'
import { DataContextWrapper } from './data/context/dataContext'
import { DrackVectorInterface } from './userinterface/DrackVectorInterface'

function App() {

  return (
    <DataContextWrapper>
      <DrackVectorInterface />
    </DataContextWrapper>
  )
}

export default App
