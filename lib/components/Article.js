import React from 'react';
import PropTypes from 'prop-types';


const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props, { store }) => {
  const { article } = props;
  const author = store.lookupAuthor(article.authorId);

  return (
    <div className="article shadow">
      <h3>{article.title}</h3>
      <div className="small-text">{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website} target="_blank" rel="noopener noreferrer">
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>
        <p>{article.body}</p>
      </div>

    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

Article.contextTypes = {
  store: PropTypes.object
};

export default Article;