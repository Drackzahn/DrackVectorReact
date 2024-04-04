import './App.css'
import { BackgroundFarContext } from './data/context/backgroundFarContext'
import { BackgroundGroundContext } from './data/context/backgroundGroundContext'
import { BackgroundSimpleItemContextProvider } from './data/context/backgroundSimpleItemContext'
import { DataContextWrapper } from './data/context/dataContext'
import { HumanoidFigureContextProvider } from './data/context/humanoidFigureContext'
import { SettingsContextWrapper } from './data/settings/SettingsContext'
import { DrackVectorInterface } from './userinterface/DrackVectorInterface'
import { DrackThemeProvider } from './userinterface/themes/DrackThemeProvider'

function App() {

  return (
    <SettingsContextWrapper>
      <DrackThemeProvider>
        <DataContextWrapper>
          <BackgroundFarContext>
            <BackgroundGroundContext>
              <BackgroundSimpleItemContextProvider>
                <HumanoidFigureContextProvider>
                  <DrackVectorInterface />
                </HumanoidFigureContextProvider>
              </BackgroundSimpleItemContextProvider>
            </BackgroundGroundContext>
          </BackgroundFarContext>
        </DataContextWrapper>
      </DrackThemeProvider>
    </SettingsContextWrapper>
  )
}

export default App
