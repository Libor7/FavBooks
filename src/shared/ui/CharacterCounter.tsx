import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type CharacterCounterProps = {
  currentLength: number;
  maxLength: number;
};

const CharacterCounter = ({
  currentLength,
  maxLength,
}: CharacterCounterProps) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Typography
        variant="caption"
        color={currentLength > maxLength ? "error" : "text.secondary"}
      >
        {currentLength} / {maxLength}
      </Typography>
    </Box>
  );
};

export default CharacterCounter;
