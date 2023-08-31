import {createStore} from 'redux'
import combineRedux from './modules/combineRedux';
const enhancer = process.env.NODE_ENV === "development" 
? console.tron.createEnhancer() 
: null


const store = createStore(combineRedux,enhancer);
export default store