import React, {Suspense, useEffect } from "react";
import axios from "axios";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography";

function Photo() {
// fixme: grid-list 를 구현해주세요.
  // https://material-ui.com/components/grid-list/

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos");
  }, []);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos");
  }, []);
  return <>Photo</>;
}

function Swiper() {
  // fixme: Swiper 를 구현해 주세요.
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        maxWidth: 800,
      },
      media: {
        height: 600,
        padding: 10,
      },

      expandOpen: {
        transform: "rotate(180deg)",
      },
    })
  );
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="아래 이미지와 같은 스와이퍼를 구현해주세요" />
        <CardMedia className={classes.media} image="./swiper.png" />
        <CardContent>
          <Typography paragraph>- 임의의 3개의 이미지로 작업 </Typography>
          <Typography paragraph>- 왼쪽 이미지가 살짝 보여야함</Typography>
          <Typography paragraph>
            - 이미지 하단부에 이미지에 관한 설명이 있어야함{" "}
          </Typography>
          <Typography paragraph>- www.dailyhotel.com 페이지 참고</Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
      {/*여기서부터 구현하시면 됩니다*/}
    </>
  );
}

export default Photo
