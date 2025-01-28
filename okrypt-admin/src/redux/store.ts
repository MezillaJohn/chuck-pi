import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { authenticatedBase, unAuthenticatedBase } from "./services";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import saveCoinSlice from "./slice/saveCoinSlice";

const persistConfig = {
  key: "guident-apis",
  storage,
  whitelist: ["userCoin"],
  blacklist: ["Auth", "unAuth"],

  // disableRehydration: true,
};

const rootReducer = combineReducers({
  userCoin: saveCoinSlice,
  [unAuthenticatedBase.reducerPath]: unAuthenticatedBase.reducer,
  [authenticatedBase.reducerPath]: authenticatedBase.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authenticatedBase.middleware, unAuthenticatedBase.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

let persistor = persistStore(store);
export { store, persistor };
