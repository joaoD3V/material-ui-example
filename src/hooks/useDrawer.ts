import { DrawerContext } from 'contexts/DrawerContext';
import { useContext } from 'react';

export function useDrawer() {
  const value = useContext(DrawerContext);

  return value;
}
