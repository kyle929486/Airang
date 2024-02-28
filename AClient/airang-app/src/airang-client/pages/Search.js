import React, { useContext } from 'react';
import SearchContext from '../store/search-context';

const Search = () => {
  const mapCtx = useContext(SearchContext);

  return (
    <div>
      <h2>{mapCtx.sigun}</h2>
    </div>
  );
};

export default Search;
