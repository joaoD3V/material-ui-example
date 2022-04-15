import {
  Avatar,
  Divider,
  Drawer,
  List,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { ListItemLink } from 'components/ListItemLink';
import { useDrawer } from 'hooks/useDrawer';

export type SidebarMenuProps = {
  children: React.ReactNode;
};

export function SidebarMenu({ children }: SidebarMenuProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawer();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              src="https://github.com/joaoD3V.png"
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  to={drawerOption.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
