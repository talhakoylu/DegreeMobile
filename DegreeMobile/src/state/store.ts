import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root';

const store = configureStore({
  devTools: __DEV__,
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares;
  },
});

export default store;
