import { createSlice } from '@reduxjs/toolkit';

const initialState = { isModalOpen: false, id: null };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal(state, { payload }) {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        id: payload,
      };
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
