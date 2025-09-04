'use client'

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
    open: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return ( 
        <ModalContext.Provider value={{ open, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within Modal Provider');
    return ctx;
}

export default ModalProvider;
export { useModal };