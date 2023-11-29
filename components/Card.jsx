import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { size_fill, ui_colors } from "../theme/theme";
import { Icon } from "@iconify/react";
import useAppMediaQuery from "../hooks/useMediaQuery";

const Card = () => {
  const [is_heart, setIs_heart] = useState(false);
  const original_text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Corporis eius, libero culpa eligendi quisquam magnam molestias
    eaque illo earum voluptate et, perspiciatis minima laborum
    incidunt quidem, accusamus amet. Consectetur rerum tenetur nemo
    facere, ducimus deserunt beatae possimus illo aliquid voluptate,
    laboriosam exercitationem optio quis neque quia ab debitis quas,
    pariatur saepe nostrum. Non libero porro nulla commodi,
    accusantium adipisci natus dignissimos perferendis autem.
    Nesciunt, asperiores! Deserunt dicta nihil recusandae fugit,
    doloremque pariatur hic voluptatibus eaque, nemo quisquam
    tempora sunt delectus maxime error.  modi esse voluptatem quod
    dolorem velit qui dolor itaque fugit mactio saepe minima
    inventore, pariatur esse ipsa obcaecati perspiciatis sapiente
    ratione laudantium ab a in doloremque unde vitae dolor neque
    recusandae non, sed vel nihil! Modi praesentium vitae placeat
    labore! Voluptas quasi rem laborum?`;
    
  const sliced_text = original_text.slice(0, 70);
  const [text, setText] = useState(sliced_text);
  const w657 = useAppMediaQuery(657);
  const w387 = useAppMediaQuery(387);
  return (
    <Grid2
      xs={w657 ? 12 : 6}
      sx={{
        img: {
          width: size_fill,
          height: 400,
          objectFit: "cover",
          borderRadius: 2,
        },
      }}
      boxShadow={w657 ? "none" : "0px 0px 11px -8px rgba(0,0,0,0.17)"}
    >
      <Box bgcolor={"#fff"} borderRadius={2} p={2}>
        <Box className="center" gap={1} mb={2}>
          <Avatar />
          <Stack>
            <Typography fontWeight={600}>Arif</Typography>
            <Typography sx={{ opacity: "0.6" }}>Developer</Typography>
          </Stack>
          <IconButton sx={{ ml: "auto" }}>
            <Icon
              icon="solar:menu-dots-bold"
              fontSize={18}
              color={ui_colors.primary}
            />
          </IconButton>
        </Box>
        <Typography mb={2}>
          {text}
          {text.length !== original_text.length && "..."}
          <Typography
            display={"inline-block"}
            ml={1}
            fontWeight={600}
            variantMapping={{ body1: "span" }}
            onClick={() =>
              setText((p) =>
                p.length === original_text.length ? sliced_text : original_text
              )
            }
            sx={{
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {text.length === original_text.length ? "Read less" : "Read more"}
          </Typography>
        </Typography>
        <img 
        src="https://www.hrccd.com/blog/wp-content/uploads/2019/11/attractive-smile.jpg"
        onClick={console.log("Hola chato")} />
        <Box className="center" gap={0.5} py={0.5}>
          <IconButton onClick={() => setIs_heart((p) => !p)}>
            <Icon
              color={is_heart ? ui_colors.red : ui_colors.primary}
              fontSize={24}
              icon={is_heart ? "ph:heart-fill" : "ph:heart"}
            />
          </IconButton>

          <IconButton>
            <Icon
              color={ui_colors.primary}
              fontSize={24}
              style={{ scale: "1.1" }}
              icon="basil:comment-outline"
            />
          </IconButton>
          <IconButton>
            <Icon
              color={ui_colors.primary}
              fontSize={24}
              style={{ scale: "0.9" }}
              icon="ion:bookmark-outline"
            />
          </IconButton>
          <IconButton sx={{ ml: "auto" }}>
            <Icon
              color={ui_colors.primary}
              fontSize={24}
              style={{ scale: "1.2" }}
              icon="mdi-light:share"
            />
          </IconButton>
        </Box>
        <Box className="center">
          <Typography fontWeight={600} mr={1} color={ui_colors.red}>
            9,734 Likes
          </Typography>
          <Icon icon="mdi:dot" color={ui_colors.primary} opacity={0.4} />
          <Typography
            mr={"auto"}
            color={ui_colors.primary}
            sx={{ opacity: 0.7 }}
          >
            4,142 Comments
          </Typography>
          {!w387 && (
            <Typography color={ui_colors.primary} sx={{ opacity: 0.7 }}>
              4,142 Shares
            </Typography>
          )}
        </Box>
      </Box>
    </Grid2>
  );
};

export default Card;
