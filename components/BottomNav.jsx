import { Icon } from "@iconify/react";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="center">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="transparent"
        aria-label="basic tabs example"
      >
        <Tab icon={<Icon fontSize={24} icon="majesticons:home-line" />} />
        <Tab icon={<Icon fontSize={24} icon="gridicons:stats-up" />} />
        <Tab
          icon={<Icon fontSize={24} icon="iconamoon:profile-circle-fill" />}
        />
      </Tabs>
    </Box>
  );
};

export default BottomNav;
