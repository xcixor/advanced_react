import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  return (
    <div className="article-list">
      <h2 className="page-head">Article List</h2>
      {Object.values(props.articles).map(article =>
        <Article
          key={article.id}
          article={article}
        />
      )}
    </div>
  );
};

export default ArticleList;