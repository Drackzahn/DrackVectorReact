import './App.css'
import { BackgroundFarContext } from './data/context/backgroundFarContext'
import { BackgroundGroundContext } from './data/context/backgroundGroundContext'
import { BackgroundSimpleItemContext } from './data/context/backgroundSimpleItemContext'
import { DataContextWrapper } from './data/context/dataContext'
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
              <BackgroundSimpleItemContext>
                <DrackVectorInterface />
              </BackgroundSimpleItemContext>
            </BackgroundGroundContext>
          </BackgroundFarContext>
        </DataContextWrapper>
      </DrackThemeProvider>
    </SettingsContextWrapper>
  )
}

export default App
