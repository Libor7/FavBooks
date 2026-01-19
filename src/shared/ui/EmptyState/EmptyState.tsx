import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import classes from "./EmptyState.module.scss";

type EmptyStateProps = {
  message?: string;
};

const EmptyState = ({ message = "No items found" }: EmptyStateProps) => {
  return (
    <Box className={classes.container}>
      <Typography variant="body1" color="primary" fontWeight="bold">
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyState;
