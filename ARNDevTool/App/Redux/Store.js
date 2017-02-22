import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducers from './Reducers/rootReducer';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);


// Create application store here with all required config for application.
const Store = createStore(rootReducers, compose(
  middleware,
  autoRehydrate(),
));

// Store State of Application
persistStore(Store, {
  storage: AsyncStorage,
  keyPrefix: 'FlowAppPersist',
  whitelist: ['app'],
});

export default Store;
