import { ListItemLinkProps } from 'components/ListItemLink';
import { createContext, useCallback, useEffect, useState } from 'react';

type DrawerOption = {
  path: string;
} & Omit<ListItemLinkProps, 'onClick' | 'to'>;

type DrawerContexType = {
  isDrawerOpen: boolean;
  drawerOptions: DrawerOption[];
  toggleDrawerOpen: () => void;
  handleSetDrawerOptions: (newDrawerOptions: DrawerOption[]) => void;
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

export const DrawerContext = createContext({} as DrawerContexType);

export function DrawerContextProvider({
  children,
}: DrawerContextProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<DrawerOption[]>([]);

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        icon: 'home',
        path: '/',
      },
    ]);
  }, []);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: DrawerOption[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
