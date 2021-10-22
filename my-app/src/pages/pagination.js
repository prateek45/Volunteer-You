import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, nextPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li onClick={() => nextPage(number)} key={number} className='page-item'>
              {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;