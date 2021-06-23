import React from 'react';

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props) => {
  const { article, author } = props;

  return (
    <div className="article shadow">
      <h3>{article.title}</h3>
      <div className="small-text">{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website}>
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