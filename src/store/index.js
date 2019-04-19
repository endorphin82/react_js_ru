import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import randomId from "../middlewares/randomId";
import api from "../middlewares/api";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { history } from "../history";


const routerHistoryMiddleware = routerMiddleware(history);

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, randomId, api, logger, routerHistoryMiddleware)
);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;