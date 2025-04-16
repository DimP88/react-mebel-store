import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";

const RangeInput = ({ slider, setSlider }) => {
  const [value, setValue] = useState(slider);

  const debouncedSetSlider = useRef(
    debounce((newValue) => setSlider(newValue), 1000)
  ).current;

  useEffect(() => {
    setValue(slider);
  }, [slider]);

  useEffect(() => {
    return () => debouncedSetSlider.cancel();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    debouncedSetSlider(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={100}
        min={0}
        max={30000}
      />
    </Box>
  );
};

export default RangeInput;
