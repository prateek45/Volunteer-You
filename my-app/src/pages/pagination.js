import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const Pagi = ({ totalPage, postsPerPage, nextPageEvents}) => {
/**
 * totalPage: total counts of events present
 * postPerPage: total amount of events allowed to be displayed on the page
 * nextPageEvents: function to load next page events
 */

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