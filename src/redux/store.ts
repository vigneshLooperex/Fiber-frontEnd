import { configureStore } from "@reduxjs/toolkit";
import { api } from "./service/api";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootStote = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch