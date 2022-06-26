import * as React from "react";
import { Box, SxProps } from "@mui/material";
import { Icon } from "@iconify/react";

const Iconify: React.FunctionComponent<{
  icon: string;
  width?: number;
  height?: number;
  color?: string;
  sx?: SxProps;
}> = ({ icon, height = 20, width = 20, sx = [], ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

export default Iconify;
