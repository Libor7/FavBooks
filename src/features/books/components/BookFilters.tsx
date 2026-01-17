import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type BookFiltersProps = {
  value: string;
  onChange: (value: string) => void;
};

const BookFilters = ({ value, onChange }: BookFiltersProps) => {
  return (
    <Box mb={2}>
      <TextField
        label="Search books"
        fullWidth
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </Box>
  );
};

export default BookFilters;
