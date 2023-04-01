import './App.css'
import { BackgroundFarContext } from './data/context/backgroundFarContext'
import { BackgroundGroundContext } from './data/context/backgroundGroundContext'
import { DataContextWrapper } from './data/context/dataContext'
import { DrackVectorInterface } from './userinterface/DrackVectorInterface'

function App() {

  return (
    <DataContextWrapper>
      <BackgroundFarContext>
        <BackgroundGroundContext>
          <DrackVectorInterface />
        </BackgroundGroundContext>
      </BackgroundFarContext>
    </DataContextWrapper>
  )
}

export default App
