import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get('q');

  return (
    <div>
      <h1>Search Results</h1>
      <p>Showing results for: <strong>{query}</strong></p>
      {/* Add your search result logic here */}
    </div>
  );
}

export default SearchResults;
