import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue br3' type='search' placeholder='search robots' />
    </div>

  );
}

export default SearchBox;
