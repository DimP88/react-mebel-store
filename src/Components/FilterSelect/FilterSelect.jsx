import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterSelect = ({ state, title, setState, array }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select value={state} label={title} onChange={handleChange}>
          {array.map((item) => (
            <MenuItem value={item} key={item}>
              {item === "asc"
                ? "по возрастанию цены"
                : item === "desc"
                ? "по убыванию цены"
                : item === "rate"
                ? "по популярности"
                : item}
            </MenuItem>
          ))}
          <MenuItem value={""}>по умолчанию</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
