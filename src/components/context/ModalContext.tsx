import { createContext, useState, useContext, type ReactNode } from "react";
import RequestCallbackModal from "./../Forms/RequestCallbackModal";


interface ModalContextProps {
  openCallback: () => void;
  closeCallback: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCallback = () => setIsOpen(true);
  const closeCallback = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openCallback, closeCallback }}>
      {children}
      {isOpen && <RequestCallbackModal isOpen={isOpen} onClose={closeCallback} />}
    </ModalContext.Provider>
  );
};
