import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';

export type ToolbarProps = {
  searchText?: string;
  showSearchInput?: boolean;
  onChangeSearchText?: (newText: string) => void;
  buttonText?: string;
  showButton?: boolean;
  onClickButton?: () => void;
};

export function Toolbar({
  searchText = '',
  showSearchInput = false,
  onChangeSearchText,
  buttonText = 'Novo',
  showButton = true,
  onClickButton,
}: ToolbarProps) {
  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      component={Paper}
    >
      {showSearchInput && (
        <TextField
          size="small"
          value={searchText}
          onChange={(e) => onChangeSearchText?.(e.target.value)}
          placeholder="Pesquisar..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}

      {showButton && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<Icon>add</Icon>}
          onClick={onClickButton}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
}
