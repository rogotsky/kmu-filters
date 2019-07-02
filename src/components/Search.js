import React from 'react';

const Search = () => {
	return (
			<div className="service-search">
				<form className="service-search__form">
					<button>Suche</button>
					<input type="text" placeholder="Resultate innerhalb dieser Suche"/>
				</form>
				<p className="service-search__results">11,718 KMU Vorlagen stehen Ihnen zur Verfügung.</p>
			</div>
	);
};

export default Search;
