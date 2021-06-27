import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';


const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props) => {
  const { article, author } = props;

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

function extraProps(store, originalProps){
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}


export default storeProvider(extraProps)(Article);