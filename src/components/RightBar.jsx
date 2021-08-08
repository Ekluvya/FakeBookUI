import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    marginTop: theme.spacing(3),
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  title2: {
    marginTop: theme.spacing(5),
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <Avatar
          alt="Travis Howard"
          src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://images.pexels.com/photos/8602627/pexels-photo-8602627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://images.pexels.com/photos/5085486/pexels-photo-5085486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </AvatarGroup>
      <Typography className={classes.title2} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/8594503/pexels-photo-8594503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/8165196/pexels-photo-8165196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/2837431/pexels-photo-2837431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/7255560/pexels-photo-7255560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/2902966/pexels-photo-2902966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </ImageListItem>
      </ImageList>
    </Container>
  );
};

export default RightBar;
