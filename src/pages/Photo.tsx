import React, { useEffect } from 'react';
import axios from 'axios';

function Photo() {
// fixme: grid-list 를 구현해주세요.
  // https://material-ui.com/components/grid-list/

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos');
  }, []);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos');
  }, []);
  return <>Photo</>;
}

export default Photo;
