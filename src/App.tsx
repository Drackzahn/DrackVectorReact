import './App.css'
import { BackgroundFarContext } from './data/context/backgroundFarContext'
import { BackgroundGroundContext } from './data/context/backgroundGroundContext'
import { BackgroundSimpleItemContext } from './data/context/backgroundSimpleItemContext'
import { DataContextWrapper } from './data/context/dataContext'
import { DrackVectorInterface } from './userinterface/DrackVectorInterface'

function App() {

  return (
    <DataContextWrapper>
      <BackgroundFarContext>
        <BackgroundGroundContext>
          <BackgroundSimpleItemContext>
            <DrackVectorInterface />
          </BackgroundSimpleItemContext>
        </BackgroundGroundContext>
      </BackgroundFarContext>
    </DataContextWrapper>
  )
}

export default App
