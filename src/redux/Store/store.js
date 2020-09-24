import { createStore } from 'redux'
import retailreducer from './../Reducer/retailreducer'

const store = createStore(retailreducer)

export default store