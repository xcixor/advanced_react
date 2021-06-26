import React from 'react';

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props) => {
  const { article, store } = props;
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

export default Article;