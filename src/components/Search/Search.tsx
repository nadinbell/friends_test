import React, { ChangeEvent } from 'react';
import './Search.css';

type SearchProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const Search: React.FC<SearchProps> = ({ searchChange }) => {
  return (
    <div className='searchWrapper'>
      <input
        aria-label='Search Users'
        className='search'
        type='search'
        placeholder='search users'
        onChange={searchChange}
      />
    </div>
  );
}