import { useRouter } from 'next/router';

import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export type ListItemLinkProps = {
  to: string;
  label: string;
  icon: string;
  onClick?: () => void;
};

export function ListItemLink({ icon, label, onClick, to }: ListItemLinkProps) {
  const router = useRouter();
  const pathName = router.pathname;
  const match = pathName === to ? true : false;

  function handleClick() {
    onClick?.();
    router.push(to);
  }

  return (
    <ListItemButton selected={match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
