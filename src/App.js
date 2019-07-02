import React from 'react';
import Search from './components/Search.js';
import FiltersList from './components/Filters/FiltersList';
import PostsList from './components/Posts/PostsList';

const App = () => {
	return (
			<div>
				<Search/>
				<div className="service-content">
					<FiltersList/>
					<PostsList/>
				</div>
			</div>
	)
};

export default App;
