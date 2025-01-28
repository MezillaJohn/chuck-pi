import { Autocomplete, TextField, Popper, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../constants/theme";
import { Asset } from "../../types/ApiResType";

// Custom Popper to style dropdown color
const RedPopper = styled(Popper)({
  "& .MuiAutocomplete-paper": {
    backgroundColor: COLORS.bottomTabBackground,
    color: "white",
    fontSize: "14px", // Default font size of the dropdown
  },
});

const AutoComp = ({
  data,
  searchTerm,
  setSearchTerm,
}: {
  data: any;
  searchTerm: any;
  setSearchTerm: (state: any) => void;
}) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      PopperComponent={RedPopper}
      sx={{
        flex: 1,
        backgroundColor: COLORS.textInputBackground,
        borderRadius: 2,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select"
          value={searchTerm}
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
              fontSize: "16px",
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
        />
      )}
      renderOption={(props, option: Asset) => (
        <MenuItem {...props} key={option.name} sx={{ fontSize: "14px" }}>
          {" "}
          {/* Increased font size */}
          <img
            src={option.webp64}
            alt={option.name}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          {option.name}
        </MenuItem>
      )}
      onChange={(event, newValue) => {
        setSearchTerm(newValue);
      }}
      autoSelect
    />
  );
};

export default AutoComp;
