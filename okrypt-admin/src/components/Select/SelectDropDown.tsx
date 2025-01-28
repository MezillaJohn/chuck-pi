import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { COLORS } from "../../constants/theme";
import { useState } from "react";

export default function SelectDropDown({
  selectOptions,
  setItem,
  label,
}: {
  selectOptions: any;
  label: string;
  setItem: any;
}) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: COLORS.textInputBackground,
        borderRadius: 2,
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: COLORS.textInputPlaceholder,
            fontSize: "14px",
          }}
        >
          {label ?? "Select"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
          sx={{
            color: "white",
            borderRadius: 2,
            "& .MuiInputBase-input": {
              color: "white",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              color: COLORS.textInputPlaceholder,
              fontSize: "15px",
            },
            "& .MuiSvgIcon-root": {
              color: COLORS.textInputPlaceholder,
              transform: "scale(1.8)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: COLORS.border2,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: COLORS.secondary,
              borderWidth: ".5px",
            },
          }}
        >
          {selectOptions?.map((item: any) => (
            <MenuItem
              key={item?.id}
              onClick={() => setItem(item)}
              value={item?.name}
              sx={{
                color: "white",
                fontSize: "16px",
              }}
            >
              <img
                className="w-[2.4rem] h-[2.4rem] mr-[1rem]"
                src={item?.webp64}
                alt="logo"
              />
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
