import { createContext, useContext, useState } from 'react';

    const NameContext = createContext();

    export const useNameContext = () => useContext(NameContext);

    export function NameProvider({ children }) {
    const [name, setName] = useState('User');

    return (
        <NameContext.Provider value={{ name, setName }}>
        {children}
        </NameContext.Provider>
    );
    }
