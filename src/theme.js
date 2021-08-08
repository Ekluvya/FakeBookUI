import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import React from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[50],
    },
  },
});
