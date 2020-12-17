import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';

function Menu() {
// fixme: 과제3 햄버거 메뉴 클릭시 아래 메뉴를 mini-variant-drawer 구현
  // https://material-ui.com/components/drawers/#mini-variant-drawer
  return (
    <>
      <List>
        <Link to="/">Home</Link>
      </List>
      <List>
        <Link to="/about">About</Link>
      </List>
      <List>
        <Link to="/topics">Topics</Link>
      </List>
      <List>
        <Link to="/list">List</Link>
      </List>
      <List>
        <Link to="/photo">Photo</Link>
      </List>
      <List>
        <Link to="/swiper">swiper</Link>
      </List>
    </>
  );
}

export default Menu;
