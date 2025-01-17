import React, { createContext, useState } from 'react';

interface AuthContextType {
    cantidadEnviadaGlobal: number | undefined;
    cantidadRecividaGlobal: number | undefined;
    setCantidaEnviadadGlobal: React.Dispatch<React.SetStateAction<number | undefined>>;
    setCantidaRecividadGlobal: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const AuthContext = createContext<AuthContextType>({
    cantidadEnviadaGlobal: undefined,
    cantidadRecividaGlobal: undefined,
    setCantidaEnviadadGlobal: () => { },
    setCantidaRecividadGlobal: () => { },
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [cantidadEnviadaGlobal, setCantidaEnviadadGlobal] = useState<number | undefined>(undefined);
    const [cantidadRecividaGlobal, setCantidaRecividadGlobal] = useState<number | undefined>(undefined);

    return (
        <AuthContext.Provider value={{ cantidadEnviadaGlobal, setCantidaEnviadadGlobal, cantidadRecividaGlobal, setCantidaRecividadGlobal }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };