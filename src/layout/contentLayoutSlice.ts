import { createSlice } from '@reduxjs/toolkit';

export const contentLayoutSlice = createSlice({
  name: 'contentLayout',
  initialState: {
    isNotificationOpen: false,
    notification: { severity: 'success', message: '' },
  },
  reducers: {
    setNotificationOpen: (state, action) => {
      state.isNotificationOpen = action.payload;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { setNotificationOpen, setNotification } = contentLayoutSlice.actions;

export default contentLayoutSlice.reducer;
