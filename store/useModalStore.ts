import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));
