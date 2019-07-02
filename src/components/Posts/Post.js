import React from 'react';

const Post = (props) => {
	const {data} = props;

	const formattedDate = (wpDate, divider = '.') => {
		let dd = String(new Date(wpDate).getDate()),
				mm = String(new Date(wpDate).getMonth() + 1),
				yyyy = String(new Date(wpDate).getFullYear());

		return (dd.length === 1 ? `0${dd}` : dd) + divider + (mm.length === 1 ? `0${mm}` : mm) + divider + yyyy;
	};

	return (
			<div className="service-item">
				<div className="service-item__thumbnail">
					<img src="/wp-content/themes/ratgeber/images/doc-thumbnail.png"/>
				</div>
				<div className="service-item__textbox">
					<p>{data.title.rendered}</p>
					{!!data.document_tags.length && <p>Tags: {data.document_tags.join(', ')}</p>}
				</div>
				<div className="service-item__meta">
					<p>Letzes Update:<br/><span>{formattedDate(data.modified)}</span></p>
					<a target="_blank" href={data.acf.document_file ? data.acf.document_file : '#'} className="service-item__download">Download</a>
				</div>
			</div>
	)
};

export default Post;
