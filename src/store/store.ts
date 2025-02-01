import { configureStore } from '@reduxjs/toolkit';
import contentLayoutReducer from '@/layout/contentLayoutSlice';

export const store = configureStore({
  reducer: { contentLayout: contentLayoutReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
