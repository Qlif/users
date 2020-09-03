import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/rootSaga';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(rootSaga);

export {store}
