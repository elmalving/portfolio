import React, { createContext, useContext, useState } from 'react';

type DropdownContextType = {
    isOpen: boolean;
    toggle: () => void;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

export const DropdownProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <DropdownContext.Provider value={{ isOpen, toggle }}>
            {children}
        </DropdownContext.Provider>
    );
};

export function useDropdown() {
    const context = useContext(DropdownContext);

    if (!context) {
        throw new Error(
            `${useDropdown.name} must be used within a ${DropdownProvider.name}`
        );
    }

    return context;
}
