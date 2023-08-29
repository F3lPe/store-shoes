import {createStore} from 'redux'
import combineRedux from './modules/combineRedux';


const store = createStore(combineRedux);
export default store