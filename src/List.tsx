import React, { useState } from "react";

export default function List() {
  const [list, setList] = useState();
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setList(json);
    });
  return <>{JSON.stringify(list)}</>;
}
