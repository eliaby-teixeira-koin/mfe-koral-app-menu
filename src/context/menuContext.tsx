import { createContext, ReactNode, useState } from "react";

interface MenuContextProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}
export const MenuContext = createContext({} as MenuContextProps);

interface MenuContextProviderProps {
  children: ReactNode
}
export function MenuContextProvider({
  children
}: MenuContextProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <MenuContext.Provider value={{
      isOpen,
      setIsOpen
    }}>
      {children}
    </MenuContext.Provider>
  )
}
