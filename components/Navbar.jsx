import React from "react";
import { Box, IconButton, Input, alpha } from "@mui/material";
import useAppMediaQuery from "../hooks/useMediaQuery";
import { ui_colors } from "../theme/theme";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const w490 = useAppMediaQuery(490);
  const w430 = useAppMediaQuery(430);
  return (
    <Box
      className="center"
      borderBottom={"1px solid " + alpha("#000", 0.1)}
      px={w430 ? 1 : 3}
      py={0.5}
      gap={1}
    >
      <IconButton>
        <Icon
          color={ui_colors.primary}
          fontSize={18}
          icon="heroicons-outline:menu-alt-4"
        />
      </IconButton>
      <Box
        mr={w490 ? 1 : "auto"}
        height={30}
        width={30}
        bgcolor={"red"}
        borderRadius={"50%"}
      ></Box>
      <Input
        sx={{
          position: w490 ? "initial" : "absolute",
          background: "#EFEFEF",
          left: "50%",
          transform: w490 ? "initial" : "translateX(-50%)",
          px: 1.2,
          borderRadius: 1.5,
          "::placeholder": { color: "#B0B0B0" },
          mr: w490 ? "auto" : 0,
          input: {
            ml: 1,
          },
          ":focus-within": {
            border: "1px solid " + ui_colors.primary,
            svg: {
              color: ui_colors.primary + " !important",
            },
          },
        }}
        startAdornment={
          <Icon color={"#B0B0B0"} fontSize={18} icon="ri:search-line" />
        }
        placeholder="Search"
        disableUnderline
      />
    </Box>
  );
};

export default Navbar;
