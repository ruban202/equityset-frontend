import React from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';

type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
type Variant = 'filled' | 'outlined' | 'ghost';

interface RootStyleProps {
  color: Color;
  variant: Variant;
}

interface LabelProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color: Color;
  variant: Variant;
  sx?: SxProps;
}

const RootStyle = styled('span')<RootStyleProps>(({ theme, color, variant }) => {
  const isLight = theme.palette.mode === 'light';

  const styleFilled = (color: Exclude<Color, 'default'>) => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
  });

  const styleOutlined = (color: Exclude<Color, 'default'>) => ({
    color: theme.palette[color].main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette[color].main}`,
  });

  const styleGhost = (color: Exclude<Color, 'default'>) => ({
    color: theme.palette[color][isLight ? 'dark' : 'light'],
    backgroundColor: alpha(theme.palette[color].main, 0.16),
  });

  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,

    ...(color !== 'default'
      ? {
          ...(variant === 'filled' && { ...styleFilled(color) }),
          ...(variant === 'outlined' && { ...styleOutlined(color) }),
          ...(variant === 'ghost' && { ...styleGhost(color) }),
        }
      : {
          ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          }),
          ...(variant === 'ghost' && {
            color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          }),
        }),
  };
});

const Label: React.FunctionComponent<LabelProps> = ({
  children,
  color = 'default',
  variant = 'ghost',
  startIcon,
  endIcon,
  sx = [],
}) => {
  const style = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
  };

  return (
    <RootStyle
      color={color}
      variant={variant}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
  );
};

export default Label;
