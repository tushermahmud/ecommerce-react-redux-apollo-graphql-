import {createStore} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares=[];
if(process.env.NODE_ENV==='development'){
 middlewares.push(logger);
}
export const store=createStore(rootReducer,composeWithDevTools(/*applyMiddleware(...middlewares)*/),);

export const persistor=persistStore(store);
export default {store,persistor};