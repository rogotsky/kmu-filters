import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ data }) => {
  const formattedDate = (wpDate, divider) => {
    const day = String(new Date(wpDate).getDate()),
      month = String(new Date(wpDate).getMonth() + 1),
      year = String(new Date(wpDate).getFullYear());

    const dateString = (day.length === 1 ? `0${day}` : day) + divider + (month.length === 1 ? `0${month}` : month) + divider + year;

    return dateString;
  };

  const tagsExist = !!data.document_tags,
    tagsString = data.document_tags.join(', '),
    postLink = data.acf.document_file ? data.acf.document_file : '#',
    date = formattedDate(data.modified, '.'),
    subtitle = !!data.acf.document_subtitle,
    imageSrc = data.images !== null ? data.images.medium : '/wp-content/themes/ratgeber/images/doc-thumbnail.png';

  return (
    <div className="service-item">
      <div className="service-item__thumbnail">
        <img src={imageSrc}/>
      </div>
      <div className="service-item__textbox">
        <p>{data.title.rendered} <br/>by {data.coauthors[0].display_name}</p>
        {subtitle && <p>- {data.acf.document_subtitle}</p>}
        {tagsExist && <p>Tags: {tagsString}</p>}
      </div>
      <div className="service-item__meta">
        <p>Letzes Update: <br/><span>{date}</span></p>
        <a target="_blank" href={postLink} className="service-item__download">Download</a>
      </div>
    </div>
  )
};

Post.propTypes = {
  data: PropTypes.object
};

export default Post;
