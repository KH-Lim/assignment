import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import Typography from '@material-ui/core/Typography';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import zIndex from '@material-ui/core/styles/zIndex';

const swiperData = [
  {
    title: '댕댕이',
    img: './testImg/img1.png',
    content: '털뭉치입니다.'
  },
  {
    title: '냥이1',
    img: './testImg/img2.png',
    content: '흰색냥이.'
  },
  {
    title: '냥이2',
    img: './testImg/img3.png',
    content: '똥색냥이.'
  }
];

const useStyles = makeStyles(() => createStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 600,
    padding: 10,
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  swiperRoot: {
    width: '840px',
    height: '100%'
  },
  img: {
    width: '100%',
    height: '500px'
  },
  contentCard: {
    width: 275,
    marginLeft: 30
  }

}));

function SwiperPage() {
  // fixme: Swiper 를 구현해 주세요.
  const classes = useStyles();
  const [displayData, setDisplayData] = useState(swiperData[0]);

  const params = {
    width: 800,
    height: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true
    },
    coverflowEffect: {
      slideShadows: false,
    },
    onSlideChange: (swiper: any) => {
      setDisplayData(swiperData[swiper.activeIndex]);
    }
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
            - 이미지 하단부에 이미지에 관한 설명이 있어야함{' '}
          </Typography>
          <Typography paragraph>- www.dailyhotel.com 페이지 참고</Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
      {/* 여기서부터 구현하시면 됩니다 */}
      <div className={classes.swiperRoot}>
        <h2>Swiper</h2>
        <Swiper
          {...params}
          style={{ paddingLeft: '30px' }}
        >
          {swiperData.map((slideContent, index) => {
            return <SwiperSlide ><img src={slideContent.img} className={classes.img} /></SwiperSlide>;
          })}

        </Swiper>
        <Card className={classes.contentCard}>
          <CardContent>
            <Typography variant="h5" component="h2">{displayData.title} </Typography>
            <Typography variant="body2" component="p">{displayData.content} </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SwiperPage;
