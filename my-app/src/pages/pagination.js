import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const Pagi = ({ totalPage, postsPerPage, nextPageEvents}) => {

  function nextPage(page) {
    console.log(page);
    nextPageEvents(page);
  }

  return (
    <nav>
      <Pagination onChange={nextPage} total={totalPage} pageSize = {postsPerPage}/>
    </nav>
  );
};

export default Pagi;