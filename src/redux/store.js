// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };
// const middleware = (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }).concat(logger);

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig),
//     contacts:{}
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// export const persistor = persistStore(store);