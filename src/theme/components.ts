import { Theme } from "@mui/material/styles";

export const components = {
  MuiCssBaseline: {
    styleOverrides: (theme: Theme) => ({
      ":root": {
        "--breakpoint-sm": theme.breakpoints.values.sm,
        "--breakpoint-md": theme.breakpoints.values.md,
        "--breakpoint-lg": theme.breakpoints.values.lg,
      },
    }),
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: ({ theme }: { theme: Theme }) => ({
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
          WebkitTextFillColor: theme.palette.text.primary,
          caretColor: theme.palette.text.primary,
        },
      }),
    },
  },
};
