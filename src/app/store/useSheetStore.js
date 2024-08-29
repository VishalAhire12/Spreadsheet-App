// store/useSheetStore.js
import create from 'zustand';

const useSheetStore = create((set) => ({
  cells: {},
  updateCell: (id, content) =>
    set((state) => ({
      cells: { ...state.cells, [id]: content },
    })),
}));

export default useSheetStore;
