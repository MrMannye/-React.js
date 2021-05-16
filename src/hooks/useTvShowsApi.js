import React, { useEffect, useState } from 'react';

const useTvShowsApi = url => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    window
      .fetch(url)
      .then(response => response.json())
      .then(data => setTvShows(data));
  }, [url]);
  return tvShows;
};

export default useTvShowsApi;
