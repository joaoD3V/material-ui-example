import { Button } from '@mui/material';
import { SidebarMenu } from 'components/SidebarMenu';
import { useDrawer } from 'hooks/useDrawer';
import { useTheme } from 'hooks/useTheme';

export function Home() {
  const { toggleTheme } = useTheme();
  const { toggleDrawerOpen } = useDrawer();
  return (
    <>
      <SidebarMenu>
        <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
          Toggle Drawer
        </Button>
      </SidebarMenu>
    </>
  );
}
