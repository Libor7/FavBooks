import Grid from "@mui/material/Grid";
import { type PropsWithChildren } from "react";

const BooksLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid container spacing={4} p={4} height="100dvh">
      {children}
    </Grid>
  );
};

export default BooksLayout;
