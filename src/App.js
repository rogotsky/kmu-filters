import React from 'react';
import Search from './components/Search.js';
import FiltersList from './components/Filters/FiltersList';
import PostsList from './components/Posts/PostsList';
import ZoomModal from './components/ZoomModal';
import './style.scss';

const App = () => {
  return (
    <div>
      <Search/>
      <div className="service-content">
        <FiltersList/>
        <PostsList/>
      </div>
      <ZoomModal/>
    </div>
  )
};

export default App;
