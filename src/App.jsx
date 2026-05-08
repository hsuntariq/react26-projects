import React from 'react'
import Screen from './Screen'
import EventListeners from './EventListeners'
import State from './hooks/State'
import Counter from './hooks/Counter'
import ShortCircuits from './ShortCircuits'
import Accordian from './hooks/projects/Accordian'
import Slider from './hooks/projects/Slider'
import Birthday from './hooks/projects/bdayreminder/Birthday'
import EffectBasics from './hooks/effect/EffectBasics'
import Api from './hooks/projects/apis/Api'
import MainPage from './hooks/projects/ecommerce/MainPage'
import Inputs from './controlledInputs/Inputs'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className=''>
      {/* <Screen /> */}
      {/* <EventListeners /> */}
      {/* <State /> */}
      {/* <Counter /> */}

      {/* <Accordian /> */}
      {/* <Slider /> */}
      {/* <Birthday /> */}
      {/* <EffectBasics /> */}
      {/* <Api /> */}
      {/* <MainPage /> */}
      <Inputs />

      <Toaster />




      {/* <ShortCircuits /> */}
    </div>
  )
}

export default App