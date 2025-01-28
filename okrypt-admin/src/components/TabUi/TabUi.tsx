import { Box, Tab, Tabs } from "@mui/material";
import { COLORS } from "../../constants/theme";

const TabUi = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (state: number) => void;
}) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} mt={"30px"}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: COLORS.secondary,
          },
        }}
        centered
      >
        <Tab
          label="All Users Coin"
          sx={{
            fontSize: "1.4rem",
            textTransform: "capitalize",
            color: value === 0 ? COLORS.secondary : COLORS.white,
            "&.Mui-selected": {
              color: COLORS.secondary,
            },
          }}
        />
        <Tab
          label="All Coins Available"
          sx={{
            fontSize: "1.4rem",
            textTransform: "capitalize",
            color: value === 1 ? COLORS.secondary : COLORS.white,
            "&.Mui-selected": {
              color: COLORS.secondary,
            },
          }}
        />
      </Tabs>
    </Box>
  );
};

export default TabUi;
