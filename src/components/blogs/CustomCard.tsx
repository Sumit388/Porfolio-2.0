"use client";
import { styled } from "@mui/material/styles";
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Fab  } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { FaHeart, FaShare } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CustomCard({color}:{ color:string}) {
  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardHeader
        title="Shrimp and Chorizo"
        subheader="September 14, 2016"
        style={{ backgroundColor: color }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions className="pb-6">
        <Fab
          aria-label="like"
          color="error"
          size="small"
          className=" text-black hover:text-white"
        >
          <FaHeart className="text-2xl" />
        </Fab>
        <Fab
          aria-label="like"
          color="primary"
          size="small"
          className=" text-black hover:text-white"
        >
          <FaShare className="text-2xl" />
        </Fab>
        <Fab
          aria-label="like"
          color="success"
          size="small"
          className=" text-black hover:text-white"
        >
          <AiOutlineMore className="text-2xl" />
        </Fab>
      </CardActions>
    </Card>
  );
}
