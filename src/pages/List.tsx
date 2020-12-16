import React, { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';

export default function List() {
  // fixme: error를 수정해 주세요
  // https://material-ui.com/components/tables/ 을 사용해서 comments를 테이블에 보여주세요
  const [list, setList] = useState([]);
  
  const test = 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setList(json);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, []);

  // 테이블 컬럼 정보
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'email',
      headerName: 'Email',
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'postId',
      headerName: 'postId',
    },
    {
      field: 'body',
      headerName: 'body',
    },
  ];

  // return <>{JSON.stringify(list)}</>;
  return <>
    <div style={{ height: 700, width: '100%' }}> 
      <DataGrid rows={list} columns={columns} pageSize={10} checkboxSelection />
    </div>
  </>;

}
