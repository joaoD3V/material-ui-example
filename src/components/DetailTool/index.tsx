import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export type DetailToolProps = {
  buttonNewText?: string;
  showButtonNew?: boolean;
  showButtonSave?: boolean;
  showButtonDelete?: boolean;
  showButtonSaveBack?: boolean;
  showButtonBack?: boolean;
  showButtonNewLoading?: boolean;
  showButtonSaveLoading?: boolean;
  showButtonDeleteLoading?: boolean;
  showButtonSaveBackLoading?: boolean;
  showButtonBackLoading?: boolean;
  onClickButtonNew?: () => void;
  onClickButtonSave?: () => void;
  onClickButtonDelete?: () => void;
  onClickButtonSaveBack?: () => void;
  onClickButtonBack?: () => void;
};

export function DetailTool({
  buttonNewText = 'Novo',
  showButtonNew = true,
  showButtonSave = true,
  showButtonDelete = true,
  showButtonSaveBack = false,
  showButtonBack = true,

  showButtonNewLoading = false,
  showButtonSaveLoading = false,
  showButtonDeleteLoading = false,
  showButtonSaveBackLoading = false,
  showButtonBackLoading = false,

  onClickButtonNew,
  onClickButtonSave,
  onClickButtonDelete,
  onClickButtonSaveBack,
  onClickButtonBack,
}: DetailToolProps) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!mdDown ? (
        <Box
          gap={1}
          marginX={1}
          padding={1}
          paddingX={2}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          component={Paper}
          height={theme.spacing(8)}
        >
          {showButtonSave && !showButtonSaveLoading && (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              startIcon={<Icon>save</Icon>}
              onClick={onClickButtonSave}
            >
              <Typography
                variant="button"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                Salvar
              </Typography>
            </Button>
          )}

          {showButtonSaveLoading && <Skeleton width={110} height={60} />}

          {showButtonSaveBack && !showButtonSaveBackLoading && (
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              startIcon={<Icon>save</Icon>}
              onClick={onClickButtonSaveBack}
            >
              <Typography
                variant="button"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                Salvar e Voltar
              </Typography>
            </Button>
          )}

          {showButtonSaveBackLoading && <Skeleton width={180} height={60} />}

          {showButtonDelete && !showButtonDeleteLoading && (
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              startIcon={<Icon>delete</Icon>}
              onClick={onClickButtonDelete}
            >
              <Typography
                variant="button"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                Apagar
              </Typography>
            </Button>
          )}

          {showButtonDeleteLoading && <Skeleton width={110} height={60} />}

          {showButtonNew && !showButtonNewLoading && (
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              startIcon={<Icon>add</Icon>}
              onClick={onClickButtonNew}
            >
              <Typography
                variant="button"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                {buttonNewText}
              </Typography>
            </Button>
          )}

          {showButtonNewLoading && <Skeleton width={110} height={60} />}

          <Divider orientation="vertical" flexItem />

          {showButtonBack && !showButtonBackLoading && (
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              startIcon={<Icon>arrow_back</Icon>}
              onClick={onClickButtonBack}
            >
              <Typography
                variant="button"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                Voltar
              </Typography>
            </Button>
          )}

          {showButtonBackLoading && <Skeleton width={110} height={60} />}
        </Box>
      ) : (
        <SpeedDial
          ariaLabel="Details Action"
          sx={{ position: 'absolute', bottom: 0, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<Icon color="primary">add</Icon>}
            tooltipTitle={buttonNewText}
            onClick={onClickButtonNew}
          />
          <SpeedDialAction
            icon={<Icon color="primary">delete</Icon>}
            tooltipTitle="Apagar"
            onClick={onClickButtonDelete}
          />
          <SpeedDialAction
            icon={<Icon color="primary">save</Icon>}
            tooltipTitle="Salvar"
            onClick={onClickButtonSave}
          />
        </SpeedDial>
      )}
    </>
  );
}
